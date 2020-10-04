<template>
  <div></div>
</template>

<script lang='ts'>
import QRCode from "qrcode";
import {
  defineComponent,
  reactive,
  toRefs,
  SetupContext,
  onMounted,
} from "vue";
interface Data {
  url: string;
}
export default defineComponent({
  name: "sy-qrCode",
  props: {
    qrcode: {
      type: String,
      url: "",
    },
  },
  components: {},
  setup(props, ctx: SetupContext) {
    let data: Data = reactive<Data>({
      url: "",
    });
    let getUrl = () => {
      // canvas.toDataURL(type, encoderOptions);
      QRCode.toDataURL(props.qrcode).th
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