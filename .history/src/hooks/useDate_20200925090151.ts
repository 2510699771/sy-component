import dayjs from 'dayjs'
import { ref } from 'vue'
export const useDate = () => {
    let date = ref(dayjs().format('YYYY-MM-DD-HH-mm-ss'))  //拿到当前时间(根据自己想要的格式)，

}