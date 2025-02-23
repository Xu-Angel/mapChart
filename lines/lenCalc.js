function calculateBezierLengthFromRelative(startX, startY, dx1, dy1, dx2, dy2, dx, dy, steps = 1000) {
  // 将相对坐标转换为绝对坐标
  const P0 = { x: startX, y: startY }
  const P1 = { x: startX + dx1, y: startY + dy1 }
  const P2 = { x: P1.x + dx2, y: P1.y + dy2 }
  const P3 = { x: P2.x + dx, y: P2.y + dy }

  let length = 0
  const dt = 1 / steps

  for (let i = 0; i < steps; i++) {
    const t = i * dt
    const tNext = (i + 1) * dt

    const x = (1 - t) ** 3 * P0.x + 3 * t * (1 - t) ** 2 * P1.x + 3 * t ** 2 * (1 - t) * P2.x + t ** 3 * P3.x
    const y = (1 - t) ** 3 * P0.y + 3 * t * (1 - t) ** 2 * P1.y + 3 * t ** 2 * (1 - t) * P2.y + t ** 3 * P3.y

    const xNext = (1 - tNext) ** 3 * P0.x + 3 * tNext * (1 - tNext) ** 2 * P1.x + 3 * tNext ** 2 * (1 - tNext) * P2.x + tNext ** 3 * P3.x
    const yNext = (1 - tNext) ** 3 * P0.y + 3 * tNext * (1 - tNext) ** 2 * P1.y + 3 * tNext ** 2 * (1 - tNext) * P2.y + tNext ** 3 * P3.y

    const dx = xNext - x
    const dy = yNext - y
    length += Math.sqrt(dx * dx + dy * dy)
  }

  return length
}

// 示例：计算一个三次贝塞尔曲线的长度
const startX = 392.656
const startY = 766.7570000000001
const dx1 = 6.626999999999981
const dy1 = 0
const dx2 = 12
const dy2 = -5.373000000000019
const dx = 12
const dy = -12

const length = calculateBezierLengthFromRelative(startX, startY, dx1, dy1, dx2, dy2, dx, dy)
console.log(`贝塞尔曲线的长度为: ${length}`)
