import { Item } from '../models';

const symbols = 'abcdef01234567890'.split('');
export const getUid = (n = 5): string =>
  [...Array(n).keys()]
    .map((): string => symbols[Math.floor(Math.random() * 16)])
    .join('');

export const getStateFromStorage = (): readonly Item[] => {
  if (!window.localStorage) return [];
  try {
    return JSON.parse(window.localStorage.getItem('item_list') as string) || [];
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
    return [];
  }
};

export const saveStateToStorage = (state: Item[]): void => {
  if (!window.localStorage) return;
  try {
    window.localStorage.setItem('item_list', JSON.stringify(state));
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
  }
};

export const deleteStorage = (): void => {
  if (!window.localStorage) return;
  try {
    window.localStorage.removeItem('item_list');
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
  }
};
