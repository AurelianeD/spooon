import {writable} from 'svelte/store';
import { browser } from "$app/environment";

const defaultValue = '12';
const stored = browser ? window.localStorage.getItem('spoonNumber') ?? defaultValue : defaultValue;

const spoonNumber = writable(parseInt(stored));

spoonNumber.subscribe(value =>{
	if(browser){
		window.localStorage.setItem('spoonNumber', value.toString());
	}
});

export default spoonNumber;
