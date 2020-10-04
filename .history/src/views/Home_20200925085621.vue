<template>
  <div>{{ x }}--{{ y }}</div>
</template>

<script lang='ts'>
import dayjs from "dayjs"
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
    let time=
    return {
      ...toRefs(data),
      x,
      y,
    };
  },
});
</script>

<style scoped lang='scss'>
</style>