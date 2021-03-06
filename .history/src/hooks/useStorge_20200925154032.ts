//对本地localStorage操作
export const useLocalstory = () => {
    let getMessage = (key: string) => {
        let get = JSON.parse(localStorage.getItem(key)!)
        if (localStorage.getItem(key) && typeof get === "object") {
            return JSON.parse(localStorage.getItem(key)!)
        } else {
            return localStorage.getItem(key)
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
    let getMessage = (key: string) => {
        let get = JSON.parse(localStorage.getItem(key)!)
        if (sessionStorage.getItem(key) && typeof get === "object") {
            return JSON.parse(localStorage.getItem(key)!)
        } else {
            return sessionStorage.getItem(key)
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