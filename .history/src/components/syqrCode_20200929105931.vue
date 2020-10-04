<template>
  <div v-if="url">
    <img :src="url" :style="`width:${width};height:${height}px`" />
  </div>
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
    },
    width: {
      type: Number,
    },
    height: {
      type: Number,
    },
  },
  components: {},
  setup(props, ctx: SetupContext) {
    let data: Data = reactive<Data>({
      url: "",
    });
    let getUrl = () => {
      // canvas.toDataURL(type, encoderOptions);
      QRCode.toDataURL(props.qrcode!).then((imgData: string) => {
        data.url = imgData;
      });
    };
    onMounted(() => {
      getUrl();
    });
    return {
      ...toRefs(data),
      getUrl,
    };
  },
});
</script>

<style scoped lang='scss'>
</style>