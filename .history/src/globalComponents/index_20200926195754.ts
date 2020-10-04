import Child from '@/components/child.vue'
import {App} from "vue"

//定义借口
interface GlobalComponents {
    install: (app:App) =>void{  }
}