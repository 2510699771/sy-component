<template>
  <h2>趋势组件</h2>
  <div style="display: flex">
    <sy-Trend v-model:options="options">
      <template v-slot:text>营业额</template>
    </sy-Trend>
    <span>5%</span>

    <sy-Trend v-model:options="options1" style="margin-left: 20px">
      <template v-slot:text>营业额 </template>
    </sy-Trend>
    <span>5%</span>
  </div>
  <a-divider >正常颜色</a-divider>
  <a-divider>Text</a-divider>
  <div style="display: flex">
    <sy-Trend v-model:options="options">
      <template v-slot:text>营业额</template>
    </sy-Trend>
    <span>5%</span>

    <sy-Trend v-model:options="options1" style="margin-left: 20px">
      <template v-slot:text>营业额 </template>
    </sy-Trend>
    <span>5%</span>
  </div>
  <a-divider>颜色反转</a-divider>
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