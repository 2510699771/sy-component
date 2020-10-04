<template>
  <div class="all">
    <slot name="text"></slot>
    <div
      :class="up"
      v-if="options.direction === 'up' && options.reverse === true"
    ></div>
    <div
      class="down"
      v-if="options.direction === 'down' && options.reverse === false"
    ></div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
interface Data {}
export default defineComponent({
  name: "sy-Trend",
  props: {
    options: {
      type: Object,
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
.up {
  margin-left: 10px;
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-bottom: 10px solid red;
}
.down {
  margin-left: 10px;
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-top: 10px solid green;
}
.all {
  display: flex;
  align-items: center;
}
</style>