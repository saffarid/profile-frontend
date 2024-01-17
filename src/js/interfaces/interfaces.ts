import {
  button_types,
} from '@/js/enums/enums'

import {
  IDictionary,
  IUser,
  IGroup,
  IParam,
  IRequest,
  IResponse,
  IFunctionalMap, IFunctionalArgMap
} from '@/modules/constant/src/interfaces/interfaces'

export {
  IDictionary,
  IUser,
  IGroup,
  IParam,
  IRequest,
  IResponse,
  IFunctionalMap, IFunctionalArgMap,
  
}


export interface IArrowViewData {

  background: {
    color: string,
    radius: number,
    border: {
      color: string,
      width: number
    }
  },
  flags: {
    use: boolean,
    isAlarm: {
      value: boolean,
      offsetX: number,
      offsetY: number
    },
    isInfo: {
      value: boolean,
      offsetX: number,
      offsetY: number
    },
    isWarning: {
      value: boolean,
      offsetX: number,
      offsetY: number
    },
  },
  values: {
    limits: {
      min: number,
      max: number
    },
    setpoints: {
      min: number,
      max: number
    },
    modelValue: number,
    unit: string
  },
  font: {
    setpoints: {
      colors: {
        min: string,
        max: string
      },
      size: number,
      weight: number,
    },
    modelValue: {
      color: string,
      size: number,
      weight: number
    },
  },
  scale: {
    padding: number | {
      top: number,
      right: number,
      bottom: number,
      left: number,
    },
    offsetX: number,
    offsetY: number,
    lines: {
      arrow: {
        strokeWidth: number,
      },
      arc: {
        rX: number,
        rY: number,
        angles: {
          limits: {
            max: number,
            min: number,
          },
          setpoints: {
            max: number,
            min: number,
          },
        },
        colors: {
          min: string,
          mid: string,
          max: string,
        },
        setpoints: {
          isRound: boolean,
          gap: number,
          min: {
            offsetX: number,
            offsetY: number,
          },
          max: {
            offsetX: number,
            offsetY: number,
          }
        },
        strokeWidth: number,
      }
    }
  }
}

export interface IButton {
  action: () => void,
  type: button_types,
  text: string,
  title: string,
  isBusy?: Boolean
}

export interface IOption {
  selected: boolean,
  disabled: boolean,
  value: string | number,
  label: string
}

export interface IScreen {
  readonly title: string,
  readonly icon: any,
  readonly workspace: any,
  allow: boolean,
  isShow: boolean,
  active: boolean,
  services: {
    necessary: {
      read: string[],
      write: string[],
      exec: string[]
    },
    optional: {
      read: string[],
      write: string[],
      exec: string[]
    }
  },
  confSections: string[],
  dataSections: string[]
}

export interface IMessage {
  readonly code: number,
  readonly message: string
}

export interface IDialog {
  _title: string | undefined;
  _callbacks: { [key: string]: (...args: any[]) => void } | undefined;
  _component: any;
  _componentData: { [key: string]: any } | undefined;
  _positiveButton: { [key: string]: any } | undefined;
  _neutralButton: { [key: string]: any } | undefined;
  _negativeButton: { [key: string]: any } | undefined;
  _dismiss: (() => void) | undefined;
  _isShow: boolean | undefined;
}


export interface IConnection {
  post(url: string, data?: any): Promise<IConnectionResponse>
}

export interface IConnectionResponse<T = any> {
  status: number;
  statusText: string;
  data?: T;
  headers?: any;
  config?: any;
}


export interface IModelRequest {
  modelPath: string,
  service: string,
  keyFunc?: string
  functions: {
    add?: string,
    get?: string,
    set?: string,
    remove?: string,
    download?: string,
    exec?: string,
  }
}

export interface IModelRequests {
  [key: string]: IModelRequest
}


/*   Интерфейсы для работы с моделью данных   */
export interface IModel {
  data: {},
  config: {},
}

export interface ICurUser {
  id?: string,
  username: string,
  password: string,
  acl: {
    groupname: string,
    exec: string[],
    read: string[],
    write: string[],
  }
}