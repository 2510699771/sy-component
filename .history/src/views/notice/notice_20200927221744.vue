<template>
  <div>
    <br />
    <h3>普通通知</h3>
    <div style="margin-left: 20px">
      <sy-Notice v-model:num="num"></sy-Notice>
    </div>
    <br />
    <h3>消息超过99</h3>
    <div style="margin-left: 20px">
      <sy-Notice v-model:num="num1"></sy-Notice>
    </div>
    <br />
    <h3>默认弹出菜单</h3>
    <div style="margin-left: 20px">
      <sy-DialogNotice v-model:num="num1"></sy-DialogNotice>
    </div>
  </div>
  <div class="tip top">top</div>
  <div class="tip bottom">bottom</div>
  <div class="tip left">left</div>
  <div class="tip right">right</div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
interface Data {
  num: number;
  num1: number;
}
export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup(props, ctx: SetupContext) {
    let data: Data = reactive<Data>({
      num: 99,
      num1: 10,
    });
    return {
      ...toRefs(data),
    };
  },
});
</script>

<style scoped lang='scss'>
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
  bor
  font-family: sans-serif;
}
.tip:after {
  content: "";
  position: absolute;
  width: 0;
  height: 0;
  border: 8px solid;
}
.top:after {
  border-bottom-color: deepskyblue;
  left: 50%;
  bottom: 100%;
  margin-left: -15px;
}
.right:after {
  border-left-color: deepskyblue;
  left: 100%;
  top: 50%;
  margin-top: -7px;
}
.bottom:after {
  border-top-color: deepskyblue;
  top: 100%;
  left: 50%;
  margin-left: -15px;
}
.left:after {
  border-right-color: deepskyblue;
  top: 50%;
  right: 100%;
  margin-top: -9px;
}
</style>