function findPaths(data) {
  const graph = {}
  const paths = {}

  // 构建邻接表
  data.edges.forEach((edge) => {
    if (!graph[edge.source]) {
      graph[edge.source] = []
    }
    graph[edge.source].push(edge.target)
  })

  // 深度优先搜索函数
  function dfs(nodeId, currentPath) {
    const node = data.nodes.find((n) => n.id === nodeId)
    const newPath = [...currentPath, node.id]

    // 记录路径
    paths[node.id] = paths[node.id] || []
    paths[node.id].push(newPath)

    // 如果当前节点没有子节点，停止搜索
    if (!graph[node.id] || graph[node.id].length === 0) {
      return
    }

    // 遍历所有子节点
    graph[node.id].forEach((neighborId) => {
      if (!currentPath.includes(neighborId)) {
        // 防止环
        dfs(neighborId, newPath)
      }
    })
  }

  // 从每个节点开始DFS
  data.nodes.forEach((node) => {
    if (!paths[node.id]) {
      // 只对未记录路径的节点执行DFS
      dfs(node.id, [])
    }
  })

  return paths
}

// 使用示例
const data = {
  nodes: [
    { id: 'node1', x: 100, y: 200 },
    { id: 'node2', x: 300, y: 200 },
    { id: 'node3', x: 400, y: 800 },
    { id: 'node4', x: 500, y: 900 },
    { id: 'node5', x: 500, y: 900 },
    { id: 'node6', x: 500, y: 900 },
    { id: 'node7', x: 500, y: 900 },
    { id: 'node8', x: 500, y: 900 },
  ],
  edges: [
    { source: 'node1', target: 'node2' },
    { source: 'node1', target: 'node3' },
    { source: 'node2', target: 'node4' },
    { source: 'node4', target: 'node5' },
    { source: 'node3', target: 'node6' },
    { source: 'node3', target: 'node7' },
    { source: 'node3', target: 'node8' },
  ],
}
// const data = {
//   nodes: [
//     { id: '0', x: 100, y: 200 },
//     { id: '1', x: 100, y: 200 },
//     { id: '2', x: 100, y: 200 },
//   ],
//   edges: [
//     { source: '1', target: '0' },
//     { source: '2', target: '1' },
//   ],
// }
const pathsResult = findPaths(data)
console.log(pathsResult)
function findLongestPathsInResult(pathsResult) {
  const longestPaths = {}

  // 遍历pathsResult中的每个键值对
  for (const key in pathsResult) {
    if (pathsResult.hasOwnProperty(key)) {
      // 如果当前键对应的数组长度大于之前记录的最长长度，则更新最长路径
      if (pathsResult[key].length > 0) {
        longestPaths[key] = pathsResult[key].reduce((longest, current) => {
          return current.length > longest.length ? current : longest
        })
      }
    }
  }

  return longestPaths
}
const longestPathsResult = findLongestPathsInResult(pathsResult)
console.log('Longest paths:', longestPathsResult)
