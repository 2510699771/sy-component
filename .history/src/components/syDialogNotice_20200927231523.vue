<template>
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
    <div class="tip bottom">bottom1111111</div>
    <div class="wsy"></div>
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
  border: 1px solid red;
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
  align-items: center;
  position: absolute;
  background-color: white;
  max-width: 30vw;
  min-width: 5vw;
  padding: 0 10px;
  height: 35px;
  line-height: 43px;
  color: black;
  text-align: center;
  border-radius: 10px;
  font-family: sans-serif;
  box-shadow: 0px 0px 2px rgb(196, 196, 196);
  right: -520%;
  
  z-index: 9;
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
.wsy{
    width: 100px;
    height: 100p;
}
</style>