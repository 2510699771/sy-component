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
let cope=()=>{
   let clipboard = new this.clipboard(".copy");
     clipboard.on(‘success‘, function () {
       _this.$message({
                 message:‘复制成功!‘,
                 type:‘success‘
             })
     });
     clipboard.on(‘error‘, function () {
                _this.$message.error("复制失败!")
     });
}
return {
...toRefs(data),
}
},
 })
</script>

<style scoped lang='scss'>

</style>