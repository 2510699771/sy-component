<template>
  <div>
    <sy-Button></sy-Button>
    <button>121231</button>
  </div>
</template>

<script lang='ts'>
import {} Form
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
import { Form } from 'ant-design-vue';
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