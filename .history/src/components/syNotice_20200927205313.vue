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
  .num{
      border-radius: 50%;
      background-color: red;
      display: flex;
      ju
  }
}
</style>