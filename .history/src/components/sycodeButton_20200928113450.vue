<template>
  <button @click="start" style="min-width: 80px; padding: 0 10px" class="btn">
    {{ time }}
  </button>
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
      time: 10,
    });
    let start = () => {
      let timer = setInterval(() => {
        data.time--;
        if (data.time === 0) {
          clearInterval(timer);
        }
      }, 1000);
    };
    return {
      ...toRefs(data),
      start,
    };
  },
});
</script>

<style scoped lang='scss'>
.btn :hover {
  color: red;
}
</style>