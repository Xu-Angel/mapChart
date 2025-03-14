const fs = require('fs')
const path = require('path')
const svgs = require('./svg.js')
function reverseSvgPath(d) {
  // 使用正则表达式匹配路径指令和参数
  const commands = d.match(/[MmLlHhVvCcSsQqTtAaZz]|[^MmLlHhVvCcSsQqTtAaZz\s]+/g)

  if (!commands) {
    return d // 如果没有匹配到指令，直接返回原始路径
  }

  // 提取起始坐标和结束坐标
  let startX, startY, endX, endY
  let currentX = 0,
    currentY = 0 // 当前坐标（用于相对路径指令）

  // 遍历指令，提取起始和结束坐标
  for (let i = 0; i < commands.length; i++) {
    const command = commands[i]
    if (/[MmLlHhVvCcSsQqTtAaZz]/.test(command)) {
      // 如果是路径指令
      const type = command.toUpperCase() // 转换为大写，忽略大小写
      if (type === 'M' || type === 'L' || type === 'C' || type === 'Q' || type === 'A') {
        // 提取坐标
        const x = parseFloat(commands[i + 1])
        const y = parseFloat(commands[i + 2])
        if (typeof startX === 'undefined') {
          startX = x
          startY = y
        }
        endX = x
        endY = y
      } else if (type === 'H') {
        // 水平线指令
        const x = parseFloat(commands[i + 1])
        if (typeof startX === 'undefined') {
          startX = x
          startY = currentY
        }
        endX = x
        endY = currentY
      } else if (type === 'V') {
        // 垂直线指令
        const y = parseFloat(commands[i + 1])
        if (typeof startX === 'undefined') {
          startX = currentX
          startY = y
        }
        endX = currentX
        endY = y
      } else if (type === 'Z') {
        // 闭合路径指令，结束坐标为起始坐标
        endX = startX
        endY = startY
      }
    }
  }

  console.log(`起始坐标: (${startX}, ${startY})`)
  console.log(`结束坐标: (${endX}, ${endY})`)

  // 反转路径指令
  const reversedCommands = commands.reverse()

  // 重新组合路径指令
  const reversedD = reversedCommands.join(' ')

  return reversedD
}

// 示例用法
const originalD =
  'M3 702.686V576.407C3 572.498 4.90445 568.833 8.10391 566.587L64.9349 526.679C66.9548 525.261 69.3629 524.5 71.831 524.5H93.6609C100.288 524.5 105.661 519.127 105.661 512.5V274.639C105.661 270.73 103.756 267.065 100.557 264.819L84.9495 253.859C81.75 251.612 79.8456 247.948 79.8456 244.038V148.026C79.8456 144.117 81.7501 140.452 84.9495 138.206L117.766 115.161C119.786 113.743 122.194 112.982 124.662 112.982H267.767C270.235 112.982 272.643 112.221 274.663 110.803L334.896 68.5065C338.096 66.2598 340 62.5954 340 58.6859V0'
const reversedD = reverseSvgPath(originalD)

console.log(reversedD)



console.log(reversedD)
function parsePathCommands(d, convertToRelative = false) {
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
    console.log(d, 'd')
    const 
    reverseSvgPath（d）
    const commands = parsePathCommands(d)
    pathsData.push(commands)
  }

  return pathsData
}
function extractColor(svgContent) {
  // 使用正则表达式提取 stroke 属性的颜色值
  const strokeRegex = /stroke="([^"]+)"/
  const match = svgContent.match(strokeRegex)

  if (match) {
    const strokeColor = match[1]
    return strokeColor
  } else {
    return '#fff'
  }
}
// 主函数
async function generatePathsFile() {
  try {
    const linesInfoObj = {}
    for (const key in svgs) {
      const svgData = svgs[key]
      const pathsData = extractPathsData(svgData)
      const pathColor = extractColor(svgData)
      linesInfoObj[key] = {
        pathsArr: pathsData.flat(),
        color: pathColor,
      }
    }

    const pathsFilePath = path.join(__dirname, 'linesInfo.js')
    const pathsContent = `export const paths = ${JSON.stringify(linesInfoObj, null, 2)};`
    await fs.promises.writeFile(pathsFilePath, pathsContent, 'utf-8')

    console.log('Paths file generated successfully.')
  } catch (error) {
    console.error('Error generating paths file:', error)
  }
}

// 运行主函数
generatePathsFile()
