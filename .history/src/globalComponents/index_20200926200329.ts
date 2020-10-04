import Child from '@/components/child.vue'  //把所有要注册的组件引入
import { App, Component } from "vue"

//定义借口
interface GlobalComponents {
    install: (app: App) => void
}

//定义数组，装所有引进来的组件
const componentsArr: Component[] = []  //类型为vue中引入的Component的数组 