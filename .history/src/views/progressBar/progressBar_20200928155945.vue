<template>
  <div>
    <sy-Progressbar
      v-model:percentage="percentage"
      v-model:textInside="textInside"
      v-model:strokeWidth="strokeWidth"
      v-model:bgColor="bgColor"
      v-model:isAnimate="isAnimate"
      v-model:duration="duration"
    ></sy-Progressbar>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
interface Data {
  percentage: number;
  textInside: boolean;
  strokeWidth: string | number;
  bgColor: string;
  isAnimate: boolean;
  duration: boolean;
}
export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup(props, ctx: SetupContext) {
    let data: Data = reactive<Data>({
      percentage: 90,
      textInside: true,
      strokeWidth: 50,
      bgColor: "red",
      isAnimate: true,
      duration: 4000,
    });
    return {
      ...toRefs(data),
    };
  },
});
</script>

<style scoped lang='scss'>
</style>