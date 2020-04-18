const storageSupport = () => {
  try {
    const test = 'test-storage';
    localStorage.setItem(test, test);
    localStorage.removeItem(test);
    return true;
  } catch (error) {
    return false;
  }
};

const getLocalStorage = (key) => {
  if (storageSupport) {
    return localStorage.getItem(key);
  }
  return undefined;
};

const setLocalStorage = (key) => (value) => {
  if (storageSupport) {
    return localStorage.setItem(key, value);
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
