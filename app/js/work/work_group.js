const db = require('./../database')
const api = require('./../../api/api_desc')

const add = (group) => {
    return new Promise((resolve, reject) => {
        db.execute(
            api.MODEL_REQUESTS.db(api.DATABASE.collections.groups.name, api.ACTS.insert),
            group
        )
          .then(value => {
              resolve({
                  ...api.CODES_RESPONSE.created,
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

const edit = (group) => {
    return new Promise((resolve, reject) => {
        db.execute(
            api.MODEL_REQUESTS.db(api.DATABASE.collections.groups.name, api.ACTS.update),
            group
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

const getGroups = (data) => {
    return new Promise((resolve, reject) => {
        db.execute(
            api.MODEL_REQUESTS.db(api.DATABASE.collections.groups.name, api.ACTS.select),
            {}
        )
          .then(findings => {
              if (findings.length == 0) {
                  resolve({
                      ...api.CODES_RESPONSE.notFound,
                      datas: null
                  })
                  return
              }
              resolve({
                  ...api.CODES_RESPONSE.notFound,
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
        case api.ESSENCE.group.actions.addNew : {
            return add(data)
        }
        case api.ESSENCE.group.actions.edit : {
            return edit(data)
        }
        case api.ESSENCE.group.actions.getGroups : {
            return getGroups(data)
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