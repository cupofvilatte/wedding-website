export const setLocalStorage = (key, value) => {
    try {
      const jsonValue = JSON.stringify(value);
      localStorage.setItem(key, jsonValue);
    } catch (error) {
      console.error('Error saving to local storage:', error);
    }
  };
  
  // ✅ Retrieve data from local storage
  export const getLocalStorage = (key) => {
    try {
      const storedValue = localStorage.getItem(key);
      return storedValue ? JSON.parse(storedValue) : null;
    } catch (error) {
      console.error('Error retrieving from local storage:', error);
      return null;
    }
  };
  
  // ✅ Remove data from local storage
  export const removeLocalStorage = (key) => {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error('Error removing from local storage:', error);
    }
  };