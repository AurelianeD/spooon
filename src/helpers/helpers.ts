import spoon0 from '$lib/assets/spoons/0.png';
import spoon1 from '$lib/assets/spoons/1.png';
import spoon2 from '$lib/assets/spoons/2.png';
import spoon3 from '$lib/assets/spoons/3.png';
import spoon4 from '$lib/assets/spoons/4.png';
import spoon5 from '$lib/assets/spoons/5.png';
import spoon6 from '$lib/assets/spoons/6.png';
import spoon7 from '$lib/assets/spoons/7.png';
import spoon8 from '$lib/assets/spoons/8.png';
import spoon9 from '$lib/assets/spoons/9.png';
import spoon10 from '$lib/assets/spoons/10.png';
import spoon11 from '$lib/assets/spoons/11.png';
import spoon12 from '$lib/assets/spoons/12.png';
import {writable} from "svelte/store";

export function handleTextSpoon(spoonNumber:Number){
    switch(true){
    case spoonNumber < 0:
        return 'Reposez-vous !'
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

export function handleImageSpoon(spoonNumber:writable<number>){
    switch(spoonNumber){
        case 0: return spoon0
        case 1: return spoon1
        case 2: return spoon2;
        case 3: return spoon3;
        case 4: return spoon4;
        case 5: return spoon5;
        case 6: return spoon6;
        case 7: return spoon7;
        case 8: return spoon8;
        case 9: return spoon9;
        case 10: return spoon10;
        case 11: return spoon11;
        case 12: return spoon12;
        default: return spoon0;
    }
}
