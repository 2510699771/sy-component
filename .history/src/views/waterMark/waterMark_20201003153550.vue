<template>
  <div>
    <button @click="go">生成水印</button>
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
    let { setWatermark } = useWatermark();
    let go = () => {
      setWatermark("水印");
    };
    return {
      ...toRefs(data),
      setWatermark,
      go,
    };
  },
});
</script>

<style scoped lang='scss'>
</style>