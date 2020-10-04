<template>
  <div>
    <sy-Button></sy-Button>
    <button>121231</button>
  </div>
</template>

<script lang='ts'>
import {useWatermark} from "@/hooks/useWhatermake"
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
interface Data {}
export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup(props, ctx: SetupContext) {
    let data: Data = reactive<Data>({});
    let {}=useWatermark
    return {
      ...toRefs(data),
    };
  },
});
</script>

<style scoped lang='scss'>
</style>