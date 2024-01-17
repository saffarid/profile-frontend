import {isObject} from ".";

export const objectCopy = (copied:any, target:any) => {
  for (const key of Object.keys(copied)) {
    if (Array.isArray(copied[key])){
      target[key] = []
      for(let oCopy of copied[key]){
        if (isObject(oCopy)){
          const obj: {[key:string]: any} = {}
          objectCopy(oCopy, obj)
          target[key].push(obj)
        }else{
          target[key].push(oCopy)
        }

      }
    }
    else
    if (isObject(copied[key])) {
      target[key] = {}
      objectCopy(copied[key], target[key])
    }
    else {
      target[key] = copied[key]
    }
  }
}