<template>
  <div>
    <sy-Bottomtoolbar v-model="">
      <template v-slot:left>132</template>
      <template v-slot:right>789</template>
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