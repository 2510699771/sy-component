<template>
  <div></div>
</template>

<script lang='ts'>
import {
  defineComponent,
  reactive,
  toRefs,
  SetupContext,
  onMounted,
} from "vue";
interface Data {}
export default defineComponent({
  name: "sy-qrCode",
  props: {
    qrcode: {
      type: String,
    },
  },
  components: {},
  setup(props, ctx: SetupContext) {
    let data: Data = reactive<Data>({});
    let getUrl = () => {
        canvas.toDataURL(type, encoderOptions);
    };
    onMounted(() => {});
    return {
      ...toRefs(data),
      getUrl,
    };
  },
});
</script>

<style scoped lang='scss'>
</style>