const CONTRACT_ADDRESS = '0x6E3Fe27abC12e9B3E8504938D546770D15331c62'

/*
 * Add this method and make sure to export it on the bottom!
 */
const transformCharacterData = (characterData) => {
  return {
    name: characterData.name,
    imageURI: characterData.imageURI,
    hp: characterData.hp.toNumber(),
    maxHp: characterData.maxHp.toNumber(),
    attackDamage: characterData.attackDamage.toNumber(),
  }
}
export { CONTRACT_ADDRESS, transformCharacterData }
