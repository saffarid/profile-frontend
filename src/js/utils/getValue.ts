/** Преобразует объект в строку, которую можно сравнивать для определения эквивалентности объектов */
export const getValue: any = function (obj: any, path: string[] | string, separator: string = '.') {
  const p = Array.isArray(path) ? path : path.split(separator)
  return p.reduce((prev, curr) => prev && prev[curr], obj)
}