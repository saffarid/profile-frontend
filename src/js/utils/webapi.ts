
const activeRequest: {[key: string]: Promise<any> }= {}

/**
 * Функция отправляет запрос на {url} и возвращает Promise.
 * @param {String} url
 * @param {String | Object} body
 * @param {Function} onprogress
 * @returns {Promise<any>}
 */
const asyncRequest = (url:string,
                      body       = JSON.stringify({}),
                      onprogress = null) => {
  if(!(url in activeRequest)){
    const xhr = new XMLHttpRequest()
    const promise = new Promise<any>((resolve, reject) => {
      const method = body ? "POST" : "GET"
      xhr.open(method, url, true)
      xhr.responseType = "json"
      xhr.setRequestHeader("Content-Type", "application/json")
      xhr.onloadend = () => {
        try {
          if (xhr.status === 200) {
            delete activeRequest[url]
            resolve(xhr.response)
          }
          else {
            throw new Error('Invalid status')
          }

        }
        catch (e) {
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
      if (onprogress) {
        xhr.upload.onprogress = onprogress
      }
      xhr.send(body)
    })
    activeRequest[url] = promise
  }
  return activeRequest[url]
}

export {
  asyncRequest,
}