
const symbols = 'abcdef01234567890'.split('');
export const getUid = (n = 5) => [...Array(n).keys()]
  .map(() => symbols[Math.floor(Math.random() * 16)])
  .join('');

export const getStateFromStorage = () => {
  if (!window.localStorage) return [];
  try {
    return JSON.parse(window.localStorage.getItem('item_list')) || [];
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
    return [];
  }
};

export const saveStateToStorage = state => {
  if (!window.localStorage) return;
  try {
    window.localStorage.setItem('item_list', JSON.stringify(state));
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
  }
};

export const deleteStorage = () => {
  if (!window.localStorage) return;
  try {
    window.localStorage.removeItem('item_list');
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
  }
};