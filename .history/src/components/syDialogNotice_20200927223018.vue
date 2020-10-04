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
  </div>
  <div class="tip bottom">bottom</div>
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
  position: relative;
  background-color: deepskyblue;
  margin: 20px auto;
  width: 246px;
  height: 43px;
  line-height: 43px;
  color: white;
  text-align: center;
  border-radius: 10px;
  border: 1px solid red;
  font-family: sans-serif;
}
.tip:after {
  content: "";
  position: absolute;
  width: 0;
  height: 0;
 /*  border: 8px solid; */
 /*   border-top-color: deepskyblue; */
  top: 100%;
  left: 50%;
  margin-left: -15px;
 /*  background: rgba(0, 0, 0, 0); */
 border-top: 8px solid deepskyblue;
 border-top: 1px solid deepskyblue;
}

</style>