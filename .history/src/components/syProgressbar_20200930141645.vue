<template>
  <div class="slot">
    <div><slot name="title"></slot></div>
    <div><slot name="text"></slot></div>
  </div>
  <div class="all">
    <!-- 有动画 -->
    <div
      v-if="isAnimate"
      class="bar"
      :style="`
        width: ${percentage1}%;
        height: ${strokeWidth}px;
        background-color:${bgColor};
        transition-duration: ${duration}s;
        transition-property: all;
      `"
    >
      <div v-if="textInside && percentage" style="margin-right: 8px">
        {{ percentage }}%
      </div>
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
      <div v-if="textInside && percentage" style="margin-right: 8px">
        {{ percentage }}%
      </div>
    </div>
    <div v-if="percentage1===100"> <img :src="@/im" alt=""></div>
    <div></div>
  </div>
</template>

<script lang='ts'>
import {
  defineComponent,
  reactive,
  toRefs,
  SetupContext,
  onMounted,
} from "vue";
interface Data {
  percentage1: number;
}
export default defineComponent({
  name: "sy-Progressbar",
  props: {
    percentage: {
      type: Number,
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
      default: 4,
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
      percentage1: 0,
    });
    onMounted(() => {
      setTimeout(() => {
        if (props.percentage) {
          data.percentage1 = props.percentage;
        }
      }, 0.1);
    });
    return {
      ...toRefs(data),
    };
  },
});
</script>

<style scoped lang='scss'>
.all {
  width: 100%;
  background-color: #e4e7ed;
  border-radius: 100px;
  box-sizing: border-box;
  display: flex;
}
.bar {
  background: rgb(64, 158, 255);
  border-radius: 100px;
  justify-content: flex-end;
  display: flex;
  box-sizing: border-box;
  align-items: center;
  width: 0;
  color: white;
}
.slot {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
</style>