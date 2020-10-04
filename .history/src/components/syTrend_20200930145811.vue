<template>
  <div class="all">
    <slot name="text"></slot>
    <div
      :class="direction === 'up' ? 'up_green' : 'down_red'"
      v-if="reverse === true"
    ></div>
    <div
      :class="direction === 'up' ? 'up_red' : 'down_green'"
      v-if="reverse === false"
    ></div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
interface Data {}
export default defineComponent({
  name: "sy-Trend",
  props: {
    direction: {
      type: Object,
    },
    reverse: {
      type: Boolean,
      default: false,
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
.up_red {
  margin-left: 10px;
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-bottom: 10px solid red;
}
.up_green {
  margin-left: 10px;
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-bottom: 10px solid green;
}
.down_green {
  margin-left: 10px;
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-top: 10px solid green;
}
.down_red {
  margin-left: 10px;
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-top: 10px solid red;
}
.all {
  display: flex;
  align-items: center;
}
</style>