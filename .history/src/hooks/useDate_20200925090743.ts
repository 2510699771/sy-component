import dayjs from 'dayjs'
import { onMounted, onUnmounted, ref } from 'vue'
export const useDate = () => {
    let date = ref(dayjs().format('YYYY-MM-DD-HH-mm-ss'))  //拿到当前时间(根据自己想要的格式)，如果数据要导出使用需要用到ref包住然后return
    let time = null  //用作定时器
    onMounted(() => {      //当页面加载时开始执行内容
        time = setInterval(() => {
            date.value = dayjs().format('YYYY-MM-DD-HH-mm-ss')
        }, 1000)
    })
    onUnmounted(()=>{
        
    })
    return {
        date
    }
}