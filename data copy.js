/**
 * 预设的路线坐标
 */
const linesPoints = {
  1: [
    { x: 521, y: 1165 },
    { x: 711, y: 1165 },
    { x: 883.5, y: 1165 },
    { x: 954.5, y: 1057 },
    { x: 1009.5, y: 910 },
    { x: 1208, y: 866 },
    { x: 1453, y: 788 },
    { x: 1686, y: 788 },
    { x: 1886, y: 788 },
    { x: 2091, y: 788 },
    { x: 2321, y: 788 },
    { x: 2530, y: 788 },
    { x: 2746, y: 896 },
    { x: 2928, y: 1025 },
    { x: 3130, y: 1093 },
    { x: 3335, y: 1093 },
    { x: 3502, y: 1238 },
    { x: 3502, y: 1369 },
  ],
  2: [
    { x: 710.5, y: 766 },
    { x: 886.5, y: 867 },
    { x: 1049, y: 984 },
    { x: 1275, y: 1020 },
    { x: 1507, y: 1020 },
    { x: 1707, y: 1020 },
    { x: 1907, y: 1020 },
    { x: 2162, y: 1020 },
    { x: 2403, y: 1065 },
    { x: 2564, y: 1093 },
    { x: 2775, y: 1169 },
    { x: 2933, y: 1213 },
    { x: 3100, y: 1213 },
  ],
  3: [
    { x: 1836, y: 126 },
    { x: 1836, y: 250 },
    { x: 1836, y: 387 },
    { x: 1836, y: 510 },
    { x: 1888, y: 650 },
    { x: 1994, y: 910 },
    { x: 1994, y: 1143 },
    { x: 1994, y: 1298 },
    { x: 1994, y: 1446 },
    { x: 1994, y: 1724 },
    { x: 2031, y: 1954 },
    { x: 2125, y: 1051 },
  ],
  4: [
    { x: 274, y: 505.5 },
    { x: 446, y: 504.5 },
    { x: 594, y: 505.5 },
    { x: 855, y: 438.5 },
    { x: 994, y: 534.5 },
    { x: 1194, y: 613.5 },
    { x: 1396, y: 688.5 },
    { x: 1568, y: 880.5 },
    { x: 1566, y: 1175.5 },
    { x: 1566, y: 1313.5 },
    { x: 1663, y: 1458.5 },
    { x: 1875, y: 1546.5 },
    { x: 2175, y: 1618.5 },
    { x: 2450, y: 1618.5 },
    { x: 2723, y: 1618.5 },
    { x: 2998, y: 1618.5 },
    { x: 3272, y: 1618.5 },
  ],
  5: [
    { x: 793, y: 1726 },
    { x: 933, y: 1650 },
    { x: 1018, y: 1519 },
    { x: 1099, y: 1387 },
    { x: 1222, y: 1300 },
    { x: 1457, y: 1246 },
    { x: 1753, y: 1217 },
    { x: 2199, y: 1185 },
    { x: 2426, y: 1185 },
    { x: 2818, y: 1061 },
    { x: 3133, y: 1005 },
    { x: 3257, y: 918 },
    { x: 3512, y: 866 },
  ],
  6: [
    { x: 2973.5, y: 314 },
    { x: 2972.5, y: 396 },
    { x: 2899.5, y: 518 },
    { x: 2755.5, y: 562 },
    { x: 2596.5, y: 562 },
    { x: 2452.5, y: 687 },
    { x: 2505.5, y: 929 },
    { x: 2504.5, y: 1014 },
    { x: 2504.5, y: 1284 },
    { x: 2360.5, y: 1432 },
    { x: 2299.5, y: 1752 },
  ],
  7: [
    { x: 520, y: 183 },
    { x: 690, y: 183 },
    { x: 837, y: 183 },
    { x: 1039, y: 183 },
    { x: 1241, y: 183 },
    { x: 1391, y: 228 },
    { x: 1523, y: 277 },
    { x: 1659, y: 277 },
    { x: 1983, y: 329 },
  ],
  8: [
    { x: 272, y: 1447 },
    { x: 423, y: 1448 },
    { x: 591, y: 1501 },
    { x: 781, y: 1501 },
    { x: 1149, y: 1560 },
    { x: 1349, y: 1560 },
    { x: 1549, y: 1560 },
    { x: 1789, y: 1633 },
  ],
  9: [
    { x: 667, y: 1363 },
    { x: 667, y: 1446 },
    { x: 734, y: 1601 },
    { x: 987, y: 1740 },
    { x: 1163, y: 1865 },
    { x: 1363, y: 1954 },
    { x: 1548, y: 1955 },
  ],
  10: [
    { x: 3307, y: 1999 },
    { x: 3152, y: 1914 },
    { x: 2915, y: 1844 },
    { x: 2788, y: 1738 },
    { x: 2788, y: 1551 },
    { x: 2788, y: 1450 },
    { x: 2788, y: 1347 },
    { x: 2698, y: 1236 },
  ],
  11: [
    { x: 3702, y: 721.5 },
    { x: 3551, y: 721.5 },
    { x: 3487, y: 664.5 },
    { x: 3334, y: 602.5 },
    { x: 3159, y: 602.5 },
    { x: 2961, y: 660.5 },
    { x: 2826, y: 701.5 },
    { x: 2685, y: 701.5 },
    { x: 2325, y: 924.5 },
    { x: 2169, y: 1115.5 },
    { x: 2095, y: 1293.5 },
    { x: 1877, y: 1366.5 },
  ],
  12: [
    { x: 2470, y: 220 },
    { x: 2470, y: 301 },
    { x: 2470, y: 392 },
    { x: 2413, y: 538 },
    { x: 2302, y: 635 },
    { x: 2218, y: 878 },
  ],
  13: [
    { x: 3028, y: 2058 },
    { x: 2825, y: 2058 },
    { x: 2597, y: 1986 },
    { x: 2381, y: 1858 },
    { x: 2190, y: 1858 },
    { x: 1857, y: 1858 },
    { x: 1686, y: 1858 },
    { x: 1456, y: 1750 },
    { x: 1456, y: 1661 },
    { x: 1456, y: 1500 },
    { x: 1385, y: 1419 },
  ],
  14: [
    { x: 3695, y: 212 },
    { x: 3557, y: 313 },
    { x: 3461, y: 409 },
    { x: 3364, y: 507 },
    { x: 3169, y: 699 },
    { x: 3080, y: 790 },
    { x: 2878, y: 820 },
  ],
  15: [
    { x: 2232, y: 152 },
    { x: 2232, y: 257 },
    { x: 2165, y: 388 },
    { x: 2030, y: 440 },
    { x: 1708, y: 440 },
    { x: 1544, y: 440 },
    { x: 1394, y: 480 },
  ],
  16: [
    { x: 180, y: 884 },
    { x: 376, y: 884 },
    { x: 529, y: 803 },
    { x: 529, y: 697 },
    { x: 694, y: 579 },
    { x: 875, y: 579 },
    { x: 1319, y: 579 },
    { x: 1497, y: 579 },
    { x: 1698, y: 579 },
  ],
  17: [
    { x: 3696, y: 1967 },
    { x: 3696, y: 1837 },
    { x: 3540, y: 1699 },
    { x: 3331, y: 1699 },
    { x: 3033, y: 1547 },
    { x: 2944, y: 1458 },
    { x: 2647, y: 1401 },
  ],
  18: [
    { x: 373, y: 1983 },
    { x: 544, y: 1984 },
    { x: 678, y: 1937 },
    { x: 774, y: 1840 },
    { x: 943, y: 1789 },
    { x: 1335, y: 1789 },
    { x: 1630, y: 1789 },
    { x: 1882, y: 1688 },
  ],
  19: [
    { x: 3404.5, y: 76 },
    { x: 3273.5, y: 168 },
    { x: 3106.5, y: 246 },
    { x: 2945.5, y: 246 },
    { x: 2768.5, y: 304 },
    { x: 2674.5, y: 397 },
    { x: 2559.5, y: 448 },
    { x: 2263.5, y: 450 },
  ],
  20: [
    { x: 129, y: 1165 },
    { x: 249, y: 1085 },
    { x: 418, y: 993 },
    { x: 563, y: 993 },
    { x: 698, y: 937 },
    { x: 868, y: 770 },
    { x: 1098, y: 728 },
    { x: 1263, y: 728 },
  ],
}

/**
 *  获得边类型
 * @param {*} source
 * @param {*} target
 * @returns
 */
function getEdgeType(source, target, color) {
  if (!source || !target) return 'straightLine'
  function calculateDirection(source, target) {
    const sourceX = source.x
    const sourceY = source.y
    const targetX = target.x
    const targetY = target.y

    // 水平线
    if (targetX === sourceX) {
      // 垂直线
      return targetY > sourceY ? 'S' : 'N'
      // return 'DIR'
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
  const directions = {
    E: 'Line', // 东
    S: 'Line', // 南
    W: 'Line', // 西
    N: 'Line', // 北
    ES: 'polyline', // 东南
    EN: 'polyline', // 东北
    WS: 'polyline', // 西南
    WN: 'polyline', // 西北
  }
  const direction = calculateDirection(source, target)
  return directions[direction]
}
// 直线
// G6.registerEdge('straightLine', {
//   draw(cfg, group) {
//     const startPoint = cfg.startPoint
//     const endPoint = cfg.endPoint
//     const shape = group.addShape('path', {
//       attrs: {
//         stroke: '#333',
//         path: [
//           ['M', startPoint.x, startPoint.y],
//           ['L', endPoint.x, endPoint.y],
//         ],
//         lineWidth: 5,
//       },
//       // 在 G6 3.3 及之后的版本中，必须指定 name，可以是任意字符串，但需要在同一个自定义元素类型中保持唯一性
//       name: 'straightLine',
//     })
//     return shape
//   },
// })

// 折线
// G6.registerEdge('brokenLine', {
//   draw(cfg, group) {
//     function generateRoundedPath(x_a, y_a, x_c, y_c, radius) {
//       const vecAC = [x_c - x_a, y_c - y_a]
//       const lenAC = Math.hypot(...vecAC)
//       const vecU = vecAC.map((c) => c / lenAC)

//       const midX = (x_a + x_c) / 2
//       const midY = (y_a + y_c) / 2

//       const x_b = midX + radius * vecU[0]
//       const y_b = midY + radius * vecU[1]

//       const x_c1 = midX - radius * vecU[0]
//       const y_c1 = midY - radius * vecU[1]

//       return [
//         ['M', x_a, y_a],
//         ['L', x_b, y_b],
//         ['Q', midX, midY, x_c1, y_c1],
//         ['L', x_c, y_c],
//       ]
//     }
//     const startPoint = cfg.startPoint
//     const endPoint = cfg.endPoint
//     const path = generateRoundedPath(startPoint.x, startPoint.y, endPoint.x, endPoint.y, 10)
//     // 如果起始点是线路起点则也应该用直线
//     const shape = group.addShape('path', {
//       attrs: {
//         stroke: '#9c9757', // TODO:根据节点数据生成不同的颜色
//         path:
//           startPoint.type === 'rect'
//             ? [
//                 ['M', startPoint.x, startPoint.y],
//                 ['L', endPoint.x, endPoint.y],
//               ]
//             : path,
//         // [
//         // ['M', startPoint.x, startPoint.y],
//         // ['L', , ], //TODO:随机选择是直线还是折线【上折、下折】
//         // ['L', endPoint.x, endPoint.y],
//         // ]
//         lineWidth: 5,
//       },
//       routeCfg: {
//         // 路由计算参数，详见下面表格
//         gridSize: 10, // 指定精度
//         maxAllowedDirectionChange: Math.PI / 2, // 允许的最大转角，弧度制
//         obstacles: [graph.findById('node0'), graph.findById('node1')], // 需要躲避的障碍节点对象
//       },
//       color: '#87e8de',
//       style: {
//         offset: 20, // 拐弯处距离节点最小距离
//         radius: 10, // 拐弯处的圆角弧度，若不设置则为直角
//         lineWidth: 2,
//         stroke: '#87e8de',
//       },
//       label: '边的标签文字',
//       labelCfg: {
//         refX: 10, // 文本在 x 方向偏移量
//         refY: 10, // 文本在 y 方向偏移量
//         style: {
//           fill: '#595959',
//         },
//       },
//       // 在 G6 3.3 及之后的版本中，必须指定 name，可以是任意字符串，但需要在同一个自定义元素类型中保持唯一性
//       name: 'brokenLine',
//     })
//     console.log(path, 'path', startPoint.type, shape)

//     return shape
//   },
// })
const colors = [
  '#3F92FE',
  '#00C29F',
  '#5369C0',
  '#29C4D9',
  '#89CA73',
  '#2D7B9C',
  '#3B5F80',
  '#7BB04E',
  '#1C65C6',
  '#4E4C87',
  '#6AB4DA',
  '#7E8CDB',
  '#57A476',
  '#36416C',
  '#7EABD1',
  '#467341',
  '#A4CD3F',
  '#5E3831',
  '#42AA21',
  '#9C9757',
]
// -----------------边生成end
// 常规
// function generateDataForLines(numLines) {
//   const nodes = []
//   const edges = []
//   let currentId = 0
//   const safetyDistance = 250 // 安全区域半径

//   // 为每条线路定义不同的多边形区域和主要方向
//   const lineRegions = []
//   for (let i = 0; i < numLines; i++) {
//     const minWidth = canvasWidth * 0.9 // 最小宽度
//     const minHeight = canvasHeight * 0.9 // 最小高度
//     const maxWidth = canvasWidth - 100 // 最大宽度
//     const maxHeight = canvasHeight - 100 // 最大高度
//     const width = Math.max(Math.random() * (maxWidth - minWidth) + minWidth)
//     const height = Math.max(Math.random() * (maxHeight - minHeight) + minHeight)
//     const x = Math.random() * (canvasWidth - width)
//     const y = Math.random() * (canvasHeight - height)
//     const direction = Math.floor(Math.random() * 8) // 随机选择一个方向（0-7）
//     lineRegions.push({ x, y, width, height, direction })
//   }

//   for (let line = 0; line < numLines; line++) {
//     const nodesPerLine = Math.floor(Math.random() * 6) + 3 // 每条线路的节点数，随机3到10个
//     const spacing = 150 // 节点之间的最小间距
//     const nodeStyle = (idx) => ({
//       fill: '#fff',
//       stroke: colors[idx], // 描边颜色
//       lineWidth: 3, //描边宽度
//       fontSize: 12,
//       size: [[0, 1].includes(idx) ? 120 : 20, 20],
//     })
//     const edgeStyle = {
//       stroke: colors[line],
//     }
//     let lastNodePosition = {
//       x: lineRegions[line].x + Math.random() * (lineRegions[line].width - 30),
//       y: lineRegions[line].y + Math.random() * (lineRegions[line].height - 30),
//     }

//     nodes.push({
//       id: `node-${currentId++}`,
//       label: `${currentId - 1}`,
//       x: lastNodePosition.x,
//       y: lastNodePosition.y,
//       type: line === 0 ? 'rect' : 'circle',
//       style: nodeStyle(line),
//       anchorPoints: [
//         [0, 0.5],
//         [1, 0.5],
//       ],
//     })

//     for (let node = 1; node < nodesPerLine; node++) {
//       let newX, newY
//       const mainDistance = spacing // 主方向上的固定距离

//       // 根据方向生成新节点
//       switch (lineRegions[line].direction) {
//         case 0: // 东
//           newX = lastNodePosition.x + mainDistance
//           newY = lastNodePosition.y + (Math.random() * 2 * safetyDistance - safetyDistance)
//           break
//         case 1: // 南
//           newX = lastNodePosition.x + (Math.random() * 2 * safetyDistance - safetyDistance)
//           newY = lastNodePosition.y - mainDistance
//           break
//         case 2: // 西
//           newX = lastNodePosition.x - mainDistance
//           newY = lastNodePosition.y + (Math.random() * 2 * safetyDistance - safetyDistance)
//           break
//         case 3: // 北
//           newX = lastNodePosition.x + (Math.random() * 2 * safetyDistance - safetyDistance)
//           newY = lastNodePosition.y + mainDistance
//           break
//         case 4: // 东南
//           newX = lastNodePosition.x + mainDistance * 0.707
//           newY = lastNodePosition.y - mainDistance * 0.707 + (Math.random() * 2 * safetyDistance - safetyDistance)
//           break
//         case 5: // 东北
//           newX = lastNodePosition.x + mainDistance * 0.707
//           newY = lastNodePosition.y + mainDistance * 0.707 + (Math.random() * 2 * safetyDistance - safetyDistance)
//           break
//         case 6: // 西南
//           newX = lastNodePosition.x - mainDistance * 0.707
//           newY = lastNodePosition.y - mainDistance * 0.707 + (Math.random() * 2 * safetyDistance - safetyDistance)
//           break
//         case 7: // 西北
//           newX = lastNodePosition.x - mainDistance * 0.707
//           newY = lastNodePosition.y + mainDistance * 0.707 + (Math.random() * 2 * safetyDistance - safetyDistance)
//           break
//       }

//       // 确保节点不超出线路的多边形区域
//       newX = Math.max(lineRegions[line].x, Math.min(newX, lineRegions[line].x + lineRegions[line].width))
//       newY = Math.max(lineRegions[line].y, Math.min(newY, lineRegions[line].y + lineRegions[line].height))

//       const nodeId = `node-${currentId++}`
//       nodes.push({
//         id: nodeId,
//         label: `${nodeId}`,
//         x: newX,
//         y: newY,
//         style: nodeStyle(node),
//         anchorPoints: [
//           [0, 0.5],
//           [1, 0.5],
//         ],
//       })
//       console.log(nodes, nodes[nodes.length - 2], nodes[nodes.length - 1], 'nodes')
//       edges.push({
//         source: `node-${currentId - 2}`,
//         target: nodeId,
//         type: getEdgeType(
//           nodes.find((n) => n.id === `node-${currentId - 2}`),
//           nodes.find((n) => n.id === nodeId)
//         ),
//         style: edgeStyle,
//       })

//       lastNodePosition = { x: newX, y: newY }
//     }
//   }

//   return { nodes, edges }
// }
//预设点
// function generateDataForLines(numLines, linesPoints, matchMode = 'sequence') {
//   const nodes = []
//   const edges = []
//   let currentId = 0
//   const usedLines = new Set() // 记录已使用的预设路线

//   for (let line = 1; line <= numLines; line++) {
//     const nodesPerLine = Math.floor(Math.random() * 7) + 3 // 每条线路的节点数，随机3到10个
//     let selectedLinePoints

//     if (matchMode === 'sequence') {
//       // 按序号匹配
//       selectedLinePoints = linesPoints[line]
//       if (!selectedLinePoints) {
//         continue // 如果序号超出预设路线，则跳过
//       }
//     } else {
//       // 按节点数匹配
//       let closestDiff = Infinity
//       for (const key in linesPoints) {
//         const diff = Math.abs(nodesPerLine - linesPoints[key].length)
//         if (diff < closestDiff && !usedLines.has(key)) {
//           closestDiff = diff
//           selectedLinePoints = linesPoints[key]
//         }
//       }
//     }

//     // 标记为已使用
//     usedLines.add(selectedLinePoints[0].id)

//     for (let node = 0; node < nodesPerLine; node++) {
//       const point = selectedLinePoints[node]
//       const nodeId = `node-${currentId++}`
//       nodes.push({
//         id: nodeId,
//         label: `Node ${nodeId}`,
//         x: point.x,
//         y: point.y,
//       })

//       if (node > 0) {
//         edges.push({
//           source: `node-${currentId - 2}`,
//           target: nodeId,
//           type: getEdgeType(
//             nodes.find((n) => n.id === `node-${currentId - 2}`),
//             nodes.find((n) => n.id === nodeId)
//           ),
//         })
//       }
//     }
//   }

//   return { nodes, edges }
// }
// 预设点不够时能自动增加
function generateDataForLines(numLines, linesPoints, matchMode = 'sequence') {
  const nodes = []
  const edges = []
  let currentId = 0
  const usedLines = new Set() // 记录已使用的预设路线

  // 定义两个点之间插入新点的逻辑
  function insertIntermediatePoint(p1, p2) {
    const midX = (p1.x + p2.x) / 2
    const midY = (p1.y + p2.y) / 2
    return { x: midX, y: midY }
  }

  for (let line = 1; line <= numLines; line++) {
    const nodesPerLine = Math.floor(Math.random() * 7) + 3 // 每条线路的节点数，随机3到10个
    let selectedLinePoints
    const nodeStyle = (idx) => ({
      fill: '#fff',
      stroke: colors[idx], // 描边颜色
      lineWidth: 3, //描边宽度
      fontSize: 12,
      size: [[0, 1].includes(idx) ? 120 : 20, 20],
    })
    const edgeStyle = (idx) => ({
      stroke: colors[idx],
      // fill: colors[idx],
      lineWidth: 3, //描边宽度
      color: colors[idx],
    })
    if (matchMode === 'sequence') {
      selectedLinePoints = linesPoints[line]
    } else {
      let closestDiff = Infinity
      for (const key in linesPoints) {
        const diff = Math.abs(nodesPerLine - linesPoints[key].length)
        if (diff < closestDiff && !usedLines.has(key)) {
          closestDiff = diff
          selectedLinePoints = linesPoints[key]
        }
      }
    }

    if (selectedLinePoints.length < nodesPerLine) {
      // 如果预设路线点数不足，插入新点
      for (let i = 0; i < selectedLinePoints.length - 1 && selectedLinePoints.length < nodesPerLine; i++) {
        const p1 = selectedLinePoints[i]
        const p2 = selectedLinePoints[i + 1]
        const distance = Math.hypot(p2.x - p1.x, p2.y - p1.y)
        if (distance > 100) {
          // 假定100单位为最大允许距离
          const newPoint = insertIntermediatePoint(p1, p2)
          selectedLinePoints.splice(i + 1, 0, newPoint)
          i++
        }
      }
    }

    usedLines.add(selectedLinePoints[0].id)
    for (let node = 0; node < nodesPerLine; node++) {
      const point = selectedLinePoints[node]
      const nodeId = `node-${currentId++}`
      nodes.push({
        id: nodeId,
        label: node === 0 ? line : `Node ${nodeId}`,
        type: node === 0 ? 'rect' : 'circle',
        style: nodeStyle(line),
        x: point.x,
        y: point.y,
      })

      if (node > 0) {
        edges.push({
          source: `node-${currentId - 2}`,
          target: nodeId,
          type: getEdgeType(
            nodes.find((n) => n.id === `node-${currentId - 2}`),
            nodes.find((n) => n.id === nodeId),
            colors[line]
          ),
          // style: edgeStyle(line),
          routeCfg: {
            // 路由计算参数，详见下面表格
            gridSize: 10, // 指定精度
            maxAllowedDirectionChange: Math.PI / 2, // 允许的最大转角，弧度制
            // obstacles: [graph.findById('node0'), graph.findById('node1')], // 需要躲避的障碍节点对象
          },
          color: '#87e8de',
          style: {
            ...edgeStyle(line),
            offset: 20, // 拐弯处距离节点最小距离
            radius: 10, // 拐弯处的圆角弧度，若不设置则为直角
            lineWidth: 2,
            stroke: '#87e8de',
          },
        })
      }
    }
    // selectedLinePoints.forEach((point, index) => {
    //   const nodeId = `node-${currentId++}`
    //   nodes.push({
    //     id: nodeId,
    //     label: `Node ${nodeId}`,
    //     x: point.x,
    //     y: point.y,
    //   })

    //   if (index > 0) {
    //     edges.push({
    //       source: `node-${currentId - 2}`,
    //       target: nodeId,
    //       type: getEdgeType(
    //         nodes.find((n) => n.id === `node-${currentId - 2}`),
    //         nodes.find((n) => n.id === nodeId)
    //       ),
    //     })
    //   }
    // })
  }

  return { nodes, edges }
}

// const { nodes, edges } = generateDataForLines(numLines)
const numLines = Math.floor(Math.random() * 19) + 1
const canvasHeight = 1000
const matchMode = 'sequence' // 'sequence' closest// 或 'sequence'
const { nodes, edges } = generateDataForLines(numLines, linesPoints, matchMode)

var data = {
  nodes,
  edges,
}
window.data = data
console.log(window.data, 'window.data ')
