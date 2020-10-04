<template>
  <button @click="start">{{ time }}</button>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
interface Data {
  time: number;
}
export default defineComponent({
  name: "sy-codeButton",
  props: {},
  components: {},
  setup(props, ctx: SetupContext) {
    let data: Data = reactive<Data>({
      time: 60,
    });
    let start = () => {
      let timer = setInterval(() => {
        data.time--;
      }, 1000);
      if (data.time === 0) {
        clearInterval("timer");
      }
    };
    return {
      ...toRefs(data),
    };
  },
});
</script>

<style scoped lang='scss'>
</style>