<template>
  <div style="width: 50%; display: flex">
    <a-input v-model:value="value" placeholder="请输入内容" />
    <a-button style="margin-left: 20px" type="primary" @click="produes">
      生成二维码
    </a-button>
  </div>
  <sy-qrCode v-if="qrcode" v-model:qrcode="qrcode" v-model:width="width" v-model:qrcode="qrcode"></sy-qrCode>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
interface Data {
  value: string;
  qrcode: string;
  width: number;
  height: number;
}
export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup(props, ctx: SetupContext) {
    let data: Data = reactive<Data>({
      value: "",
      qrcode: "",
      width: 500,
      height: 500,
    });
    let produes = () => {
      data.qrcode = data.value;
    };
    return {
      ...toRefs(data),
      produes,
    };
  },
});
</script>

<style scoped lang='scss'>
</style>