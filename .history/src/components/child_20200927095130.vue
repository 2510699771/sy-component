<template>
  <div class="all">
    <img
      :src="config.url"
      :style="{ width: config.widt + `px`, height: config.heigh + `px` }"
    />

    <div class="icons">
      <div @click="amplification"><PlusCircleOutlined /></div>
      <div><img src="@" alt=""></div>
      <div><UndoOutlined /></div>
      <div><RedoOutlined /></div>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
interface Data {}
export default defineComponent({
  name: "child",
  props: {
    config: {
      type: Object,
      default: {},
    },
  },
  components: {},
  setup(props, ctx: SetupContext) {
    let data: Data = reactive<Data>({});
ctx.emit
    return {
      ...toRefs(data),
    };
  },
});
</script>

<style scoped lang='scss'>
.all {
  position: fixed;
  position: absolute; // 绝对路径
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 99999;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .icons {
    margin-top: 20px;
    display: flex;
    justify-content: space-around;
    width: 250px;
    border-radius: 30px;
    background-color: rgba(0, 0, 0, 0.3);
    align-items: center;
    height: 35px;
  }
}
</style>