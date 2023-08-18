// themeStore.js
import { writable } from 'svelte/store';

// On initialise le store avec la valeur par défaut (false = thème clair)
export const darkTheme = writable(false);
