import { createEvent, createStore } from 'effector';


export const open = createEvent();
export const close = createEvent();


export const $isDrawerOpen = createStore<boolean>(false)
    .on(open, () => true)
    .on(close, () => false);