<template>
  <div>
    <sy-Bottomtoolbar>
      <template v-slot:left>132</template>
      <template v-slot:right
        >
        <div>1</div>
        <div>1</div>
        <a-button type="primary">确定 </a-button>
        <a-button>取消</a-button></template
      >
    </sy-Bottomtoolbar>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
interface Data {}
export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup(props, ctx: SetupContext) {
    let data: Data = reactive<Data>({});
    return {
      ...toRefs(data),
    };
  },
});
</script>

<style scoped lang='scss'>
</style>