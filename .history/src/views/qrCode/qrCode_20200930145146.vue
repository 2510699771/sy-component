<template>
  <!-- 生成二维码 -->
  <br />
  <div style="width: 50%; display: flex; margin-left: 10px">
    <a-input v-model:value="value" placeholder="请输入内容" />
    <a-button style="margin-left: 5px" type="primary" @click="produes">
      生成二维码
    </a-button>
  </div>
  <sy-qrCode
    style="margin-left: 10px"
    v-model:qrcode="qrcode"
    v-model:width="width"
    v-model:height="height"
  ></sy-qrCode>
  <sy-qrCode
    style="margin-left: 10px"
    v-model:qrcode="qrcode"
    v-model:width="width"
    v-model:height="height"
  ></sy-qrCode>
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
      width: 200,
      height: 200,
      width1: 500,
      height1: 500,
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