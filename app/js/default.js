const api = require('../api/api_desc.js')
const hash = require('jshashes')

module.exports = {
    system: {
        ads: {
            isShowingAds: false,
        },
    },
    accessRights: [
        {value: api.ACCESS_RIGHTS.ReadOnly},
        {value: api.ACCESS_RIGHTS.ReadWrite},
        {value: api.ACCESS_RIGHTS.NotAllow},
    ],
    groups: [
        {
            name: 'guests',
            rights: {
                publications:{value: api.ACCESS_RIGHTS.ReadOnly,},
                system:{value: api.ACCESS_RIGHTS.NotAllow,},
                themesOfPublication:{value: api.ACCESS_RIGHTS.ReadOnly,},
                groups:{value: api.ACCESS_RIGHTS.NotAllow,},
                users:{value: api.ACCESS_RIGHTS.NotAllow,},
                accessRights:{value: api.ACCESS_RIGHTS.NotAllow},
            }
        },
        {
            name: 'reader',
            rights: {
                publications:{value: api.ACCESS_RIGHTS.ReadOnly,},
                system:{value: api.ACCESS_RIGHTS.NotAllow,},
                themesOfPublication:{value: api.ACCESS_RIGHTS.ReadOnly,},
                groups:{value: api.ACCESS_RIGHTS.NotAllow,},
                users:{value: api.ACCESS_RIGHTS.NotAllow,},
                accessRights:{value: api.ACCESS_RIGHTS.NotAllow},
            }
        },
        {
            name: 'administrators',
            rights: {
                publications:{value: api.ACCESS_RIGHTS.ReadWrite,},
                system:{value: api.ACCESS_RIGHTS.ReadWrite,},
                themesOfPublication:{value: api.ACCESS_RIGHTS.ReadWrite,},
                groups:{value: api.ACCESS_RIGHTS.ReadWrite,},
                users:{value: api.ACCESS_RIGHTS.ReadWrite,},
                accessRights:{value: api.ACCESS_RIGHTS.ReadOnly},
            }
        },
    ],
    users: [
        {
            auth:{
                name: "admin",
                pass: new hash.SHA1().b64('admin'),
            },
            personal:{
              nickname:"admin",
            },
            group: {
                name: 'administrators',
            }
        },
        {
            auth:{
                name: "saffarid",
                pass: new hash.SHA1().b64('PnO030994'),
            },
            personal:{
                nickname:"saffarid",
            },
            group: {
                name: 'reader',
            }
        }
    ]
}