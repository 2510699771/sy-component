<template>
  <button @click="start">12312313</button>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
interface Data {}
export default defineComponent({
  name: "sy-codeButton",
  props: {},
  components: {},
  setup(props, ctx: SetupContext) {
    let data: Data = reactive<Data>({});
    let start = () => {
      setInterval()
    };
    return {
      ...toRefs(data),
    };
  },
});
</script>

<style scoped lang='scss'>
</style>