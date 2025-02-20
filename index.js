const fs = require('fs')
const path = require('path')

// 主函数，接收一个目录路径
async function extractSVGPaths(directoryPath) {
  try {
    // 读取目录中的文件
    const files = await fs.promises.readdir(directoryPath)
    const svgFiles = files.filter((file) => path.extname(file).toLowerCase() === '.svg')

    console.log(`Found ${svgFiles.length} SVG files in the directory.`)

    for (const svgFile of svgFiles) {
      const svgFilePath = path.join(directoryPath, svgFile)
      const jsonFilePath = path.join(directoryPath, path.basename(svgFile, '.svg') + '.json')

      // 读取SVG文件内容
      const svgContent = await fs.promises.readFile(svgFilePath, 'utf-8')
      const pathsData = extractPathsData(svgContent)

      // 将提取的数据保存为JSON文件
      await fs.promises.writeFile(jsonFilePath, JSON.stringify(pathsData, null, 2), 'utf-8')
      console.log(`Generated JSON file for ${svgFile}`)
    }

    console.log('All SVG files processed successfully.')
  } catch (error) {
    console.error('Error processing SVG files:', error)
  }
}

// 从SVG内容中提取pathsData
function extractPathsData(svgContent) {
  // 使用正则表达式提取所有path的d属性
  const pathRegex = /<path[^>]*d="([^"]*)"/gi
  let match
  const pathsData = []

  while ((match = pathRegex.exec(svgContent))) {
    const d = match[1] // 获取路径的d属性
    const commands = parsePathCommands(d)
    pathsData.push(...commands)
  }

  return pathsData
}

// 解析SVG路径的d属性
function parsePathCommands(d) {
  const commands = []
  const regex = /([MmLlHhVvCcSsQqTtAa])([^MmLlHhVvCcSsQqTtAa]*)/g
  let match
  let currentX = 0
  let currentY = 0
  let commandId = 0

  while ((match = regex.exec(d))) {
    const [_, commandType, values] = match
    const valuesArray = values
      .trim()
      .split(/[\s,]+/)
      .map(Number)

    let command = {}
    switch (commandType.toUpperCase()) {
      case 'M':
      case 'L':
        const targetX = valuesArray[0]
        const targetY = valuesArray[1]
        currentX = targetX
        currentY = targetY
        command = {
          id: commandId++,
          prevId: commands.length ? commands[commands.length - 1].id : null,
          nextId: null,
          x: targetX,
          y: targetY,
          type: 'base',
          nextPoint: { directive: commandType, directiveValue: `${targetX} ${targetY}` },
        }
        break
      case 'H':
        const hX = valuesArray[0]
        command = {
          id: commandId++,
          prevId: commands.length ? commands[commands.length - 1].id : null,
          nextId: null,
          x: hX,
          y: currentY,
          type: 'base',
          nextPoint: { directive: commandType, directiveValue: `${hX}` },
        }
        currentX = hX
        break
      case 'V':
        const vY = valuesArray[0]
        command = {
          id: commandId++,
          prevId: commands.length ? commands[commands.length - 1].id : null,
          nextId: null,
          x: currentX,
          y: vY,
          type: 'base',
          nextPoint: { directive: commandType, directiveValue: `${vY}` },
        }
        currentY = vY
        break
      case 'C':
        const cX1 = valuesArray[0]
        const cY1 = valuesArray[1]
        const cX2 = valuesArray[2]
        const cY2 = valuesArray[3]
        const cX = valuesArray[4]
        const cY = valuesArray[5]
        currentX = cX
        currentY = cY
        command = {
          id: commandId++,
          prevId: commands.length ? commands[commands.length - 1].id : null,
          nextId: null,
          x: cX,
          y: cY,
          type: 'cDirective',
          nextDirective: { directive: commandType, directiveValue: `${cX1} ${cY1} ${cX2} ${cY2} ${cX} ${cY}` },
        }
        break
      default:
        console.warn(`Unsupported command type: ${commandType}`)
    }

    if (commands.length) {
      commands[commands.length - 1].nextId = command.id
    }
    commands.push(command)
  }

  return commands
}

// 主函数入口
if (require.main === module) {
  const directoryPath = process.argv[2]
  if (!directoryPath) {
    console.error('Please provide a directory path as an argument.')
    process.exit(1)
  }

  extractSVGPaths(directoryPath)
}
