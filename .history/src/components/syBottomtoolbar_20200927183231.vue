<template>
  <div class="all" :style="{height:height+'px'}">
    <div><slot name="left"></slot></div>
    <div><slot name="right"></slot></div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
interface Data {}
export default defineComponent({
  name: "sy-Bottomtoolbar",
  props: {
    height:{
      type:num
    }
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
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9;
  width: 100%;
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