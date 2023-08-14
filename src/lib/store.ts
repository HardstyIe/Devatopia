import { writable } from 'svelte/store';
import data from './data.json';

export const myData = writable(data);
