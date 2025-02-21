function generateAdditionalPoints(commands, numPoints) {
  const updatedCommands = [...commands] // 复制原始指令数组
  let currentId = commands.length // 新生成的点的起始ID

  for (let i = 0; i < commands.length - 1; i++) {
    const current = commands[i]
    const next = commands[i + 1]

    // 跳过贝塞尔曲线指令
    if (current.type === 'cDirective' || next.type === 'cDirective') {
      continue
    }

    // 生成额外的点
    const dx = (next.x - current.x) / (numPoints + 1)
    const dy = (next.y - current.y) / (numPoints + 1)

    for (let j = 1; j <= numPoints; j++) {
      const newX = current.x + dx * j
      const newY = current.y + dy * j

      // 插入新生成的点
      updatedCommands.splice(i + j, 0, {
        id: currentId++,
        prevId: current.id,
        nextId: next.id,
        x: newX,
        y: newY,
        type: 'trueNode',
      })
    }

    // 更新后续点的 prevId 和 nextId
    for (let k = i + 1; k < updatedCommands.length; k++) {
      if (updatedCommands[k].prevId === current.id) {
        updatedCommands[k].prevId = currentId - 1
      }
      if (updatedCommands[k].nextId === next.id) {
        updatedCommands[k].nextId = currentId - 1
      }
    }
  }

  return updatedCommands
}

// 示例用法
const commands = [
  {
    id: 0,
    prevId: null,
    nextId: 1,
    x: 0.5,
    y: 195.757,
    type: 'base',
    directiveObj: { directive: 'M', directiveValue: '0.5 195.757' },
  },
  {
    id: 1,
    prevId: 0,
    nextId: 2,
    x: 196.656,
    y: 195.757,
    type: 'base',
    directiveObj: { directive: 'H', directiveValue: '196.656' },
  },
  {
    id: 2,
    prevId: 1,
    nextId: 3,
    x: 208.656,
    y: 183.757,
    type: 'cDirective',
    directiveObj: { directive: 'c', directiveValue: '6.626999999999981 0 12 -5.373000000000019 12 -12' },
  },
  {
    id: 3,
    prevId: 2,
    nextId: 4,
    x: 208.656,
    y: 91.7683,
    type: 'base',
    directiveObj: { directive: 'V', directiveValue: '91.7683' },
  },
  {
    id: 4,
    prevId: 3,
    nextId: 5,
    x: 213.759,
    y: 81.9478,
    type: 'cDirective',
    directiveObj: { directive: 'c', directiveValue: '0 -3.909499999999994 1.9039999999999964 -7.573799999999991 5.10299999999998 -9.820499999999996' },
  },
  {
    id: 5,
    prevId: 4,
    nextId: 6,
    x: 266.416,
    y: 44.971,
    type: 'base',
    directiveObj: { directive: 'L', directiveValue: '266.416 44.971' },
  },
]

const numPoints = 2
const updatedCommands = generateAdditionalPoints(commands, numPoints)
console.log(updatedCommands)
