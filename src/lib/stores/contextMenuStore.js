import { writable } from 'svelte/store';

export const contextMenuTitle = writable("");
export const contextMenuLinks = writable([]);
export const contexMenuSelection = writable("");