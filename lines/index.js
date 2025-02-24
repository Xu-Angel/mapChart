const fs = require('fs')
const path = require('path')
const svgs = require('./svg.js')

function parsePathCommands(d, convertToRelative = true) {
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
          directiveObj: { directive: commandType, directiveValue: `${targetX} ${targetY}` },
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
          directiveObj: { directive: commandType, directiveValue: `${hX}` },
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
          directiveObj: { directive: commandType, directiveValue: `${vY}` },
        }
        currentY = vY
        break
      case 'C': {
        const [x1, y1, x2, y2, x, y] = valuesArray
        if (convertToRelative) {
          const dx1 = x1 - currentX
          const dy1 = y1 - currentY
          const dx2 = x2 - currentX
          const dy2 = y2 - currentY
          const dx = x - currentX
          const dy = y - currentY

          command = {
            id: commandId++,
            prevId: commands.length ? commands[commands.length - 1].id : null,
            nextId: null,
            x,
            y,
            type: 'cDirective',
            directiveObj: {
              directive: 'c',
              directiveValue: `${dx1} ${dy1} ${dx2} ${dy2} ${dx} ${dy}`,
            },
          }
        } else {
          command = {
            id: commandId++,
            prevId: commands.length ? commands[commands.length - 1].id : null,
            nextId: null,
            x,
            y,
            type: 'cDirective',
            directiveObj: {
              directive: 'C',
              directiveValue: `${x1} ${y1} ${x2} ${y2} ${x} ${y}`,
            },
          }
        }
        currentX = x
        currentY = y
        break
      }
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
// 从SVG内容中提取pathsData
function extractPathsData(svgContent) {
  const pathRegex = /<path[^>]*d="([^"]*)"/gi
  let match
  const pathsData = []

  while ((match = pathRegex.exec(svgContent))) {
    const d = match[1]
    const commands = parsePathCommands(d)
    pathsData.push(commands)
  }

  return pathsData
}

// 主函数
async function generatePathsFile() {
  try {
    const paths = {}
    for (const key in svgs) {
      const svgData = svgs[key]
      const pathsData = extractPathsData(svgData)
      paths[key] = pathsData.flat()
    }

    const pathsFilePath = path.join(__dirname, 'paths.js')
    const pathsContent = `export const paths = ${JSON.stringify(paths, null, 2)};`
    await fs.promises.writeFile(pathsFilePath, pathsContent, 'utf-8')

    console.log('Paths file generated successfully.')
  } catch (error) {
    console.error('Error generating paths file:', error)
  }
}

// 运行主函数
generatePathsFile()
