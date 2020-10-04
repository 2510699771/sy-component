import { onMounted, ref } from "vue"

export const useMouse = () => {
    let x = ref<number>(0)
    let y = ref<number>()
    let move = (e: MouseEvent) => {
        x.value = e.pageX
        y.value = e.pageY
    }
    onMounted(()=>{
        Window.addE
    })
}