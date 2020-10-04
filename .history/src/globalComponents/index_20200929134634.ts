import Child from '@/components/child.vue'  //把所有要注册的组件引入
import PictureMaskno from '@/components/pictureMaskno.vue'
import ReviewPicturen from '@/components/reviewPicturen.vue'
import ReviewPicture from '@/components/reviewPicture.vue'
import syTrend from '@/components/syTrend.vue'
import syBottomtoolbar from '@/components/syBottomtoolbar.vue'
import syNotice from '@/components/syNotice.vue'
import syIframe from '@/components/syIframe.vue'
import syProgressbar from '@/components/syProgressbar.vue'
import sycodeButton from '@/components/sycodeButton.vue'
import syqrCode from '@/components/syqrCode.vue'
import { App, Component } from "vue"

//定义借口
interface GlobalComponents {
    install: (app: App) => void
}

//定义数组，装所有引进来的组件
const componentsArr: Component[] = []  //类型为vue中引入的Component的数组 先初始化为一个空数组
componentsArr.push(Child) //吧要注册的组件push进去
componentsArr.push(PictureMaskno) //吧要注册的组件push进去
componentsArr.push(ReviewPicture) //吧要注册的组件push进去
componentsArr.push(ReviewPicturen) //吧要注册的组件push进去
componentsArr.push(syTrend) //吧要注册的组件push进去
componentsArr.push(syBottomtoolbar) //吧要注册的组件push进去
componentsArr.push(syNotice) //吧要注册的组件push进去
componentsArr.push(syDialogNotice) //吧要注册的组件push进去
componentsArr.push(syIframe) //吧要注册的组件push进去
componentsArr.push(sycodeButton) //吧要注册的组件push进去
componentsArr.push(syqrCode) //吧要注册的组件push进去
componentsArr.push(syProgressbar) //吧要注册的组件push进去


const aicomponents: GlobalComponents = {
    install(app) {
        componentsArr.map((item: Component) => {  //循环注册组件
            app.component(item.name!, item)
        })
    }
}
export default aicomponents //导出