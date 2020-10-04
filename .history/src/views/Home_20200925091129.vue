<template>
  <div>
    <div>{{ x }}--{{ y }}</div>
    <div>{{ time }}</div>
  </div>
</template>

<script lang='ts'>
import { useMouse } from "@/hooks/useMouse";
import { date } from "@/hooks/useDate";
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
interface Data {}
export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup(props, ctx: SetupContext) {
    let data: Data = reactive<Data>({});
    let { x, y } = useMouse();
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