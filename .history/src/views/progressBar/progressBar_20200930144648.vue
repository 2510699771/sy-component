<template>
  <div style="width: 75%">
    <br />
    <h3>默认</h3>
    <sy-Progressbar v-model:percentage="percentage"> </sy-Progressbar>
    <br />
    <h3>高度可设置</h3>
    <br />
    <sy-Progressbar
      v-model:percentage="percentage"
      v-model:strokeWidth="strokeWidth"
    >
    </sy-Progressbar>
    <br />
    <h3>颜色可设置</h3>
    <br />
    <sy-Progressbar
      v-model:percentage="percentage"
      v-model:strokeWidth="strokeWidth"
      v-model:bgColor="bgColor"
    >
    </sy-Progressbar>
    <br />
    <h3>内容可关联</h3>
    <br />
    <sy-Progressbar
      v-model:percentage="percentage"
      v-model:strokeWidth="strokeWidth"
      v-model:bgColor="bgColor"
      v-model:textInside="textInside"
    >
    </sy-Progressbar>
    <br />
    <h3>100%后可展示完成的图标</h3>
    <br />
    <sy-Progressbar
      v-model:percentage="percentage1"
      v-model:strokeWidth="strokeWidth"
      v-model:bgColor="bgColor"
      v-model:textInside="textInside"
    >
    </sy-Progressbar>
    <br />
    <h3>带有动画效果</h3>
    <br />
    <sy-Progressbar
      v-model:percentage="percentage"
      v-model:textInside="textInside"
      v-model:strokeWidth="strokeWidth"
      v-model:bgColor="bgColor"
      v-model:isAnimate="isAnimate"
      v-model:duration="duration"
    >
    </sy-Progressbar>
    <br>
    <sy-Progressbar
      v-model:percentage="percentage1"
      v-model:textInside="textInside"
      v-model:strokeWidth="strokeWidth"
      v-model:bgColor="bgColor1"
      v-model:isAnimate="isAnimate"
      v-model:duration="duration"
    >
    </sy-Progressbar>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
interface Data {
  percentage: number;
  percentage1: number;
  textInside: boolean;
  strokeWidth: string | number;
  bgColor: string;
  bgColor1: string;
  isAnimate: boolean;
  duration: number;
  showicon: boolean;
}
export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup(props, ctx: SetupContext) {
    let data: Data = reactive<Data>({
      percentage: 50, // percentage: 进度条的值,数字类型
      percentage1: 100, // percentage: 进度条的值,数字类型
      textInside: true, // textInside: 是否内联显示数据,布尔类型,默认false
      strokeWidth: 20, // strokeWidth: 进度条高度,字符串或数字类型,默认为6
      bgColor: "green", // bgColor: 背景颜色,字符串类型,默认#409eff
      isAnimate: true, // isAnimate: 是否有动画,默认false
      duration: 5, // duration: 动画时长,数字类型,默认4s
      bgColor1: "red",
      showicon: true,
    });
    return {
      ...toRefs(data),
    };
  },
});
</script>

<style scoped lang='scss'>
</style>