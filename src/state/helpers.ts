import type { Item } from '../types/Item';
import Maybe from '../utils/Maybe';

const symbols = 'abcdef01234567890'.split('');
export const getUid = (n = 5): string =>
  [...Array(n).keys()]
    .map((): string => symbols[Math.floor(Math.random() * 16)])
    .join('');

export const getStateFromStorage = (): readonly Item[] =>
  Maybe.of(window.localStorage)
    .map((storage) => storage.getItem('item_list'))
    .map((i) => JSON.parse(i) as Item[])
    .getOrElse([]);

export const saveStateToStorage = (state: Item[]): void => {
  Maybe.of(window.localStorage).map((storage) =>
    storage.setItem('item_list', JSON.stringify(state)),
  );
};

export const deleteStorage = (): void => {
  Maybe.of(window.localStorage).map((storage) =>
    storage.removeItem('item_list'),
  );
};
