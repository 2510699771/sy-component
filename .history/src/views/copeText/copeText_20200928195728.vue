<template>
 <div>
   <a-input></a-input>
<button></button>
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
})
let cope=()
return {
...toRefs(data),
}
},
 })
</script>

<style scoped lang='scss'>

</style>