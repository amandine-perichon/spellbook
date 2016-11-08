export function addCharacter (name) {
  return {
    type: 'ADD_CHARACTER',
    name: name
  }
}

export function deleteCharacter (name) {
  return {
    type: 'DELETE_CHARACTER',
    name: name
  }
}

export function addSpell (characterName, spellName) {
  return {
    type: 'ADD_SPELL',
    character: characterName,
    name: spellName
  }
}
