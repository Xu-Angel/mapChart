function calculateBezierLength(P0, P1, P2, P3, steps = 1000) {
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
const P0 = { x: 392.656, y: 766.7570000000001 }
const P1 = { x: P0.x + 6.626999999999981, y: P0.y + 0 }
const P2 = { x: P1.x + 12 - 5.373000000000019, y: P1.y + 12 - 12 }
const P3 = { x: 404.656, y: 662.7683 }

const length = calculateBezierLength(P0, P1, P2, P3)
console.log(`贝塞尔曲线的长度为: ${length}`)
