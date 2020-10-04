<template>
  <div style="width: 50%; display: flex">
    <a-input v-model:value="value" placeholder="请输入内容" />
    <a-button style="margin-left: 20px" type="primary" @click="produes">
      生成二维码
    </a-button>
  </div>
  <sy-qrCode></sy-qrCode>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
interface Data {
  value: string;
  code: string;
}
export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup(props, ctx: SetupContext) {
    let data: Data = reactive<Data>({
      value: "",
      code:''
    });
    let produes = () => {
data.code=
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