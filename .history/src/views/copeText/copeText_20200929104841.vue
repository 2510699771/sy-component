<template>
  <div style="width:60%;dis">
    <a-input v-model:value="value" placeholder="输入要复制的内容" />
    <a-button @click="cope">点击复制</a-button>
  </div>
</template>

<script lang='ts'>
import { useCopytext } from "@/hooks/useCopytext";
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
      useCopytext(data.value);
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