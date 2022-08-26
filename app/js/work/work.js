const api = require('./../../api/api_desc')

const execute = (url, data) => {
    const request = url.split('/')
    switch (request[2]) {

        default: {
            return new Promise((resolve, reject) => {
                reject(api.CODES_RESPONSE.notFound)
            })
        }
    }
}

module.exports = {
    execute
}