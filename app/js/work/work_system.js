const db = require('./../database')
const api = require('./../../api/api_desc')

const edit = (data) => {
    return new Promise((resolve, reject) => {
        db.execute(
            api.MODEL_REQUESTS.db(api.DATABASE.collections.system.name, api.ACTS.update),
            data
        )
          .then(value => {
              resolve({
                  ...api.CODES_RESPONSE.updated,
                  datas: value
              })
          })
          .catch(err => {
              if (err.code == db.codes.duplicate) {
                  resolve({
                      ...api.CODES_RESPONSE.alreadyReported,
                      datas: err.keyValue
                  })
              }
              reject(err)
          })
    })
}

const get = () => {
    return new Promise((resolve, reject) => {
        db.execute(
            api.MODEL_REQUESTS.db(api.DATABASE.collections.system.name, api.ACTS.select),
            {}
        )
            .then(findings => {
                if(findings.length == 0){
                    resolve({
                        ...api.CODES_RESPONSE.notFound,
                        datas: null
                    })
                    return
                }
                resolve({
                    ...api.CODES_RESPONSE.ok,
                    datas: {
                        findings: findings
                    }
                })
            })
            .catch(err => reject(err))
    })
}

const execute = (url, data) => {
    const request = url.split('/')
    switch (request[3]) {
        case api.ESSENCE.system.actions.edit : {
            return edit(data)
        }
        case api.ESSENCE.system.actions.get : {
            return get(data)
        }
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