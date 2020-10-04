<template>
  <div class="all">
    <child v-model:config="config"></child>
    <pictureMaskno v-model:config="config"></pictureMaskno>
    <h3 @click="toView">单图片预览,点击遮罩层可关闭</h3>
    <h3 @click="pictureMaskno">单图片预览,点击遮罩层不可关闭</h3>
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
  show: boolean;
}
export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup(props, ctx: SetupContext) {
    let data: Data = reactive<Data>({
      config: {
        url: require("@/images/pic.jpg"),
        widt: 100,
        heigh: 100,
        show: false,
      },
      config: {
        url: require("@/images/pic.jpg"),
        widt: 100,
        heigh: 100,
        show: false,
      },
    });
    let toView = () => {
      if (data.config.show === false) {
        data.config.show = true;
      } else {
        data.config.show = true;
      }
    };
    let pictureMaskno = () => {
      if (data.config.show === false) {
        data.config.show = true;
      } else {
        data.config.show = true;
      }
    };
    return {
      ...toRefs(data),
      toView,
    };
  },
});
</script>

<style scoped lang='scss'>
</style>