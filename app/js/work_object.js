/**
 * Функция проверяет является аргумент объектом
 * */
const isObject = (arg) => {
    return arg === Object(arg)
}

/**
 * Функция копирует один объект в другой
 * */
const copy = (copied, target) => {

    Object.keys(copied).forEach(key => {
        if (isObject(copied[key])){
            target[key] = {}
            copy(copied[key], target[key])
        } else {
            target[key] = copied[key]
        }
    })

}

export default {
    isObject,
    copy
}