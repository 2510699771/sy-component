<template>
  <div>
    <br />
    <h3>普通通知</h3>
    <div style="margin-left: 20px">
      <sy-Notice v-model:num="num"></sy-Notice>
    </div>
    <br />
    <h3>消息超过99</h3>
    <div style="margin-left: 20px">
      <sy-Notice v-model:num="num1"></sy-Notice>
    </div>
    <br />
    <h3>默认弹出菜单</h3>
    <div style="margin-left: 100px">
      <sy-DialogNotice v-model:num="num1" v-model:num="num1">
        <template v-slot:text>1321231</template>
      </sy-DialogNotice>
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
      direction:'top',
      direction:'top',
      
    });
    return {
      ...toRefs(data),
    };
  },
});
</script>

<style scoped lang='scss'>
</style>