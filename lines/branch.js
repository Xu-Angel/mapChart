function calculateDirection(source, target) {
  const sourceX = source.x
  const sourceY = source.y
  const targetX = target.x
  const targetY = target.y

  // 水平线
  if (targetX === sourceX) {
    // 垂直线
    return targetY > sourceY ? 'S' : 'N'
  } else if (targetY === sourceY) {
    return targetX > sourceX ? 'E' : 'W'
  } else if (targetX > sourceX && targetY > sourceY) {
    // 东南方向
    return 'ES'
  } else if (targetX < sourceX && targetY > sourceY) {
    // 西南方向
    return 'WS'
  } else if (targetX < sourceX && targetY < sourceY) {
    // 西北方向
    return 'WN'
  } else if (targetX > sourceX && targetY < sourceY) {
    // 东北方向
    return 'EN'
  }
}

function calculateNewCoordinate(source, distance, angle) {
  const sourceX = source.x
  const sourceY = source.y

  // 将角度从度数转换为弧度
  const radians = (angle * Math.PI) / 180

  // 计算新坐标
  const newX = sourceX + distance * Math.cos(radians)
  const newY = sourceY + distance * Math.sin(radians)

  return { x: newX, y: newY }
}

function generateBranchNodes(mainNode, prevMainNode, branchIndex, totalBranches) {
  const direction = calculateDirection(prevMainNode, mainNode)
  const baseAngle = {
    N: 180,
    S: 0,
    E: 270,
    W: 90,
    ES: 135,
    WS: 225,
    EN: 315,
    WN: 45,
  }

  const angleInterval = 360 / totalBranches
  const angle = baseAngle[direction] + branchIndex * angleInterval

  const distance = 50 // 连线距离
  return calculateNewCoordinate(mainNode, distance, angle)
}

// 使用示例
const mainNodes = [
  { id: 'node1', x: 100, y: 200, next: 'node2' },
  { id: 'node2', x: 300, y: 200, next: 'node3' },
  { id: 'node3', x: 400, y: 800, next: 'node4' },
  { id: 'node4', x: 500, y: 900 },
]

const branches = {
  node1: [
    { id: 'node5', x: 500, y: 900 },
    { id: 'node6', x: 500, y: 900 },
  ],
  node2: [{ id: 'node7', x: 500, y: 900 }],
}

const branchNodePositions = {}

// 遍历主干节点和分支
mainNodes.forEach((mainNode) => {
  const mainNodeId = mainNode.id
  const branchNodes = branches[mainNodeId] || []

  // 找到前一个主干节点
  const prevMainNode = mainNodes.find((node) => node.next === mainNodeId)

  // 生成分支节点的坐标
  branchNodes.forEach((branch, index) => {
    const totalBranches = branchNodes.length
    const branchNode = generateBranchNodes(mainNode, prevMainNode, index, totalBranches)
    branchNodePositions[branch.id] = branchNode
  })
})

console.log(branchNodePositions)
