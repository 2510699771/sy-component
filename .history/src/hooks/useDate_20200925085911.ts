import dayjs from 'dayjs'
import {ref} from 'vue'
export const useDate = () => {
    let date = ref(dayjs().format('YYYY-MM-DD')
}