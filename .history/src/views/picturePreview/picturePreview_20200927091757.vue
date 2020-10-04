<template>
  <div class="all">
    <child v-model:config="config"></child>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
interface Data {
  config: configItem;
}
interface configItem {
  url: string;
  widt: string;
  heigh: string;
}
export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup(props, ctx: SetupContext) {
    let data: Data = reactive<Data>({
      config: {
        url:require('../../../img'),
        widt: "100",
        heigh: "100",
      },
    });
    return {
      ...toRefs(data),
    };
  },
});
</script>

<style scoped lang='scss'>
</style>