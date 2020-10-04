<template>
 <div>
1231313131
 </div>
</template>

<script lang='ts'>
import {defineComponent, reactive, toRefs, SetupContext, App,get} from 'vue'
interface Data {
}
 export default defineComponent({
   name: 'Child',
   props: {
   },
   components: {

   },
setup(props, ctx: SetupContext){

let data: Data = reactive<Data>({
})
const install=(app:App)=>{

}
return {
...toRefs(data),
}
},
 })
</script>

<style scoped lang='scss'>

</style>