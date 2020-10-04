<template>
  <div>
    <sy-Bottomtoolbar>
      <template v-slot:left>132</template>
      <template v-slot:right
        ><a-button type="primary"> </a-button>
        <a-button>Default</a-button></template
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