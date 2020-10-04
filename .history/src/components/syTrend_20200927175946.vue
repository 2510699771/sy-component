<template>
  <div class="all">
    <slot name="text"></slot>
    <div
      :class="options.direction === 'up' ? 'up_green' : 'down_red'"
      v-if="options.reverse === true"
    ></div>
    <div
      :class="options.direction === 'up' ? 'up_red' : 'down_green'"
      v-if="options.reverse === false"
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
    direction:{
        type:String
    },
    reverse:{
        type:B
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