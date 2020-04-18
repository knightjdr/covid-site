const windowGlobal = typeof window !== 'undefined' && window;
const localAdapter = windowGlobal
  ? windowGlobal.localStorage
  : {
    getItem: () => null,
    removeItem: () => {},
    setItem: () => {},
  };

const storageSupport = () => {
  try {
    const test = 'test-storage';
    localAdapter.setItem(test, test);
    localAdapter.removeItem(test);
    return true;
  } catch (error) {
    return false;
  }
};

const getLocalStorage = (key) => {
  if (storageSupport) {
    return localAdapter.getItem(key);
  }
  return undefined;
};

const setLocalStorage = (key) => (value) => {
  if (storageSupport) {
    return localAdapter.setItem(key, value);
  }
  return undefined;
};

const useLocalStorage = (field) => (
  [
    getLocalStorage(field),
    setLocalStorage(field),
  ]
);

export default useLocalStorage;
