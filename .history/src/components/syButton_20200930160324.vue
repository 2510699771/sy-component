<template>
  <div>
    <!-- 一个有意思的按钮 -->
    <div class="content" :style="{backgroundImage:`url(${orgBackground})`}">123</div>
  </div>
</template>

<script lang='ts'>
import { TweenMax } from "gsap";
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
interface Data {}
export default defineComponent({
  name: "sy-Button",
  props: {},
  components: {},
  setup(props, ctx: SetupContext) {
    let data: Data = reactive<Data>({});

   let  addWaterMark=()=> {
        const strArr = `${localStorage.getItem(
                "loginUserName"
            )}${localStorage
                .getItem("logunUserPhone")
                .slice(7, 11)}[${new Date()}]`;
        let ctx = document.createElement("canvas");
        ctx.width = 250;
        ctx.height = 100;
        ctx.style.display = "none";
        let cans = ctx.getContext("2d");
        cans.rotate((-20 * Math.PI) / 180);
        cans.font = "12px Microsoft YaHei";
        cans.fillStyle = "rgba(17, 17, 17, 0.20)";
        cans.textAlign = "left";
        cans.textBaseline = "Middle";
        cans.fillText(strArr, 0, 100);
        cans.save();
        return ctx.toDataURL();
    }
    return {
      ...toRefs(data),
      button,
    };
  },
});
</script>

<style scoped lang='scss'>
body {
  background: #f1c40f;
}

.button {
  background: #3498db;
  width: 180px;
  padding: 4px 0;

  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  border-radius: 3px;

  p {
    font-family: "Roboto";
    text-align: center;
    text-transform: uppercase;
    color: #fff;
    user-select: none;
  }

  &:hover {
    cursor: pointer;
  }

  &:after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 10%;
    border-radius: 50%;
    background-color: darken(#f1c40f, 20%);
    opacity: 0.4;
    bottom: -30px;
  }
}
</style>