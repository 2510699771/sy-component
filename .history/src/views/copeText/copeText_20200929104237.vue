<template>
  <div>
    <a-input v-model:value="value" placeholder="Basic usage" />
    <a-button @click="cope">21313</a-button>
  </div>
</template>

<script lang='ts'>
import {} frpm '@/hook/useCopyte'
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
      const input = document.createElement("input");
      document.body.appendChild(input);
      input.setAttribute("value", data.value);
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