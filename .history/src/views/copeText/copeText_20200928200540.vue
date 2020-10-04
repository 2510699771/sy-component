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
     let  document.execCommand("Copy");
    };
    return {
      ...toRefs(data),
    };
  },
});
</script>

<style scoped lang='scss'>
</style>