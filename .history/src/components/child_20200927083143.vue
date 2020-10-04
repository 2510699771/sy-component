<template>
  <div>12313131231</div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
interface Data {}
export default defineComponent({
  name: "child",
  props: {},
  components: {},
  setup(props, ctx: SetupContext) {
    let data: Data = reactive<Data>({});
    console.log(ctx);
    
    return {
      ...toRefs(data),
    };
  },
});
</script>

<style scoped lang='scss'>
</style>