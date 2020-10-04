<template>
 <div>
<sy-codeButton></sy-codeButton>
 </div>
</template>

<script lang='ts'>
import {defineComponent, reactive, toRefs, SetupContext} from 'vue'
interface Data {
}
 export default defineComponent({
   name: '',
   props: {
   },
   components: {

   },
setup(props, ctx: SetupContext){

let data: Data = reactive<Data>({
  time:10,
  text:'重新发送'
  text:'重新发送'

})
return {
...toRefs(data),
}
},
 })
</script>

<style scoped lang='scss'>

</style>