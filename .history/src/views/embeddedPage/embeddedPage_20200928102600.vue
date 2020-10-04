<template>
  <div>
    <iframe
      src="https://blog.csdn.net/mildddd/article/details/79800950"
class="iframe"
    ></iframe>
    <sy-Iframe></sy-Iframe>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
interface Data {}
export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup(props, ctx: SetupContext) {
    let data: Data = reactive<Data>({});
    return {
      ...toRefs(data),
    };
  },
});
</script>

<style scoped lang='scss'>
.iframe{
  width: 100%;
  he
}
</style>