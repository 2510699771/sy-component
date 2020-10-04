import Child from '@/components/child.vue'
import {App} from "vue"

//定义借口
interface GlobalComponents {
    install: (app:App) =>void
}

//定义数组，装所有引进来的组件