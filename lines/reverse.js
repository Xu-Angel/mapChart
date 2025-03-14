// const parse = require('parse-svg-path')
// const serialize = require('serialize-svg-path')

// function reverseSvgPath(d) {
//   const commands = parse(d)
//   if (commands.length === 0) return d

//   // 收集所有路径段的终点坐标
//   const points = []
//   let currentPoint = [0, 0]

//   commands.forEach((cmd) => {
//     const [type, ...args] = cmd
//     switch (type) {
//       case 'M':
//       case 'L':
//         currentPoint = [args[0], args[1]]
//         break
//       case 'C':
//         currentPoint = [args[4], args[5]]
//         break
//       case 'V':
//         currentPoint[1] = args[0]
//         break
//       case 'H':
//         currentPoint[0] = args[0]
//         break
//     }
//     points.push([...currentPoint])
//   })

//   // 构建反转路径
//   const reversed = []
//   reversed.push(['M', ...points[points.length - 1]]) // 以原路径终点为新起点

//   for (let i = commands.length - 1; i > 0; i--) {
//     const cmd = commands[i]
//     const prevCmd = commands[i - 1]
//     const [type] = cmd

//     switch (type) {
//       case 'M':
//         reversed.push(['L', ...points[i - 1]])
//         break
//       case 'L':
//         reversed.push(['L', ...points[i - 1]])
//         break
//       case 'C':
//         // 反转三次贝塞尔曲线控制点
//         reversed.push([
//           'C',
//           cmd[3],
//           cmd[4], // 原第二个控制点
//           cmd[1],
//           cmd[2], // 原第一个控制点
//           ...points[i - 1], // 新终点（原起点）
//         ])
//         break
//       case 'V':
//         reversed.push(['V', points[i - 1][1]])
//         break
//       case 'H':
//         reversed.push(['H', points[i - 1][0]])
//         break
//       default:
//         reversed.push([type, ...cmd.slice(1)])
//     }
//   }

//   return serialize(reversed)
// }
// const originalPath =
//   'M3 702.686V576.407C3 572.498 4.90445 568.833 8.10391 566.587L64.9349 526.679C66.9548 525.261 69.3629 524.5 71.831 524.5H93.6609C100.288 524.5 105.661 519.127 105.661 512.5V274.639C105.661 270.73 103.756 267.065 100.557 264.819L84.9495 253.859C81.75 251.612 79.8456 247.948 79.8456 244.038V148.026C79.8456 144.117 81.7501 140.452 84.9495 138.206L117.766 115.161C119.786 113.743 122.194 112.982 124.662 112.982H267.767C270.235 112.982 272.643 112.221 274.663 110.803L334.896 68.5065C338.096 66.2598 340 62.5954 340 58.6859V0' // 原始路径
// const reversedPath = reverseSvgPath(originalPath) // 转换后的路径
// console.log(reversedPath)
function reverseSvgPath(d) {
  const parseCommands = (d) => {
    const commandRegex = /([A-Z])\s*((?:-?\d*\.?\d+\s*)+)/gi
    const commands = []
    let match
    while ((match = commandRegex.exec(d)) !== null) {
      const type = match[1].toUpperCase()
      const args = match[2]
        .trim()
        .split(/[\s,]+/)
        .filter((x) => x)
        .map(Number)
      commands.push({ type, args })
    }
    return commands
  }

  const toAbsolute = (commands) => {
    let x = 0,
      y = 0
    return commands.map((cmd) => {
      let absCmd
      switch (cmd.type) {
        case 'M':
          ;[x, y] = cmd.args
          absCmd = { type: 'M', args: [x, y], x, y }
          break
        case 'L':
          ;[x, y] = cmd.args
          absCmd = { type: 'L', args: [x, y], x, y }
          break
        case 'C':
          const [x1, y1, x2, y2, xEnd, yEnd] = cmd.args
          x = xEnd
          y = yEnd
          absCmd = { type: 'C', args: [x1, y1, x2, y2, x, y], x, y }
          break
        case 'V':
          y = cmd.args[0]
          absCmd = { type: 'V', args: [y], x, y }
          break
        case 'H':
          x = cmd.args[0]
          absCmd = { type: 'H', args: [x], x, y }
          break
        default:
          absCmd = { ...cmd, x, y }
          break
      }
      return absCmd
    })
  }

  const commands = parseCommands(d)
  const absolute = toAbsolute(commands)

  if (absolute.length === 0) return ''

  let reversed = []
  let lastX = absolute[absolute.length - 1].x
  let lastY = absolute[absolute.length - 1].y
  reversed.push(`M ${lastX} ${lastY}`)

  for (let i = absolute.length - 1; i > 0; i--) {
    const cmd = absolute[i]
    const prev = absolute[i - 1]
    switch (cmd.type) {
      case 'M':
        break
      case 'L':
        reversed.push(`L ${prev.x} ${prev.y}`)
        break
      case 'C':
        const [x1, y1, x2, y2] = cmd.args
        reversed.push(`C ${x2} ${y2} ${x1} ${y1} ${prev.x} ${prev.y}`)
        break
      case 'V':
        reversed.push(`V ${prev.y}`)
        break
      case 'H':
        reversed.push(`H ${prev.x}`)
        break
    }
  }

  return reversed.join(' ')
}
const originalD =
  'M3 702.686V576.407C3 572.498 4.90445 568.833 8.10391 566.587L64.9349 526.679C66.9548 525.261 69.3629 524.5 71.831 524.5H93.6609C100.288 524.5 105.661 519.127 105.661 512.5V274.639C105.661 270.73 103.756 267.065 100.557 264.819L84.9495 253.859C81.75 251.612 79.8456 247.948 79.8456 244.038V148.026C79.8456 144.117 81.7501 140.452 84.9495 138.206L117.766 115.161C119.786 113.743 122.194 112.982 124.662 112.982H267.767C270.235 112.982 272.643 112.221 274.663 110.803L334.896 68.5065C338.096 66.2598 340 62.5954 340 58.6859V0'

const reversedD = reverseSvgPath(originalD)
console.log(reversedD) // 输出反转后的路径字符串
