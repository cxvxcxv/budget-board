export function saveToLocalStorage<T>(key: string, value: T): void {
  try {
    const serialized = JSON.stringify(value);
    localStorage.setItem(key, serialized);
  } catch (error) {
    console.error('error saving to localStorage:', error);
  }
}

export function loadFromLocalStorage<T>(key: string): T | undefined {
  try {
    const serialized = localStorage.getItem(key);
    if (!serialized) return undefined;
    return JSON.parse(serialized) as T;
  } catch (error) {
    console.error('error loading from localStorage:', error);
    return undefined;
  }
}

export function removeFromLocalStorage(key: string): void {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error('error removing from localStorage:', error);
  }
}
