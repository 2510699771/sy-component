import { onMounted, onUnmounted, ref } from "vue"

export const useMouse = () => {
    let x = ref<number>(0)
    let y = ref<number>(0)
    let move = (e: MouseEvent) => {
        x.value = e.pageX
        y.value = e.pageY
    }
    onMounted(() => {
        window.addEventListener('mousemove', move)
        // addEventListener(event, function, useCapture);
        // 第一个参数是事件的类型(如 “click” 或 “mousedown”).
        // 第二个参数是事件触发后调用的函数。
        // 第三个参数是个布尔值用于描述事件是冒泡还是捕获。该参数是可选的。某些时候需要加上true
    })
    onUnmounted(() => {
        window.removeEventListener('mousemove', move)  //使用removeEventListener() 方法来移除事件的监听。
    })
    return {
        x, y  //导出x，y轴坐标
    }
}