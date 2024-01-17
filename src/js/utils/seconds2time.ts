
const seconds = 1000
const minute = 60 * seconds
const hour = 60 * minute
const day = 24 * hour
const week = 7 * day

export const seconds2time = (_seconds: number) => {
  const _week = Math.floor(_seconds / week)
  const _day = Math.floor((_seconds - _week * week) / day)
  const _hour = Math.floor((_seconds - _week * week - _day * day) / hour)
  const _minute = Math.floor((_seconds - _week * week - _day * day - _hour * hour) / minute)
  const _second = Math.floor((_seconds - _week * week - _day * day - _hour * hour - _minute * minute) / seconds)
  return [_week, _day, _hour, _minute, _second].join(':')
}