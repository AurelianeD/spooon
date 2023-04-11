// Lorsque l'utilisateur arrive sur l'application, il doit renseigner le nombre de cuillères avec lequel il veut commencer sa journée.
// Une variable est définie en amont à false. Lorsque l'utilisateur valide son nombre de cuillères, la variable passe à true.
// Ensuite, cette variable est stockée dans le localstorage et si l'utilisateur revient sur l'application dans la journée et que cette variable est à true, alors cela skip cette page en question et amène directement sur la homepage.
// A partir de minuit, le localstorage se reset (donc la variable se remet à false et redirige vers cette page).

import {writable} from 'svelte/store';
import { browser } from "$app/environment";

const defaultValue = '12';
const stored = browser ? window.localStorage.getItem('spoonNumber') ?? defaultValue : defaultValue;
const storedBeginDay = browser ? window.localStorage.getItem('beginDay') : 'true';

const spoonNumber = writable(parseInt(stored));
export const beginDay = writable(storedBeginDay);

beginDay.subscribe(value => {
	if(browser){
		console.log(typeof value, 'subscribe');
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

// // calculer combien de temps attendre avant la prochaine mise à jour
// const now = new Date();
// const resetTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 9, 0, 0);
// const timeToReset = resetTime.getTime() - now.getTime();

// // exécuter la fonction resetLocalStorage() tous les jours à 9h
// setInterval(() => {
//   resetLocalStorage();
// }, 24 * 60 * 60 * 1000); // intervalle d'un jour

// export default spoonNumber;
// export const spoonNumberSelected = writable(0);

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
