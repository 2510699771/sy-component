<template>
  <div style="width:100%"
  height:100%>
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
.iframe {
  width: 100%;
  height: 100%;
}
</style>