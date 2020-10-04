<template>
  <br />
  <sy-editText v-model:text="text" @ok="ok" @cancel="cancel"></sy-editText>
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
    let oka = (val: string) => {
      console.log("确定");
      console.log(val);
    };
    let cancel1 = (val: string) => {
      console.log("取消");
      console.log(val);
    };
    return {
      ...toRefs(data),
      oka,
      cancel1,
    };
  },
});
</script>

<style scoped lang='scss'>
</style>