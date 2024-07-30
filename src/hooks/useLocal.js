export const useLocal = (itemName) => {
  const setLocal = (data) => {
    localStorage.setItem(itemName, JSON.stringify(data));
  };
  const getLocal = () => {
    return JSON.parse(localStorage.getItem(itemName));
  };
  const removeLocal = () => {
    localStorage.removeItem(itemName);
  };

  return [setLocal, getLocal, removeLocal];
}