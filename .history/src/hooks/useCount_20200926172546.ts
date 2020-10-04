import { ref } from 'vue';
//current:number 当前数字   {min:number,max:number}最大最小值 delay:number延迟的秒数   step:number步数 默认为1
export const useCounter = ({ current, min, max, delay, step }: { current: number, min?: number, max?: number, delay?: number, step?: number }) => {

    if (current < min!) {
        current = min!
    }
    if (current > max!) {
        current = max!
    }
    let cuent = ref<number>(current)
    //增加
    let addNum = () => {
        if (current < max!) {
            current++
        }
    }
    //减少
    let delNum = () => {
        if (current > min!) {
            current--
        }
    }
    //设置
    let setUp=(num:number)=>{
        cuent.=
    }
} 