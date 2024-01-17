export const isEmptySection = function(val: any): boolean {
  return (
    val === undefined ||
    val === null ||
    val === '' ||
    (Object.keys(val).length === 0 && val.constructor === Object) ||
    (Array.isArray(val) && val.length === 0)
  )
}