<template>
  <div class="all">
    <!-- 有动画 -->
    <div
      v-if="isAnimate"
      class="bar"
      :style="`
        width: ${percentage}%;
        height: ${strokeWidth}px;
        background-color:${bgColor};
        transition-duration: ${time}s;
        transition-property: all;
      `"
    >
      <div v-if="textInside" style="margin-right: 8px">{{ percentage }}%</div>
    </div>
    <!-- 无动画 -->
    <div
      v-else
      class="bar"
      :style="{
        width: percentage + '%',
        height: String(strokeWidth) + 'px',
        'background-color': bgColor,
      }"
    >
      <div v-if="textInside" style="margin-right: 8px">{{ percentage }}%</div>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, SetupContext, onMounted } from "vue";
interface Data {
  time: number;
}
export default defineComponent({
  name: "sy-Progressbar",
  props: {
    percentage: {
      type: Number,
      default: 0,
    },
    textInside: {
      type: Boolean,
      default: false,
    },
    strokeWidth: {
      type: Number || String,
      default: 6,
    },
    bgColor: {
      type: String,
      default: "#409eff",
    },
    isAnimate: {
      type: Boolean,
      default: false,
    },
    duration: {
      type: Number,
      default: 6,
    },
  },
  components: {},
  setup(props, ctx: SetupContext) {
    let data: Data = reactive<Data>({
      // percentage: 进度条的值,数字类型
      // textInside: 是否内联显示数据,布尔类型,默认false
      // strokeWidth: 进度条高度,字符串或数字类型,默认为6
      // duration: 动画时长,数字类型,默认2000
      // isAnimate: 是否有动画,默认false
      // bgColor: 背景颜色,字符串类型,默认#409eff
      // noData: 是否不显示数据,默认为false
      // lineData: 是否自定义显示内容,默认false
      time: 5,
    });
    onMounted(()=>{
        data.percentage1=props.percentage
    })
    return {
      ...toRefs(data),
    };
  },
});
</script>

<style scoped lang='scss'>
.all {
  width: 100%;
  background: #ebeef5;
  border-radius: 100px;
  box-sizing: border-box;
  border: 1px solid red;
}
.bar {
  background: rgb(64, 158, 255);
  border-radius: 100px;
  justify-content: flex-end;
  display: flex;
  box-sizing: border-box;
  align-items: center;
  width: 0;
  transition: all 5s;
}
.bar:hover {
  width: 200px !important;
  transition: all 2s;
}
</style>