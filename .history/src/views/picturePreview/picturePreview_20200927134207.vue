<template>
  <div class="all">
    <child v-model:config="config"></child>
    <pictureMaskno v-model:config="config1"></pictureMaskno>
    <reviewPicture></reviewPicture>
    <h3 @click="toView">单图片预览,点击遮罩层可关闭</h3>
    <h3 @click="pictureMaskn">单图片预览,点击遮罩层不可关闭</h3>
    <h3 @click="picturesMasky">多图片预览,点击遮罩层可关闭</h3>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
interface Data {
  config: configItem;
  config1: configItem;
  config2: configItem1;
}
interface configItem {
  url: string;
  widt: number;
  heigh: number;
  show: boolean;
}
interface configItem1{
  url:configItem3[],
  widt: number;
  heigh: number;
  show: boolean;
}
interface configItem3{
urlitem:
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
      config1: {
        url: require("@/images/pic.jpg"),
        widt: 100,
        heigh: 100,
        show: false,
      },
      config2: {
        url:[{urlitem:require("file:///C:/Users/Administrator/AppData/Local/Temp/HZ$D.054.3890/HZ$D.054.3891/img/1.a7ce9b96.jpg")}],
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
    let pictureMaskn = () => {
      if (data.config1.show === false) {
        data.config1.show = true;
      } else {
        data.config1.show = true;
      }
    };
    let picturesMasky = () => {
      if (data.config1.show === false) {
        data.config1.show = true;
      } else {
        data.config1.show = true;
      }
    };
    return {
      ...toRefs(data),
      toView,
      pictureMaskn,
      picturesMasky
    };
  },
});
</script>

<style scoped lang='scss'>
</style>