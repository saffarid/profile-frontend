import {IConnection, IRequest, IConnectionResponse, IDictionary} from '@/js/interfaces/interfaces'
import axios, {AxiosError, AxiosRequestConfig, AxiosResponse} from 'axios'

export class AxiosConnection implements IConnection {
  private readonly requests: IDictionary<Promise<IConnectionResponse>> = {}
  post = (url: string, data: IRequest) => {

    let key = JSON.parse(JSON.stringify(data))
    if ('param' in key){
      delete key.param.args
    }
    key = JSON.stringify(key)

    if (key in this.requests){
      return this.requests[key]
    }

    let response: IConnectionResponse
    const config = <AxiosRequestConfig>{
      headers: {
        'Content-Type': 'application/json'
      }
    }
    this.requests[key] = new Promise<IConnectionResponse>((resolve, reject) => {
      axios.post(url, data, config)
           .then((axiosResponse:AxiosResponse) => {
             response = <IConnectionResponse>{
               config: axiosResponse.config,
               data: axiosResponse.data,
               headers: axiosResponse.headers,
               status: axiosResponse.status,
               statusText: axiosResponse.statusText,
             }
           })
           .catch((e: AxiosError) => {
             response = <IConnectionResponse>{
               config: e.response?.config,
               data: e.response?.data,
               headers: e.response?.headers,
               status: e.response?.status ?? e.code,
               statusText: e.response?.statusText ?? e.message,
             }
           })
           .finally(() => {
             delete this.requests[key]
             resolve(response)
           })
    })
    return this.requests[key]
  }
}