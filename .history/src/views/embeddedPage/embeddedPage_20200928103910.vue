<template>
  <div style="padding: 20px">
    <iframe src="https://www.baidu.com/" class="iframe"></iframe>
    <sy-Iframe v-model=""></sy-Iframe>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
interface Data {
  url
}
export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup(props, ctx: SetupContext) {
    let data: Data = reactive<Data>({
      url:'https://www.baidu.com/'
    });
    return {
      ...toRefs(data),
    };
  },
});
</script>

<style scoped lang='scss'>
.iframe {
  width: 100%;
  height: 100%;
}
</style>