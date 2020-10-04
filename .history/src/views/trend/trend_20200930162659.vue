<template>
  <br />
  <div style="margin-left: 10px">
    <h2>趋势组件</h2>
    <a-divider>正常颜色</a-divider>
    <div style="display: flex">
      <sy-Trend v-model:direction="options.direction">
        <template style="margin-right: 50px" v-slot:text
          ><div>营业额</div></template
        >
      </sy-Trend>
      <span>5%</span>

      <sy-Trend
        v-model:direction="options1.direction"
        style="margin-left: 20px"
      >
        <template v-slot:text>营业额 </template>
      </sy-Trend>
      <span>5%</span>
    </div>
    <a-divider>颜色反转</a-divider>
    <div style="display: flex">
      <sy-Trend v-model:direction="options.direction" v-model:reverse="reverse">
        <template v-slot:text>营业额</template>
      </sy-Trend>
      <span>5%</span>

      <sy-Trend
        v-model:direction="options1.direction"
        v-model:reverse="reverse"
        style="margin-left: 20px"
      >
        <template v-slot:text>营业额 </template>
      </sy-Trend>
      <span>5%</span>
    </div>
  </div>
  <br />
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
interface Data {
  options: optionsitem;
  options1: optionsitem;
  options2: optionsitem;
  reverse: boolean;
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
      options2: {
        direction: "down",
      },
      reverse: true,
    });
    return {
      ...toRefs(data),
    };
  },
});
</script>

<style scoped lang='scss'>
</style>