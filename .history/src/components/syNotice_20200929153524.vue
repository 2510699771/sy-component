<template>
  <!-- 上 -->
  <div class="all" style="border: 1px solid red">
    <div
      class="tip bottom"
      v-if="direction === 'top' && show === true && bounced === true"
      style="bottom: 48px; left: -65px"
    >
      <slot name="text"></slot>
    </div>
    <!-- 左 -->
    <div
      class="tip2 bottom"
      v-if="direction === 'left' && show === true && bounced === true"
      style="top: -5px; left: -180px"
    >
      <slot name="text"></slot>
    </div>
    <!-- 右 -->
    <div
      class="tip3 bottom"
      v-if="direction === 'right' && show === true && bounced === true"
      style="top: -5px; left: 40px"
    >
      <slot name="text"></slot>
    </div>
    <div
      class="num"
      style="
        border-radius: 50%;
        width: 20px;
        height: 20px;
        right: 12px;
        top: -10px;
      "
      v-if="num < 99 && num >= 0"
      @mousemove="over"
    >
      {{ num }}
    </div>
    <div
      class="num"
      style="
        border-radius: 20px;
        width: 35px;
        height: 20px;
        right: -3px;
        top: -10px;
      "
      v-if="num >= 99"
    >
      99+
    </div>
    <img
      src="../images/notice.png"
      width="22"
      style="cursor: pointer"
      @click="open"
    />
    <!-- 下 -->
    <div
      class="tip1 bottom"
      v-if="direction === 'bottom' && show === true && bounced === true"
      style="bottom: -35px; left: -68px"
    >
      <slot name="text"></slot>
    </div>
  </div>
  <div v-if="prompt" class="prompt" :style="`top:${y}px;left:${x}px`">
    {{ num }}
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
interface Data {
  show: boolean;
  x: number;
  y: number;
  prompt: boolean;
}
export default defineComponent({
  name: "sy-Notice",
  props: {
    num: {
      type: Number,
      default: 0,
    },
    direction: {
      type: String,
      default: "top",
    },
    bounced: {
      type: Boolean,
      default: false,
    },
  },
  components: {},
  setup(props, ctx: SetupContext) {
    let data: Data = reactive<Data>({
      show: false,
      x: 0,
      y: 0,
      prompt: false,
    });
    let over = (e: any) => {
      data.x = e.pageX;
      data.y = e.pageY + 25;
      data.prompt = true;
      console.log(data.x, data.y);
    };
    let open = () => {
      console.log(document);

      if (data.show === true) {
        data.show = false;
      } else {
        data.show = true;
      }
    };
    return {
      ...toRefs(data),
      open,
      over,
    };
  },
});
</script>

<style scoped lang='scss'>
.all {
  position: relative;
  height: 30px;
  width: 40px;
  z-index: 99;
  .num {
    cursor: pointer;
    background-color: red;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    color: white;
    font-size: 12px;
  }
}
.tip,
.tip1,
.tip2,
.tip3 {
  display: flex;
  justify-content: center;
  position: absolute;
  align-items: center;
  background-color: white;
  padding: 0 10px;
  width: 170px;
  line-height: 30px;
  color: black;
  text-align: center;
  border-radius: 5px;
  font-family: sans-serif;
  box-shadow: 0px 0px 2px rgb(196, 196, 196);
  z-index: 999;
  word-wrap: break-word;
  word-break: break-all;
}
.tip:after {
  content: "";
  position: absolute;
  width: 0;
  height: 0;
  top: 100%;
  left: 50%;
  margin-left: -15px;
  border-top: 8px solid white;
  border-bottom: 8px solid rgba(255, 255, 255, 0);
  border-left: 8px solid rgba(255, 255, 255, 0);
  border-right: 8px solid rgba(255, 255, 255, 0);
}
.tip1:after {
  content: "";
  position: absolute;
  width: 0;
  height: 0;
  bottom: 100%;
  left: 50%;
  margin-left: -15px;
  border-top: 8px solid rgba(255, 255, 255, 0);
  border-bottom: 8px solid rgb(255, 255, 255);
  border-left: 8px solid rgba(255, 255, 255, 0);
  border-right: 8px solid rgba(255, 255, 255, 0);
}
.tip2:after {
  content: "";
  position: absolute;
  width: 0;
  height: 0;
  left: 100%;
  top: 8px;
  border-top: 8px solid rgba(255, 255, 255, 0);
  border-bottom: 8px solid rgba(255, 255, 255, 0);
  border-left: 8px solid rgb(255, 255, 255);
  border-right: 8px solid rgba(255, 255, 255, 0);
}
.tip3:after {
  content: "";
  position: absolute;
  width: 0;
  height: 0;
  right: 100%;
  top: 8px;
  border-top: 8px solid rgba(255, 255, 255, 0);
  border-bottom: 8px solid rgba(255, 255, 255, 0);
  border-right: 8px solid rgb(255, 255, 255);
  border-left: 8px solid rgba(255, 255, 255, 0);
}
.prompt {
  min-width: 20px;
  border: 1px solid rgb(100, 100, 100);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 5;
}
</style>