<template>
 <div>
   <br>
<sy-Notice v-model:num="num"></sy-Notice>
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
  num:
})
return {
...toRefs(data),
}
},
 })
</script>

<style scoped lang='scss'>

</style>