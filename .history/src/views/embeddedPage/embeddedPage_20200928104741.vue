<template>
  <div class="all">
    <a-button type="primary"> 打开内嵌网站 </a-button>
    <a-button>关闭内嵌网站</a-button>
    <sy-Iframe v-model:url="url"></sy-Iframe>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
interface Data {
  url: string;
}
export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup(props, ctx: SetupContext) {
    let data: Data = reactive<Data>({
      url: "https://www.baidu.com/",
    });
    return {
      ...toRefs(data),
    };
  },
});
</script>

<style scoped lang='scss'>
.all {
  padding: 10px, 0;
}
</style>