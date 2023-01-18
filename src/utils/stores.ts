import { writable } from 'svelte/store';
import { State } from '../state';

export const state = writable(new State());