<template>
  <div class="all">
    <a-button type="primary" @click="open"> 打开内嵌网站 </a-button>
    <a-button @click="close">关闭内嵌网站</a-button>
    <sy-Iframe style="width: 100%" v-model:url="url"></sy-Iframe>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
interface Data {
  url: string;
  show:boolean
}
export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup(props, ctx: SetupContext) {
    let data: Data = reactive<Data>({
      url: "https://www.baidu.com/",
      show:false
    });
    let open = () => {
      data.show = true;
    };
    let close = () => {
      data.url = "";
    };
    return {
      ...toRefs(data),
      open,
      close,
    };
  },
});
</script>

<style scoped lang='scss'>
.all {
  padding: 10px, 0;
}
</style>