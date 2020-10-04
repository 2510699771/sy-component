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
  widt: number;
  heigh: number;
}
export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup(props, ctx: SetupContext) {
    let data: Data = reactive<Data>({
      config: {
        url: require("@/images/pic.jpg"),
        widt: '50px',
        heigh: '100px',
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