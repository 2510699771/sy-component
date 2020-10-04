<template>
  <div>
    <a-input v-model:value="value" placeholder="Basic usage" />
    <a-button @click="cope">21313</a-button>
  </div>
</template>

<script lang='ts'>
import {useCopytext} from '@/hooks/useCopytext'
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
      useCopytext()
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