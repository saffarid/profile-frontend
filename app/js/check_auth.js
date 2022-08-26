const database = require('./database')
const api = require('./../api/api_desc')

const checkAuth = (user) => {
    return new Promise((resolve, reject) => {
        database.execute(api.MODEL_REQUESTS.db(api.DATABASE.collections.users.name, api.ACTS.select), {auth: user})
            .then(user => {
                if(user.datas.findings.length == 0){
                    reject({
                        message: 'Неверно введёно имя пользователя или пароль.'
                    })
                } else {
                    user.datas.findings[0].auth.pass = null
                    resolve(user.datas.findings[0])
                }
            })
    })
}

module.exports = {
    checkAuth
}