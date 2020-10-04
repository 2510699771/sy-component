export const useLocalstory = () => {
    let getMessage = (target: any) => {
        if (typeof target === 'object' && !Array.isArray(target)) {
            return JSON.parse(localStorage.getItem(target)!)
        } else {
            return localStorage.getItem(target)
        }
    }
    let setMessage = (key: string, target: any) => {
        if (typeof target === 'object' && !Array.isArray(target)) {
            JSON.stringify(localStorage.getItem(target)!)
        } else {
            localStorage.getItem(target)
        }
    }
}