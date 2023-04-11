// import {writable} from 'svelte/store';
// import { browser } from "$app/environment";

// const defaultValue = '12';
// const stored = browser ? window.localStorage.getItem('spoonNumber') ?? defaultValue : defaultValue;
// const storedBeginDay = browser ? window.localStorage.getItem('beginDay') : 'true';

// const spoonNumber = writable(parseInt(stored));
// export const beginDay = writable(storedBeginDay);

// beginDay.subscribe(value => {
// 	if(browser){
// 		console.log(typeof value, 'subscribe');
// 		window.localStorage.setItem('beginDay', value);
// 	}
// });

// spoonNumber.subscribe(value =>{
// 	if(browser){
// 		window.localStorage.setItem('spoonNumber', value.toString());
// 	}
// });

// export default spoonNumber;
// export const spoonNumberSelected = writable(0);

import { writable } from 'svelte/store';
import { browser } from "$app/environment";

const defaultValue = '12';
const defaultValueBeginDay = 'true';

function resetLocalStorage() {
    const now = new Date();
    if (now.getHours() === 5 && now.getMinutes() === 0) {
        window.localStorage.clear();
    }
}

resetLocalStorage();

const stored = browser ? window.localStorage.getItem('spoonNumber') ?? defaultValue : defaultValue;
const storedBeginDay = browser ? window.localStorage.getItem('beginDay') ?? defaultValueBeginDay : defaultValueBeginDay;

const spoonNumber = writable(parseInt(stored));
const beginDay = writable(storedBeginDay);

beginDay.subscribe(value => {
    if(browser && value){
        window.localStorage.setItem('beginDay', value);
    }
});

spoonNumber.subscribe(value =>{
    if(browser){
        window.localStorage.setItem('spoonNumber', value.toString());
    }
});

export default spoonNumber;
export const spoonNumberSelected = writable(0);
export { beginDay };

setInterval(resetLocalStorage, 60000);

// ----------------------------------------------------------------------------------------------------------------------------- //

// import { writable } from 'svelte/store';
// import { browser } from "$app/environment";

// const defaultValue = '12';

// function resetLocalStorage(hour:number, minute:number) {
//     const now = new Date();
//     if (now.getHours() === hour && now.getMinutes() === minute) {
//         window.localStorage.clear();
//     }
// }

// const storedSpoonNumber = browser ? window.localStorage.getItem('spoonNumber') ?? defaultValue : defaultValue;
// const storedHour = browser ? window.localStorage.getItem('spoonNumber') : 5;
// const storedMinute = browser ? window.localStorage.getItem('spoonNumber') : 0;
// const storedBeginDay = browser ? window.localStorage.getItem('beginDay') : 'true';

// const spoonNumber = writable(parseInt(storedSpoonNumber));
// export const beginDay = writable(storedBeginDay);
// export const hour = writable(parseInt(storedHour));
// export const minute = writable(parseInt(storedMinute));

// beginDay.subscribe(value => {
//     if (browser) {
//         window.localStorage.setItem('beginDay', value);
//     }
// });

// spoonNumber.subscribe(value => {
//     if (browser) {
//         window.localStorage.setItem('spoonNumber', value.toString());
//     }
// });

// hour.subscribe(value => {
//     if (browser) {
//         window.localStorage.setItem('hour', value.toString());
//     }
// });

// minute.subscribe(value => {
//     if (browser) {
//         window.localStorage.setItem('minute', value.toString());
//     }
// });

// export default spoonNumber;
// export const spoonNumberSelected = writable(0);

// setInterval(() => {
//     resetLocalStorage(hour, minute);
// }, 60000);

// ----------------------------------------------------------------------------------------------------------------------------- //

// import { writable } from 'svelte/store';
// import { browser } from "$app/environment";

// const defaultValue = '12';
// const stored = browser ? window.localStorage.getItem('spoonNumber') ?? defaultValue : defaultValue;

// const spoonNumber = writable(parseInt(stored));

// spoonNumber.subscribe(value => {
//   if (browser) {
//     window.localStorage.setItem('spoonNumber', value.toString());
//   }
// });

// function resetLocalStorage() {
//   window.localStorage.setItem('spoonNumber', defaultValue);
// }

// // récupérer l'heure de réinitialisation personnalisée ou utiliser l'heure par défaut
// let resetHour = parseInt(window.localStorage.getItem('resetHour')!);

// // calculer combien de temps attendre avant la prochaine mise à jour
// let now = new Date();
// let resetTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), resetHour, 0, 0);

// // si l'heure de réinitialisation est déjà passée aujourd'hui, ajouter 1 jour
// if (now.getTime() >= resetTime.getTime()) {
//   resetTime.setDate(resetTime.getDate() + 1);
// }

// let timeToReset = resetTime.getTime() - now.getTime();

// // exécuter la fonction resetLocalStorage() tous les jours à l'heure de réinitialisation
// setInterval(() => {
//   resetLocalStorage();
//   now = new Date();
//   resetTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), resetHour, 0, 0);
//   timeToReset = resetTime.getTime() - now.getTime();
// }, 24 * 60 * 60 * 1000); // intervalle d'un jour

// // store pour l'heure de réinitialisation personnalisée
// export const resetHourSelected = writable(resetHour);

// // fonction pour mettre à jour l'heure de réinitialisation
// export function updateResetHour(hour) {
//   resetHour = hour;
//   window.localStorage.setItem('resetHour', resetHour);
//   now = new Date();
//   resetTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), resetHour, 0, 0);
//   timeToReset = resetTime.getTime() - now.getTime();
// }

// export default spoonNumber;
// export const spoonNumberSelected = writable(0);
