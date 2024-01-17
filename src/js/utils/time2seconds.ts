const seconds = 1000
const minute = 60 * seconds
const hour = 60 * minute
const day = 24 * hour
const week = 7 * day

export const time2seconds = (time: string) => {
  const splitT1 = time.split(':')
                      .map(value => parseInt(value))
  return splitT1[0] * week + splitT1[1] * day + splitT1[2] * hour + splitT1[3] * minute + splitT1[4] * seconds
}
