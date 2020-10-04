<template>
  <div class="all">
    <div
      class="tip bottom"
      v-if="direction === 'top' && show === true"
      style="bottom: 48px; left: -65px"
    >
      <slot name="text"></slot>
    </div>
    <div
      class="tip2 bottom"
      v-if="direction === 'left' && show === true"
      style="bottom: 48px; left: -65px"
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
    <div
      class="tip1 bottom"
      v-if="direction === 'bottom' && show === true"
      style="bottom: -15px; left: -68px"
    >
      <slot name="text"></slot>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
interface Data {
  show: boolean;
}
export default defineComponent({
  name: "sy-DialogNotice",
  props: {
    num: {
      type: Number,
      default: 0,
    },
    direction: {
      type: String,
      default: "top",
    },
  },
  components: {},
  setup(props, ctx: SetupContext) {
    let data: Data = reactive<Data>({
      show: false,
    });
    let open = () => {
      if (data.show === true) {
        data.show = false;
      } else {
        data.show = true;
      }
    };
    return {
      ...toRefs(data),
      open,
    };
  },
});
</script>

<style scoped lang='scss'>
.all {
  position: relative;
  height: 30px;
  width: 40px;
  z-index: 9;
  .num {
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
.tip2 {
  display: flex;
  justify-content: center;
  position: relative;
  align-items: center;
  background-color: white;
  padding: 0 10px;
  width: 170px;
  line-height: 30px;
  color: black;
  text-align: center;
  border-radius: 10px;
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
  left: 100%;
  top: 50%;
  margin-left: -15px;
  border-left: 8px solid rgba(119, 5, 5, 0);
  border-bottom: 8px solid rgb(138, 0, 0);
  border-top: 8px solid rgba(117, 0, 0, 0);
  border-right: 8px solid white;;
}
</style>