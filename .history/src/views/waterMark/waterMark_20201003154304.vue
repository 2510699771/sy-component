<template>
<br>
  <div style="margin-">
    <a-button type="primary" @click="go">生成水印</a-button>
    <a-button @click="to">取消水印</a-button>
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
    let to = () => {
      setWatermark("");
    };
    return {
      ...toRefs(data),
      setWatermark,
      go,
      to,
    };
  },
});
</script>

<style scoped lang='scss'>
</style>