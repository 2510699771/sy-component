//对本地localStorage操作
export const useLocalstory = () => {
    let getMessage = (key: string) => {
        if (localStorage.getItem(key) && localStorage.getItem(key))  return localStorage.getItem(key)
    }
    let setMessage = (key: string, target: any) => {
        if (typeof target === 'object') {
            (localStorage.setItem(key, JSON.stringify(target))!)
        }
    }
    let cleanMessage = (key: string,) => {
        localStorage.removeItem(key)
    }
    return {
        getMessage,
        setMessage,
        cleanMessage
    }
}
//对本地sessionStorage操作
export const useSessionstory = () => {
    let getMessage = (target: any) => {
        if (typeof target === 'object' && !Array.isArray(target)) {
            return JSON.parse(sessionStorage.getItem(target)!)
        } else {
            return sessionStorage.getItem(target)
        }
    }
    let setMessage = (key: string, target: any) => {
        if (typeof target === 'object') {
            (sessionStorage.setItem(key, JSON.stringify(target))!)
        }
    }
    let cleanMessage = (key: string,) => {
        sessionStorage.removeItem(key)
    }
    return {
        getMessage,
        setMessage,
        cleanMessage
    }
}