function findBestAnchorPoint(node1, node2) {
  const x1 = node1.x
  const y1 = node1.y
  const x2 = node2.x
  const y2 = node2.y

  // 计算向量
  const dx = x2 - x1
  const dy = y2 - y1

  // 归一化向量
  const length = Math.sqrt(dx * dx + dy * dy)
  const nx = dx / length
  const ny = dy / length

  // 找到与向量最接近的锚点
  let bestAnchor = [0, 0]
  let maxDotProduct = -Infinity

  const anchorPoints = [
    [0, 1],
    [0.5, 1],
    [1, 1],
    [1, 0.5],
    [1, 0],
    [0.5, 0],
    [0, 0],
    [0, 0.5],
  ]

  for (const [ax, ay] of anchorPoints) {
    const dotProduct = ax * nx + ay * ny
    if (dotProduct > maxDotProduct) {
      maxDotProduct = dotProduct
      bestAnchor = [ax, ay]
    }
  }

  return {
    anchor: bestAnchor,
    // 计算实际的锚点位置
    position: {
      x: x1 + bestAnchor[0] * length,
      y: y1 + bestAnchor[1] * length,
    },
  }
}

// 示例节点
const node1 = { x: 10, y: 10 }
const node2 = { x: 20, y: 20 }

const bestAnchorInfo = findBestAnchorPoint(node1, node2)
console.log(bestAnchorInfo)
