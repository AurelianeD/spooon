export function handleTextSpoon(spoonNumber:Number){
    switch(true){
    case spoonNumber < 0:
        return 'Reposez vous !'
    case spoonNumber === 0:
        return 'Batterie à plat...'
    case spoonNumber >= 1 && spoonNumber <= 3:
        return 'Pensez à vous reposer !'
    case spoonNumber >= 4 && spoonNumber <= 6:
        return 'Niveau d’énergie moyen'
    case spoonNumber >= 7 && spoonNumber <= 9:
        return 'Vous en avez encore sous le coude !'
    case spoonNumber >= 10 && spoonNumber <= 12:
        return 'Énergie au top !'
  }
}