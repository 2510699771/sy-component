//对本地localStorage操作
export const useLocalstory = () => {
    let getMessage = (target: any) => {
        if (typeof target === 'object' && !Array.isArray(target)) {
            return JSON.parse(localStorage.getItem(target)!)
        } else {
            return localStorage.getItem(target)
        }
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
            (localStorage.setItem(key, JSON.stringify(target))!)
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