const methods = {
    get: 'GET',
    post: 'POST'
}

/**
 * Доступные хранилища
 * */
const storages = {
    local: localStorage,
    session: sessionStorage
}

const KEY_USER = 'user'

const getUser = (storage) => {
    return storage.getItem(KEY_USER)
}

/**
 * Функция сохраняет параметры пользователя в хранилище
 * */
const setUser = (storage, user) => {
    storage.setItem(KEY_USER, user)
}

/**
 * Функция отправляет запрос на {url} и возвращает Promise.
 * @param {String} url
 * @param {String | Object} body
 * @param {Function} onprogress
 * @returns {Promise<any>}
 */
const asyncRequest = (url, body = null, onprogress = null) => {
    const xhr = new XMLHttpRequest()

    return new Promise((resolve, reject) => {
        const method = body ? methods.post : methods.get
        xhr.open(method, url, true)
        xhr.responseType = "json"
        xhr.setRequestHeader("Content-Type", "application/json")
        xhr.onloadend = () => {
            try {
                if (xhr.status === 200) {

                    resolve(xhr.response)

                } else {
                    throw new Error('Invalid status')
                }

            } catch (e) {
                reject({
                    request: {
                        url: url,
                        data: body
                    },
                    response: {
                        status: xhr.status,
                        statusText: xhr.statusText,
                        data: body,
                        error: e
                    }
                })
            }
        }
        if( onprogress ) {
            xhr.upload.onprogress = onprogress
        }
        xhr.send(body)
    })

}

export {
    asyncRequest,
    getUser,
    setUser,
    storages
}