<template>
  <div>
    <a-input v-model:value="value" placeholder="Basic usage" />
    <a-button @click="cope">21313</a-button>
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
      console.log(document);
      const input = data.value;
      document(input;
      input.setAttribute("value", "这里可以写变量或者要复制的字符串内容");
      input.select();
      if (document.execCommand("copy")) {
        document.execCommand("copy");
      }
      document.body.removeChild(input);
      let a: any = document.execCommand("Copy");
      console.log(a);
    };
    return {
      ...toRefs(data),
      cope,
    };
  },
});
</script>

<style scoped lang='scss'>
</style>