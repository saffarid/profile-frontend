import Vuex from 'vuex'
import {
  IConnection,
  ICurUser,
  IRequest,
  IDialog,
  IMessage,
  IModel,
  IConnectionResponse,
  IScreen,
  IDictionary, IDownload
} from '@/js/interfaces/interfaces'
import { AxiosConnection } from '@/js/services/AxiosConnection'
import { _screens } from '@/pages/index/screens/screens'
import axios from 'axios'
import * as path from 'path'
import { getValue, isEmptySection, loadFromLocalStorage, objectCopy, save2LocalStorage } from '@/js/utils'
import { modelRequest } from '@/js/modelRequest'
import set from 'set-value'

const connection: IConnection = new AxiosConnection()
/**
 * Период запроса
 * */
const timeoutRequest = 1000
/**
 * Задержка перед обновлением изменённой секции модели
 * */
const timeoutRefresh = 500

const keys = {
  theme: 'theme',
  sid: 'sid'
}

const redirectToAuth = () => {
  const url: URL = new URL(location.origin)
  url.pathname = '/auth'
  location.replace(url.href)
}

export const store = new Vuex.Store({
  state: {
    sid: '',
    curUser: <ICurUser>{},
    isMobile: false,
    model: <IModel>{ config: {}, data: {} },
    dialogPane: <IDialog>{
      _callbacks: undefined,
      _component: undefined,
      _componentData: undefined,
      _dismiss: undefined,
      _isShow: undefined,
      _negativeButton: undefined,
      _neutralButton: undefined,
      _positiveButton: undefined,
      _title: undefined,
    },
    activeScreen: <IScreen>{ allow: false, icon: undefined, isShow: false, title: '', workspace: undefined },
    message: <IMessage>{ code: 0, message: '' },
    theme: 'light',
    isScreenReady: false,
    appReady: false,
    screens: <{ [key: string]: IScreen }>{},
    perSize: {
      '--height_per': window.innerHeight * 0.01 + 'px',
      '--width_per': window.innerWidth * 0.01 + 'px',
    }
  },
  getters: {
    dialogPane: state => state.dialogPane,
    activeScreen: state => state.activeScreen,
    isScreenReady: state => state.isScreenReady,
    isAppReady: state => state.appReady,
    model: state => state.model,
    message: state => state.message,
    theme: state => state.theme,
    curUser: state => state.curUser,
    screens: state => state.screens,
    isMobile: state => state.isMobile,
    perSize: state => state.perSize
  },
  mutations: {
    setSid: (state, payload: string) => {
      state.sid = payload
      localStorage.setItem(keys.sid, payload)
    },
    setTheme: (state, payload?: string) => {
      if (payload == undefined) {
        if (state.theme == 'light') {
          state.theme = 'dark'
        }
        else {
          state.theme = 'light'
        }
      }
      else {
        state.theme = payload
      }
      save2LocalStorage(keys.theme, state.theme)
    },
    setDialogPane: (state, payload: IDialog) => state.dialogPane = payload,
    setActiveScreen: (state, payload: IScreen) => {
      for (let screen of Object.values(state.screens)) {
        screen.active = screen.title == payload.title;
      }
      state.activeScreen = payload
    },
    setScreenReady: (state, payload: boolean) => state.isScreenReady = payload,
    setAppReady: (state, payload: boolean) => state.appReady = payload,
    setSectionModel: (state, payload) => {
      const _modelPath = modelRequest[payload.key].modelPath!.split('.')
      set(state.model, _modelPath!, payload.data)
    },
    setMessage: (state, payload: IMessage) => {
      state.message = payload
      setTimeout(() => {
        state.message = <IMessage>{ code: 0, message: '' }
      }, 5000)
    },
    setCurUser: (state, payload: ICurUser) => state.curUser = payload,
    setScreens: (state) => {
      const user = state.curUser
      const screens: { [key: string]: IScreen } = {}
      for (let screen of Object.keys(_screens)) {
        let allow = true
        const _screen = _screens[screen]
        for (let service of _screen.services.necessary.read) {
          if (!user.acl.read.includes(service)) {
            allow = false
            break
          }
        }
        for (let service of _screen.services.necessary.write) {
          if (!user.acl.write.includes(service)) {
            allow = false
            break
          }
        }

        if (_screen.services.necessary.read.length == 0 && _screen.services.necessary.write.length == 0) {
          const _allow: IDictionary<boolean> = {}
          const requiredServices = _screen.services.optional.read.concat(_screen.services.optional.write, _screen.services.optional.exec)
          for (let service of requiredServices) {
            if (!(service in _allow)) {
              _allow[service] = true

              if (_screen.services.optional.read.length != 0)
                _allow[service] = _allow[service] && user.acl.read.includes(service)
              if (_screen.services.optional.write.length != 0)
                _allow[service] = _allow[service] && user.acl.write.includes(service)
              if (_screen.services.optional.exec.length != 0)
                _allow[service] = _allow[service] && user.acl.exec.includes(service)
            }
          }
          if (Object.values(_allow)
            .find(value => value) == undefined) {
            allow = false
          }
        }

        if (allow) screens[screen] = _screens[screen]

      }
      state.screens = screens
    },
    setIsMobile: (state, payload: boolean) => state.isMobile = payload,
    setPerSize: (state, payload) => {
      state.perSize['--height_per'] = payload.innerHeight * 0.01 + 'px'
      state.perSize['--width_per'] = payload.innerWidth * 0.01 + 'px'
    }
  },
  actions: {
    appInit: async (context: any) => {
      const getSid = (url: URL): string => {
        let sid: string = <string>url.searchParams.get(keys.sid)
        if (sid == null) {
          sid = <string>localStorage.getItem(keys.sid)
        }
        return sid
      }

      const url: URL = new URL(location.href)
      const _sid = getSid(url)
      if (_sid == null) redirectToAuth()

      context.commit("setSid", _sid)
      const isAuth = (await context.dispatch('isAuth')).data.isAuth
      if (!isAuth) redirectToAuth()
      context.commit('setCurUser', isAuth)

      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
        context.commit('setIsMobile', true)
      }

      context.commit('setScreens')

      context.commit('setTheme', loadFromLocalStorage(keys.theme, 'light'))

      window.addEventListener('resize', () => {
        context.commit('setPerSize', {
          innerHeight: window.innerHeight,
          innerWidth: window.innerWidth
        })
      })

      let sections: string[] = []
      for (const screen of Object.values(_screens)) {

        sections = sections.concat(screen.dataSections)
      }
      context.dispatch('aLoadData', sections)

      context.dispatch('setActiveScreen', 'Main')
      context.commit('setAppReady', true)
    },


    downloadData: (context, payload: IDownload) => {
      let dataStr: string
      dataStr = `data:text/${payload.format};charset=UTF-8,` + encodeURIComponent(JSON.stringify(payload.data));
      var downloadAnchorNode = document.createElement('a');
      downloadAnchorNode.setAttribute("href", dataStr);
      downloadAnchorNode.setAttribute("download", payload.name + `.${payload.format}`);
      document.body.appendChild(downloadAnchorNode); // required for firefox
      downloadAnchorNode.click();
      downloadAnchorNode.remove();
      context.commit('downloadData', payload)
    },
    setActiveScreen: (context, payload: string) => {
      context.commit('setScreenReady', false)
      if (context.state.activeScreen.title == payload) {
        context.commit('setScreenReady', true)
        return
      }
      context.commit('setActiveScreen', _screens[payload])

      let sections: string[] = _screens[payload].confSections.concat(_screens[payload].dataSections)
      if (sections.length != 0) {
        context.dispatch('aLazyLoadSections', sections)
      }

      context.commit('setScreenReady', true)
    },
    changeTheme: (context) => context.commit('setTheme'),
    setDialogPane: (context, payload: IDialog) => context.commit('setDialogPane', payload),
    clearDialogPane: (context: any) => context.commit('setDialogPane', {
      _callbacks: undefined,
      _component: undefined,
      _componentData: undefined,
      _dismiss: undefined,
      _isShow: false,
      _negativeButton: undefined,
      _neutralButton: undefined,
      _positiveButton: undefined,
      _title: undefined,
    }),


    aLazyLoadSections: (context, payload: string[]) => {
      if (!Array.isArray(payload)) {
        payload = [payload]
      }
      Promise.allSettled(
        payload.map(section => {
          const val = getValue(context.state.model, section)
          if (isEmptySection(val)) {
            context.dispatch('aLoadSection', { key: section })
          }
        }),
      )
    },
    aLoadSection: (context, payload: { key: string, updateCur?: boolean }) => {
      const key = payload.key
      const keyFunc = modelRequest[payload.key].keyFunc;
      const service = modelRequest[payload.key].service;

      let includes = true
      if (keyFunc != undefined) {
        includes = (<string[]>context.state.curUser.acl.read).includes(service);
        if (!includes) return
      }

      return context.dispatch('call', {
        param: {
          service,
          appFunc: modelRequest[payload.key].functions.get,
          keyFunc,
        },
      })
        .then((response: IConnectionResponse) => {
          if (typeof response.status == 'string') {
            throw new Error(response.statusText)
          }
          if (response.status != 200) {
            context.commit('setMessage', {
              code: response.status,
              message: response.statusText
            })
          }
          if (response.data) {
            context.commit('setSectionModel', {
              key: key,
              data: response.data,
              updateForce: payload.updateCur ?? false,
            })
          }
        })
        .catch((e: any) => {
          console.log(e)
          context.commit('setMessage', {
            code: 400,
            message: e.message
          })
        })
    },
    aLoadData: (context, payload: string[]) => {
      try {
        for (const section of payload) {
          context.dispatch('aLoadSection', { key: section })
        }
      } finally {
        setTimeout(() => context.dispatch('aLoadData', payload), timeoutRequest)
      }
    },


    /**
     * Функция выполняет запрос на сервер и возвращает ответ
     * */
    req: async (context, payload: { [key: string]: any }): Promise<IConnectionResponse> => {
      const response = await connection.post(`/app?sid=${context.state.sid}`, payload)
      if (response.status == 401) {
        redirectToAuth()
      }
      return response
    },

    login: (context, payload: { username: string, password: string }) => {
      const p = {
        func: 'login',
        param: payload,
      }
      if (payload.username == '' || payload.password == '') {
        context.commit('setMessage', {
          code: 400,
          message: 'Введите пользователя и пароль'
        })
      }
      context.dispatch('req', p)
        .then((response: IConnectionResponse) => {
          if (response.data) {
            //  console.log(response)
            //  console.log(location.origin)
            const url: URL = new URL(location.origin)
            url.searchParams.append(keys.sid, response.data.sid)
            location.replace(url.href)
          }
          else {
            context.commit('setMessage', {
              code: response.status,
              message: response.statusText
            })
          }
        })
    },
    isAuth: async (context): Promise<IConnectionResponse> => await context.dispatch('req', <IRequest>{ func: 'isAuth' }),
    logout: async (context) => {
      const url: URL = new URL(location.origin)
      await context.dispatch('req', <IRequest>{ func: 'logout' })
      localStorage.removeItem(keys.sid)
      url.pathname = '/auth'
      location.replace(url.href)
    },

    call: async (context: any, payload: IRequest): Promise<IConnectionResponse> => {
      const p: IRequest = {
        func: 'call',
        param: payload.param,
      }
      return context.dispatch('req', p)
    },
    download: (context, payload: { key: string, fileName: string }) => {
      const p = {
        param: {
          module: modelRequest[payload.key].service,
          func: modelRequest[payload.key].functions.download,
          args: {
            fileName: payload.fileName,
          },
        },
      }
      axios.post('download', p)
        .then((response) => {
          var data = new Blob([response.data], { type: 'text/plain' })
          var url = window.URL.createObjectURL(data)

          var dlAnchorElem = document.createElement('a')
          dlAnchorElem.setAttribute('href', url)
          dlAnchorElem.setAttribute('download', payload.fileName)
          dlAnchorElem.click()
        })
    },

    exec: (context, payload: { key: string, args?: { [key: string]: any } }) => {
      context.dispatch('call', {
        key: payload.key,
        param: {
          service: modelRequest[payload.key].service,
          appFunc: modelRequest[payload.key].functions.exec,
          keyFunc: modelRequest[payload.key].keyFunc,
          args: payload.args
        },
      })
    },
    add: (context, payload: { key: string, data: { [key: string]: any } }) => {
      const service = modelRequest[payload.key].service
      if (context.state.curUser.acl.write.includes(service)) {
        return context.dispatch('call', {
          key: payload.key,
          param: {
            service,
            appFunc: modelRequest[payload.key].functions.add,
            keyFunc: modelRequest[payload.key].keyFunc,
            args: payload.data,
          },
        })
          .then(() => context.dispatch('aLoadSection', { key: payload.key, updateCur: true }))
      }
    },
    get: (context, payload: { key: string, data: { [key: string]: any } }) => {
      const service = modelRequest[payload.key].service
      if (context.state.curUser.acl.read.includes(service)) {
        return context.dispatch('call', {
          key: payload.key,
          param: {
            service,
            appFunc: modelRequest[payload.key].functions.get,
            keyFunc: modelRequest[payload.key].keyFunc,
            args: payload.data,
          },
        })
          .then((response: IConnectionResponse) => {
            if (response.status == 200) {
              return response.data
            }

            context.commit('setMessage', {
              code: response.status,
              message: response.statusText
            })

            return undefined
          })
      }
    },
    set: (context, payload: { key: string, data: { [key: string]: any } }) => {
      const service = modelRequest[payload.key].service
      // console.log('service', service)
      // console.log('context.state.curUser.acl.write', context.state.curUser.acl.write)
      if (context.state.curUser.acl.write.includes(service)) {
        return context.dispatch('call', {
          key: payload.key,
          param: {
            service,
            appFunc: modelRequest[payload.key].functions.set,
            keyFunc: modelRequest[payload.key].keyFunc,
            args: payload.data,
          },
        })
          .then(() => { return context.dispatch('aLoadSection', { key: payload.key, updateCur: true }) })

      }
    },
    remove: (context, payload: { key: string, data: any }) => {
      const service = modelRequest[payload.key].service
      if (context.state.curUser.acl.write.includes(service)) {
        return context.dispatch('call', {
          key: payload.key,
          param: {
            service,
            appFunc: modelRequest[payload.key].functions.remove,
            keyFunc: modelRequest[payload.key].keyFunc,
            args: payload.data,
          },
        })
          .then(() => context.dispatch('aLoadSection', { key: payload.key, updateCur: true }))
      }
    },
  }
})