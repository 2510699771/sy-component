<template>
  <div class="all">
    <child v-model:config="config"></child>
    <h4 @click="toView">点击查看图片</h4>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
interface Data {
  config: configItem;
  show: boolean;
}
interface configItem {
  url: string;
  widt: number;
  heigh: number;
}
export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup(props, ctx: SetupContext) {
    let data: Data = reactive<Data>({
      config: {
        url: require("@/images/pic.jpg"),
        widt: 100,
        heigh: 100,
      },
      show: false,
    });
    let toView=()=>{
      
    }
    return {
      ...toRefs(data),
    };
  },
});
</script>

<style scoped lang='scss'>
</style>