<template>
  <br />
  <div class="all" style="margin-left: 10px">
    <h3>单图片预览,点击遮罩层可关闭</h3>
    <pictureMaskno v-model:config="config1"></pictureMaskno>
    <child v-model:config="config"></child>
    <h3>单图片预览,点击遮罩层不可关闭</h3>
    <sy-PictureBrowse v-model:config="config1"></sy-PictureBrowse>
    <h3>多图片预览,点击遮罩层可关闭</h3>
    <sy-PictureBrowse v-model:config="config2"></sy-PictureBrowse>
    <h3>多图片预览,点击遮罩层不可关闭</h3>
    <sy-PictureBrowse
      v-model:config="config3"
      v-model:isMark="isMark"
    ></sy-PictureBrowse>
  </div>
  <br />
  <br />
  <br />
  <br />
  <br />
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
interface Data {
  config: configItem;
  config1: configItem;
  config2: configItem1;
  config3: configItem1;
  isMark?: boolean;
}
interface configItem {
  url: string;
  widt: number;
  heigh: number;
  show: boolean;
}
interface configItem1 {
  url: shine[];
  widt: number;
  heigh: number;
  show: boolean;
  isMark?: boolean;
}
interface shine {}
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
        url: [
          require("@/images/1.a7ce9b96.jpg"),
          require("@/images/2.973447f0.jpeg"),
          require("@/images/3.65303675.jpg"),
        ],
        widt: 200,
        heigh: 200,
        show: false,
        isMark: true,
      },
      config3: {
        url: [
          require("@/images/1.a7ce9b96.jpg"),
          require("@/images/2.973447f0.jpeg"),
          require("@/images/3.65303675.jpg"),
        ],
        widt: 200,
        heigh: 200,
        show: false,
      },
      isMark: false,
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
      if (data.config2.show === false) {
        data.config2.show = true;
      } else {
        data.config2.show = true;
      }
    };
    return {
      ...toRefs(data),
      toView,
      pictureMaskn,
      picturesMasky,
    };
  },
});
</script>

<style scoped lang='scss'>
</style>