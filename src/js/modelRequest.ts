import {IModelRequest, IModelRequests} from "@/js/interfaces/interfaces";

export const modelRequest: IModelRequests = {
  'data': <IModelRequest>{
    modelPath: 'data',
    functions: {
      get: 'getData'
    },
  },
  'config': <IModelRequest>{
    modelPath: 'config',
    functions: {
      get: 'getConfig'
    },
  },
  'config.users': <IModelRequest>{
    modelPath: 'config.users',
    service: 'users',
    keyFunc: 'users',
    functions: {
      add: 'addConfig',
      get: 'getConfig',
      set: 'setConfig',
      remove: 'deleteConfig',
    },
  },
  'config.acl': <IModelRequest>{
    modelPath: 'config.acl',
    service: 'users',
    keyFunc: 'acl',
    functions: {
      add: 'addConfig',
      get: 'getConfig',
      set: 'setConfig',
      remove: 'deleteConfig',
    },
  },
  'config.portfolio':<IModelRequest>{
    modelPath: 'config.portfolio',
    service: 'portfolio',
    keyFunc: 'portfolio',
    functions: {
      add: 'addConfig',
      get: 'getConfig',
      set: 'setConfig',
      remove: 'deleteConfig',
    },
  }
}


export default {
  modelRequest,
}