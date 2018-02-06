// actions
export const actions = {
  MARK: 'MARK',
  MOVE: 'MOVE',
  REVERSE: 'REVERS'
}

export const putMark = (i,j) => {
  return {
    type: actions.MARK,
    position: [i,j]
  }
}

export const jumpTo = (index) => {
  return {
    type: actions.MOVE,
    index: index
  }
}

export const reverse = () => {
  return {
    type: actions.REVERSE
  }
}
