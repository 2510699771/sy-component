<template>
  <div class="all">
    <div><slot></slot></div>
    <div>
      <button style="height:50px;display:flex;">取消</button><button>确定</button>
      </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
interface Data {}
export default defineComponent({
  name: "sy-Bottomtoolbar",
  props: {},
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
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9;
  width: 100%;
  height: 66px;
  padding: 0 24px;
  line-height: 56px;
  background: #fff;
  border-top: 1px solid #e8eaec;
  box-shadow: 0 -1px 2px rgba(0, 0, 0, 0.03);
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>