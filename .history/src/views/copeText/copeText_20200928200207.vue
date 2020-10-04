<template>
  <div>
    <a-input v-model:value="value" placeholder="Basic usage" />
    <button></button>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
interface Data {
  value: string;
}
export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup(props, ctx: SetupContext) {
    let data: Data = reactive<Data>({
      value: "",
    });
    let cope = () => {
      let clipboard: = new clipboard(".copy");
      clipboard.on("success", function () {});
      clipboard.on("error", function () {});
    };
    return {
      ...toRefs(data),
    };
  },
});
</script>

<style scoped lang='scss'>
</style>