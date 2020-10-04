
<template>
  <div>
    <button>12123</button>
  </div>
</template>

<script lang='ts'>
import { useWatermark } from "@/hooks/useWhatermake";
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
interface Data {}
export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup(props, ctx: SetupContext) {
    let data: Data = reactive<Data>({});
    let{ setWatermark } = useWatermark();
    return {
      ...toRefs(data),
    };
  },
});
</script>

<style scoped lang='scss'>
</style>