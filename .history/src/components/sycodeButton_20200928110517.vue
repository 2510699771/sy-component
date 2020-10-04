<template>
  <button @click="start">12312313</button>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
interface Data {
  time
}
export default defineComponent({
  name: "sy-codeButton",
  props: {},
  components: {},
  setup(props, ctx: SetupContext) {
    let data: Data = reactive<Data>({
      time:60
    });
    let start = () => {
     let timer=setInterval(() => {
        time--;
      }, 1000);
    };
    return {
      ...toRefs(data),
    };
  },
});
</script>

<style scoped lang='scss'>
</style>