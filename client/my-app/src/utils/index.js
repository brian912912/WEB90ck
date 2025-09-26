const saveToLocalStorage = (key, value) => {
  try {
    const valueToStore =
      typeof value === "string" ? value : JSON.stringify(value);
    localStorage.setItem(key, valueToStore);
  } catch (_error) {
    // Fallback: attempt to store as string
    localStorage.setItem(key, String(value));
  }
};

const removeFromLocalStorage = (key) => {
  localStorage.removeItem(key);
};

const getValueFromLocalStorage = (key) => {
  const raw = localStorage.getItem(key);
  if (raw === null) return null;
  // Try to parse JSON; if it fails, return the raw string (useful for JWT tokens)
  try {
    return JSON.parse(raw);
  } catch (_error) {
    return raw;
  }
};
export { getValueFromLocalStorage, removeFromLocalStorage, saveToLocalStorage };
