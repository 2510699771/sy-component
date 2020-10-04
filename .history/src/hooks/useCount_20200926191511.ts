import { ref } from 'vue';
//current:number 当前数字   {min:number,max:number}最大最小值 delay:number延迟的秒数   step:number步数 默认为1
export const useCounter = ({ current, min, max, delay, step }: { current: number, min?: number, max?: number, delay?: number, step?: number }) => {

    if (current < min!) {
        current = min!
    }
    if (current > max!) {
        current = max!
    }
    if (!delay) {
        delay = 1000
    }
    if (!step) {
        step = 1
    }
    if (!min) {
        min = 0
    }
    if (!max) {
        max = 100
    }
    let cuent = ref<number>(current)
    //增加
    let addNum = () => {
        if (cuent.value < max!) {
            cuent.value++ //current++
        }
    }
    //减少
    let delNum = () => {
        if (cuent.value > min!) {
            cuent.value--
        }
    }
    //设置
    let setUp = (num: number) => {
        cuent.value = num
    }
    //重置
    let reset = () => {
        cuent.value = current
    }
    //延迟加
    let delayAdd = () => {
        setTimeout(() => {
            cuent.value++
        }, delay)
    }
    //延迟减
    let delayDel = () => {
        if (cuent.value-- > min!) {
            setTimeout(() => {
                cuent.value--
            }, delay)
        }
    }
    //按步数加
    let stepAdd = () => {
        if (cuent.value + step! < max!) { cuent.value += step! }
        else {
            cuent.value = max!
        }
    }
    //按步数减
    let stepDel = () => {
        if (cuent.value - step! > min!) { cuent.value = cuent.value - step! }
        else {
            cuent.value = min!
        }
    }
    return {
        cuent,
        addNum,
        delNum,
        setUp,
        reset,
        delayAdd,
        delayDel,
        stepAdd,
        stepDel
    }
} 