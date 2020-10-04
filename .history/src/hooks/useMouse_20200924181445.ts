import { onMounted, ref } from "vue"

export const useMouse = () => {
    let x = ref<number>(value:0)
    let y = ref<number>(value:0)
    let move = (e: MouseEvent) => {
        x.value = e.pageX
        y.value = e.pageY
    }
    onMounted(()=>{
        
    })
}