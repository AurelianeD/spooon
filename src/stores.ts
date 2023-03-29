import {writable} from 'svelte/store';
import { browser } from "$app/environment";


const defaultSpoonValue = '12';
const spoonStored = browser ? window.localStorage.getItem('spoonNumber') ?? defaultSpoonValue : defaultSpoonValue;

const spoonNumber = writable(parseInt(spoonStored));

spoonNumber.subscribe(value =>{
	if(browser){
		window.localStorage.setItem('spoonNumber', value.toString());
	}
});

export default spoonNumber;
