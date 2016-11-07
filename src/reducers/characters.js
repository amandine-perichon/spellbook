export default (state = [], action) => {
  switch (action.type) {
    case "ADD_CHARACTER":
      return [ ...state, {name: action.name}]
    case "DELETE_CHARACTER":
     return state.filter((character) => character.name !== action.name)
    default:
      return state
  }
}
