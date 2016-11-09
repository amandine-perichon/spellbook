export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_CHARACTER':
      return [ ...state, {name: action.name, spells: []}]
    case 'DELETE_CHARACTER':
     return state.filter((character) => character.name !== action.name)
    case 'ADD_SPELL':
      return state.map((character) => {
        if (character.name === action.character) {
          return Object.assign(character, {spells: [...character.spells, action.name]})
        } else {
          return character
        }
      })
    case 'DELETE_SPELL':
    // TO FIX
      return state.map((character) => {
        if (character.name === action.character) {
          const spells = character.spells.slice()
          const index = spells.indexOf(action.name)
          spells.splice(index)
          return Object.assign(character, {spells: spells})
        } else {
          return character
        }
      })
    default:
      return state
  }
}
