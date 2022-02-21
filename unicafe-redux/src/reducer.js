const initialState = {
  good: 0,
  ok: 0,
  bad: 0
}

const counterReducer = (state = initialState, action) => {
  console.log(action)
  const copyState = {...state};
  switch (action.type) {
    case 'GOOD':
      return {...copyState, good: copyState.good += 1}
    case 'OK':
      return {...copyState, ok: copyState.ok += 1}
    case 'BAD':
      return {...copyState, bad: copyState.bad += 1}
    case 'ZERO':
      return initialState
    default: return state
  }
  
}

export default counterReducer