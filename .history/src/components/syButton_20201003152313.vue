
<template>
  <div>
    <button>12123</button>
  </div>
</template>

<script lang='ts'>
import { useWatermark } from "@/hooks/useWhatermake";
import { defineComponent, reactive, toRefs, SetupContext, onMounted } from "vue";
interface Data {}
export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup(props, ctx: SetupContext) {
    let data: Data = reactive<Data>({});
    let{ setWatermark } = useWatermark();
onMounted(()=>{
  setWatermark
})
    return {
      ...toRefs(data),
      setWatermark
    };
  },
});
</script>

<style scoped lang='scss'>
</style>