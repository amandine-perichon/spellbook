const initialState = [
  {
    name: "Nata"
  },
  {
    name: "Amandine"
  }
]

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CHARACTER":
      return [ ...state, {name: action.name}]
    default:
      return state
  }
}
