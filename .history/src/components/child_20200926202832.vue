<template>
 <div>
1231313131
 </div>
</template>

<script lang='ts'>
import {defineComponent, reactive, toRefs, SetupContext} from 'vue'
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
const install=(app)
return {
...toRefs(data),
}
},
 })
</script>

<style scoped lang='scss'>

</style>