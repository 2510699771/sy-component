<template>
  <br />
  <sy-editText v-model:text="text" @ok="ok"></sy-editText>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
interface Data {
  text: string;
}
export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup(props, ctx: SetupContext) {
    let data: Data = reactive<Data>({
      text: "1313",
    });
    let goto = () => {
      console.log("确定");
    };
    return {
      ...toRefs(data),
      ok,
    };
  },
});
</script>

<style scoped lang='scss'>
</style>