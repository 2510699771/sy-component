<template>
  <div>
    <sy-Trend v-model:options="options">
      <template v-slot:text></template>
    </sy-Trend>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
interface Data {
  options: optionsitem;
}
interface optionsitem {
  direction: string;
}
export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup(props, ctx: SetupContext) {
    let data: Data = reactive<Data>({
      options: {
        direction: "up",
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