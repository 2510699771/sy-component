import dayjs from 'dayjs'
import { onMounted, ref } from 'vue'
export const useDate = () => {
    let date = ref(dayjs().format('YYYY-MM-DD-HH-mm-ss'))  //拿到当前时间(根据自己想要的格式)，如果数据要导出使用需要用到ref包住然后return
    let time = null  //用作定时器
    onMounted(() => {
        time = setInterval(() => {
date.value=day
        }, 1000)
    })
}