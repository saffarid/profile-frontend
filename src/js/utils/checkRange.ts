/**
 * Функция проверяет значение (cur) на вхождение в диапазон (min-max).
 * Если значение (cur) меньше (min), функция возвращает (min).
 * Если значение (cur) больше (max), функция возвращает (max).
 * Иначе функция возвращает (cur).
 * */
export const checkRange = (min: number, cur: number, max: number) => {
  if(cur <= min){
    return min
  } else if(min < cur && cur < max){
    return cur
  } else {
    return max
  }
}
