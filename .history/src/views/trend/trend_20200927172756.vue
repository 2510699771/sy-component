<template>
  <div>
    <sy-Trend v-model:options="options">
      <template v-slot:text>13123</template>
    </sy-Trend>
    
    <sy-Trend v-model:options="options">
      <template v-slot:text>13123</template>
    </sy-Trend>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
interface Data {
  options: optionsitem;
  options1: optionsitem;
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
      options1: {
        direction: "down",
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