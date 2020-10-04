<template>
  <div class="tip bottom">bottom11111112222222222222222222222222222222222</div>
  <div class="all">
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
    <img src="../images/notice.png" width="22" />
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
interface Data {}
export default defineComponent({
  name: "sy-DialogNotice",
  props: {
    num: {
      type: Number,
      default: 0,
    },
  },
  components: {},
  setup(props, ctx: SetupContext) {
    let data: Data = reactive<Data>({});
    return {
      ...toRefs(data),
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
.tip {
  display: flex;
  justify-content: center;
  position: relative;
  align-items: center;
  background-color: white;
  padding: 0 10px;
  width: 170px;
  line-height: 43px;
  color: black;
  text-align: center;
  border-radius: 10px;
  font-family: sans-serif;
  box-shadow: 0px 0px 2px rgb(196, 196, 196);
  top: -15px;
  left: -65px;
  z-index: 999;
  word-wrap: break-word;
  overflow: hidden;
  
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
</style>