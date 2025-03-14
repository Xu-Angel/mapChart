function calculateTextPosition(node, prevNode, nextNode) {
  const direction = calculateDirection(prevNode, node)
  const textPosition = {
    x: node.x,
    y: node.y,
    textAlign: 'center',
    textBaseline: 'middle',
  }

  const directionMap = {
    N: () => {
      textPosition.y -= 20
      textPosition.textBaseline = 'bottom'
    },
    S: () => {
      textPosition.y += 20
      textPosition.textBaseline = 'top'
    },
    E: () => {
      textPosition.x += 20
      textPosition.textAlign = 'left'
    },
    W: () => {
      textPosition.x -= 20
      textPosition.textAlign = 'right'
    },
    ES: () => {
      textPosition.x += 20
      textPosition.y += 20
      textPosition.textAlign = 'left'
      textPosition.textBaseline = 'top'
    },
    WS: () => {
      textPosition.x -= 20
      textPosition.y += 20
      textPosition.textAlign = 'right'
      textPosition.textBaseline = 'top'
    },
    EN: () => {
      textPosition.x += 20
      textPosition.y -= 20
      textPosition.textAlign = 'left'
      textPosition.textBaseline = 'bottom'
    },
    WN: () => {
      textPosition.x -= 20
      textPosition.y -= 20
      textPosition.textAlign = 'right'
      textPosition.textBaseline = 'bottom'
    },
  }

  if (directionMap[direction]) {
    directionMap[direction]()
  }

  return textPosition
}

function calculateDirection(source, target) {
  const sourceX = source.x
  const sourceY = source.y
  const targetX = target.x
  const targetY = target.y

  if (targetX === sourceX) {
    return targetY > sourceY ? 'S' : 'N'
  } else if (targetY === sourceY) {
    return targetX > sourceX ? 'E' : 'W'
  } else if (targetX > sourceX && targetY > sourceY) {
    return 'ES'
  } else if (targetX < sourceX && targetY > sourceY) {
    return 'WS'
  } else if (targetX < sourceX && targetY < sourceY) {
    return 'WN'
  } else if (targetX > sourceX && targetY < sourceY) {
    return 'EN'
  }
}
