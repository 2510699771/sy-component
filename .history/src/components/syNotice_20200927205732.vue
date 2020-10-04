<template>
  <div class="all">
    <div class="num"></div>
    <img src="../images/notice.png" />
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
interface Data {}
export default defineComponent({
  name: "sy-Notice",
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
  position: relative;
  border: 1px solid black;
  height: 30px;
  wid
  .num {
    border-radius: 50%;
    background-color: red;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 20px;
    height: 20px;
    right: 5px;
    top: -5px;
  }
}
</style>