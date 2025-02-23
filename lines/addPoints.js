// 三次贝塞尔曲线公式
function cubicBezier(t, x0, y0, x1, y1, x2, y2, x3, y3) {
  let x = Math.pow(1 - t, 3) * x0 + 3 * Math.pow(1 - t, 2) * t * x1 + 3 * (1 - t) * Math.pow(t, 2) * x2 + Math.pow(t, 3) * x3
  let y = Math.pow(1 - t, 3) * y0 + 3 * Math.pow(1 - t, 2) * t * y1 + 3 * (1 - t) * Math.pow(t, 2) * y2 + Math.pow(t, 3) * y3
  return { x, y }
}

// 计算两点之间的距离
function distance(p1, p2) {
  return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2))
}

// 使用梯形法近似计算贝塞尔曲线长度
function bezierLength(x0, y0, x1, y1, x2, y2, x3, y3, segments = 1000) {
  let length = 0
  for (let i = 0; i < segments; i++) {
    let t = i / segments
    let p1 = cubicBezier(t, x0, y0, x1, y1, x2, y2, x3, y3)
    let p2 = cubicBezier(t + 1 / segments, x0, y0, x1, y1, x2, y2, x3, y3)
    length += distance(p1, p2)
  }
  return length
}

// 解析SVG路径指令并计算长度（这里只处理'c'指令）
function calculateSvgPathLength(d) {
  let commands = d.match(/[a-zA-Z][^a-zA-Z]*/g)
  let currentX = 0,
    currentY = 0
  let totalLength = 0

  commands.forEach((command) => {
    let args = command.slice(1).trim().split(/\s+/).map(Number)
    if (command[0].toLowerCase() === 'c') {
      // 处理相对坐标的'c'指令
      let x1 = currentX + args[0]
      let y1 = currentY + args[1]
      let x2 = currentX + args[2]
      let y2 = currentY + args[3]
      let x3 = currentX + args[4]
      let y3 = currentY + args[5]
      totalLength += bezierLength(currentX, currentY, x1, y1, x2, y2, x3, y3)
      currentX = x3
      currentY = y3
    }
    // 如果需要处理其他指令（如'M', 'L'等），可以在这里添加逻辑
  })

  return totalLength
}

// 示例使用
let d = 'M 392.656 766.757 c 6.626999999999981 0 12 -5.373000000000019 12 -12' // 注意：这里只包含了一个'c'指令，省略了后面的'L'指令，因为它与曲线长度计算无关
let length = calculateSvgPathLength(d)
console.log('贝塞尔曲线长度:', length.toFixed(2))
