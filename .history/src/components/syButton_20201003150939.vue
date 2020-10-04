<template>
  <div>
    <!-- 一个有意思的按钮 -->
    <div class="canvas" :style="{ backgroundImage: `url(${orgBackground})` }">
      123
    </div>
    <br />r />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />r />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <div>1213</div>
  </div>
</template>

<script lang='ts'>
import { TweenMax } from "gsap";
import {
  defineComponent,
  reactive,
  toRefs,
  SetupContext,
  onMounted,
} from "vue";
interface Data {
  prevDivId: number;
  number180: number;
}
export default defineComponent({
  name: "sy-Button",
  props: {
    text: {
      type: String,
      default: "我是水印",
    },
  },
  components: {},
  setup(props, ctx: SetupContext) {
    let data: Data = reactive<Data>({
      prevDivId: 0,
      number180: 180,
    });

    let addWaterMark = (markObj: any) => {
      let prevDivId = 0;

      const number180 = 180;
      // 默认设置
      const defaultObj = {
        text: props.text,
        angle: 25,
        color: "rgba(0,0,0,.15)",
        fontSize: "16px",
        top: 70,
      };
      Object.assign(defaultObj, markObj);
      // 角度转成负数
      defaultObj.angle = -Math.abs(defaultObj.angle);
      // 随机生成一个 id
      const id = Math.random();
      // 清除上次的水印 div[解决：窗口大小调整时（onresize方法）水印会叠加，导致颜色加深的问题]
      if (prevDivId) {
        document.body.removeChild(document.getElementById(String(prevDivId))!);
      }
      prevDivId = id;
      // 创建画布
      const canvas = document.createElement("canvas");
      // 设置画布的长、宽
      canvas.width = 240;
      canvas.height = 180;

      const context = canvas.getContext("2d");

      // 旋转角度（以弧度计）
      context!.rotate((defaultObj.angle * Math.PI) / Number(180));
      context!.font = defaultObj.fontSize + " 微软雅黑";
      // 设置填充绘画的颜色、渐变或者模式
      context!.fillStyle = defaultObj.color;
      context!.textAlign = "left";
      context!.textBaseline = "middle";
      context!.fillText(defaultObj.text, 0, canvas.height);

      const div = document.createElement("div");
      div.style.pointerEvents = "none";
      div.style.top = "0px";
      div.style.bottom = "0px";
      div.style.right = "0px";
      div.style.left = "0px";
      div.style.zIndex = "9999";
      div.style.width = "100vw";
      div.style.height = "100vh";
      div.style.position = "fixed";
      div.style.background =
        "url(" + canvas.toDataURL("image/png") + ") left top repeat";
      document.body.appendChild(div);
    };
    onMounted(() => {
      addWaterMark(addWaterMark);
      let id = addWaterMark(addWaterMark);
      setInterval(() => {
        if (document.getElementById(id:any) === null) {
          id = addWaterMark(addWaterMark);
        }
      }, 500);
      window.onresize = () => {
        addWaterMark(addWaterMark);
      };
    });

    return {
      ...toRefs(data),
    };
  },
});
</script>

<style scoped lang='scss'>
</style>