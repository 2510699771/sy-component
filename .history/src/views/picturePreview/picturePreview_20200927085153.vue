<template>
  <div>
    <child config:config></child>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
interface Data {
  config:configItem
}
interface configItem{
  url:string,
  width:string,
  height:
}
export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup(props, ctx: SetupContext) {
    let data: Data = reactive<Data>({
      config: {
        url: "http://pic.netbian.com/tupian/26336.html",
        width: "100px",
        height: "100px",
      },
    });
    return {
      ...toRefs(data),
    };
  },
});
</script>

<style scoped lang='scss'>
</style>