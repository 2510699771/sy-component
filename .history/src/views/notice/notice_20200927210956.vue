<template>
  <div>
    <h4>普通通知</h4>
    <br />
    <div style="margin-left: 20px">
      <sy-Notice v-model:num="num"></sy-Notice>
    </div>
    <br />
    <h3>消息超过99</h3>
    <div style="margin-left: 20px">
      <sy-Notice v-model:num="num1"></sy-Notice>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
interface Data {
  num: number;
  num1: number;
}
export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup(props, ctx: SetupContext) {
    let data: Data = reactive<Data>({
      num: 99,
      num1: 10,
    });
    return {
      ...toRefs(data),
    };
  },
});
</script>

<style scoped lang='scss'>
</style>