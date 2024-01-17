
export const save2LocalStorage = (key: string, value: string) => localStorage.setItem(key, value)

export const loadFromLocalStorage = (key: string, defaultValue: any) => {
  const value = localStorage.getItem(key)
  if (value == null) {
    return defaultValue
  }
  return value
}