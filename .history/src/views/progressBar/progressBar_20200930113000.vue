<template>
  <div>
    <sy-Progressbar
      v-model:percentage="percentage"
      v-model:textInside="textInside"
      v-model:strokeWidth="strokeWidth"
      v-model:bgColor="bgColor"
      v-model:isAnimate="isAnimate"
      v-model:duration="duration"
    >
      <template v-slot:title><div>title</div></template>
      <template v-slot:text><div>text</div> </template>
    </sy-Progressbar>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
interface Data {
  percentage: number;
  textInside: boolean;
  strokeWidth: string | number;
  bgColor: string;
  isAnimate: boolean;
  duration: number;
}
export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup(props, ctx: SetupContext) {
    let data: Data = reactive<Data>({
      percentage: 90,  // percentage: 进度条的值,数字类型
      textInside: true,
      strokeWidth: 20,
      bgColor: "blue", // bgColor: 背景颜色,字符串类型,默认#409eff
      isAnimate: true,// isAnimate: 是否有动画,默认false
      duration: 5,// duration: 动画时长,数字类型,默认4s
      // percentage: 进度条的值,数字类型
      // textInside: 是否内联显示数据,布尔类型,默认false
     
      
      
      
    });
    return {
      ...toRefs(data),
    };
  },
});
</script>

<style scoped lang='scss'>
</style>