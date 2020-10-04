<template>
  <div>
    <a-input v-model:value="value" placeholder="Basic usage" />
    <a-button @click="cope">21313</a-button>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
interface Data {
  value: string;
}
export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup(props, ctx: SetupContext) {
    let data: Data = reactive<Data>({
      value: "",
    });
    let cope = () => {
       const oInput = document.createElement('input')
      oInput.value = this.textarea
      document.body.appendChild(oInput)
      oInput.select()
      document.execCommand('Copy')
      this.$message({
        message: '复制成功',
        type: 'success'
      })
      oInput.remove()

    };
    return {
      ...toRefs(data),
      cope,
    };
  },
});
</script>

<style scoped lang='scss'>
</style>