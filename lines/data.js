const paths = {
  1: [
    {
      id: 0,
      x: 2,
      y: 3,
      type: 'node',
    },
    {
      id: 1,
      x: 172.04,
      y: 122.728,
      type: 'node',
    },
    {
      id: 2,
      x: 178.948,
      y: 124.916,
      type: 'cDirective',
      directive: 'c',
      directiveValue: '2.02200000000002 1.4240000000000066 4.435000000000002 2.1880000000000024 6.9080000000000155 2.1880000000000024',
    },
    {
      id: 3,
      x: 791.275,
      y: 124.916,
      type: 'node',
    },
    {
      id: 4,
      x: 798.183,
      y: 127.105,
      type: 'cDirective',
      directive: 'c',
      directiveValue: '2.47300000000007 0 4.885999999999967 0.7650000000000006 6.9080000000000155 2.189000000000007',
    },
    {
      id: 5,
      x: 846.214,
      y: 160.924,
      type: 'node',
    },
    {
      id: 6,
      x: 853.123,
      y: 163.112,
      type: 'cDirective',
      directive: 'c',
      directiveValue: '2.0219999999999345 1.4240000000000066 4.434999999999945 2.187999999999988 6.908999999999992 2.187999999999988',
    },
    {
      id: 7,
      x: 956.015,
      y: 163.112,
      type: 'node',
    },
    {
      id: 8,
      x: 962.924,
      y: 165.3,
      type: 'cDirective',
      directive: 'c',
      directiveValue: '2.47300000000007 0 4.885999999999967 0.7650000000000148 6.908999999999992 2.1880000000000166',
    },
    {
      id: 9,
      x: 1043.18,
      y: 221.812,
      type: 'node',
    },
    {
      id: 10,
      x: 1050.09,
      y: 224,
      type: 'cDirective',
      directive: 'c',
      directiveValue: '2.019999999999982 1.4239999999999782 4.439999999999827 2.187999999999988 6.9099999999998545 2.187999999999988',
    },
    {
      id: 11,
      x: 1176,
      y: 224,
      type: 'node',
    },
  ],
}

// 折线
G6.registerEdge('customEdge', {
  draw(cfg, group) {
    const startPoint = cfg.startPoint
    const endPoint = cfg.endPoint
    const directiveValue = cfg.pathsData.directiveValue
    const directive = cfg.pathsData.directive
    const cs = directiveValue.split(' ')
    const path = [directive, `${cs[0]} ${cs[1]}`, `${cs[2]} ${cs[3]}`, `${cs[4]} ${cs[5]}`]
    console.log(path, cfg, 'pathpathpathpath')
    const shape = group.addShape('path', {
      attrs: {
        stroke: cfg.color,
        path: [
          // 起点开始移动到当前节点位置
          ['M', startPoint.x, startPoint.y],
          path,
          ['L', endPoint.x, endPoint.y], // 直线到终点
        ],
        lineWidth: 5,
      },
      label: '边的标签文字',
      labelCfg: {
        refX: 10, // 文本在 x 方向偏移量
        refY: 10, // 文本在 y 方向偏移量
        style: {
          fill: '#595959',
        },
      },
      // 在 G6 3.3 及之后的版本中，必须指定 name，可以是任意字符串，但需要在同一个自定义元素类型中保持唯一性
      name: 'brokenLine',
    })
    return shape
  },
})
// 路线颜色
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
/**
 * 获取源节点该启用哪个节点给目标节点连接边
 * @param {*} node1
 * @param {*} node2
 * @returns
 */
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
  let bestAnchor = [0.5, 0] // 默认为下
  let maxDotProduct = -Infinity

  const anchorPoints = [
    [0, 0.5], // 左
    [0.5, 1], // 上
    [1, 0.5], // 右
    [0.5, 0], // 下
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

// 严格按照预设路线和每条预设路线的节点数来生成画布数据
function generateDataForLines() {
  const nodes = []
  const edges = []
  const nodeStyle = (idx) => ({
    fill: '#fff',
    stroke: colors[idx], // 描边颜色
    lineWidth: 0, //描边宽度
    fontSize: 0,
    size: [[0, 1].includes(idx) ? 0 : 0, 0],
    zIndex: -1,
  })
  Object.keys(paths).forEach((line) => {
    const points = paths[line]
    const idx = line - 1
    points.forEach((point, index) => {
      const nodeId = `line-${line}-node-${index}`
      console.log(point, 'point')
      const nodeObj = {
        id: nodeId,
        label: index === 0 ? line : `line-${line}-node-${index}`,
        type: index === 0 ? 'rect' : 'circle',
        style: {
          ...nodeStyle(idx),
        },
        // 该边连入 source 点的第 0 个 anchorPoint，
        // 因为有圆形  所以只用标准四向
        // anchorPoints: [
        //   [0, 1], // 左下
        //   [0, 0.5], // 左
        //   [0, 0], // 左上
        //   [0.5, 0], //上
        //   [1, 0], // 右上
        //   [1, 0.5], // 右
        //   [1, 1], //右下
        //   [0.5, 1], // 下
        // ],
        x: point.x,
        y: point.y,
        // sourceAnchor: 3,
      }
      if (index === 0) {
        //生成完毕，给第一个方块节点设置锚点数据
        const bestAnchorInfo = findBestAnchorPoint(points[0], points[1])
        // 该节点可选的连接点集合，该点有两个可选的连接点 用于给子节点做连接
        nodeObj.anchorPoints = [bestAnchorInfo.anchor]
      }
      nodes.push(nodeObj)

      if (index > 0) {
        edges.push({
          pathsData: { ...point },
          source: `line-${line}-node-${index - 1}`,
          target: nodeId,
          type: point.type === 'node' ? 'line' : 'customEdge',
          color: colors[idx],
          style: {
            lineWidth: 6,
          },
        })
      }
    })
  })

  return { nodes, edges }
}
// 严格按照预设路线和每条预设路线的节点数来生成画布数据
const { nodes, edges } = generateDataForLines()
console.log(edges, 'edges')
var data = {
  nodes,
  edges,
}
window.data = data
console.log(window.data, 'window.data ')
