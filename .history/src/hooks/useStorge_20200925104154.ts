export const useLocalstory = () => {
    let getMessage = (target: any) => {
        if (typeof target === 'object' && !Array.isArray(target)) {
            return JSON.parse(localStorage.getItem(target)!)
        }else{
            return localStorage.getItem(target)
        }
    }
    let setMessage = (key:s target: any) => {
        if (typeof target === 'object' && !Array.isArray(target)) {
            return JSON.parse(localStorage.getItem(target)!)
        }else{
            return localStorage.getItem(target)
        }
    }
}