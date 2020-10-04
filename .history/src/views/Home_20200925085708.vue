<template>
  <div>
    <div>{{ x }}--{{ y }}</div>
    <div>{{}}</div>
  </div>
</template>

<script lang='ts'>
import dayjs from "dayjs";
import { useMouse } from "@/hooks/useMouse";
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
interface Data {}
export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup(props, ctx: SetupContext) {
    let data: Data = reactive<Data>({});
    let { x, y } = useMouse();
    let time = dayjs();
    return {
      ...toRefs(data),
      time,
      x,
      y,
    };
  },
});
</script>

<style scoped lang='scss'>
</style>