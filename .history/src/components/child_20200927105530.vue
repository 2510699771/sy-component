<template>
  <div class="all" v-if="config.show === true && config">
    <div class="imagediv">
      <img
        class="turn"
        :src="config.url"
        :style="{
          width: config.widt + `px`,
          height: config.heigh + `px`,
          transform: transform,
        }"
      />
    </div>

    <div class="icons">
      <div class="hand" @click="amplification">
        <PlusCircleOutlined />
      </div>
      <div class="hand" @click="narrow"><MinusCircleOutlined /></div>
      <div class="hand" @click="left_rotating"><UndoOutlined /></div>
      <div class="hand"><RedoOutlined /></div>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
interface Data {
  transform: string;
  daeg:number
}
export default defineComponent({
  name: "child",
  props: {
    config: {
      type: Object,
      default: {},
    },
    show: {
      type: Boolean,
      default: false,
    },
  },
  components: {},
  setup(props, ctx: SetupContext) {
    let data: Data = reactive<Data>({
      transform: "rotate(0deg)",
      daeg:0
    });
    //放大
    let amplification = () => {
      if (props.config.widt >= 350 || props.config.widt >= 350) {
        props.config.show = false;
      } else {
        props.config.widt += 10;
        props.config.heigh += 10;
      }
    };
    //缩小
    let narrow = () => {
      if (props.config.widt >= 50 && props.config.heigh >= 50) {
        props.config.widt = props.config.widt - 10;
        props.config.heigh = props.config.widt - 10;
      }
    };
    //向左旋转
    let left_rotating = () => {
      data.transform=`rotate(${data.}deg)` ;
    };
    return {
      ...toRefs(data),
      amplification,
      narrow,
      left_rotating,
    };
  },
});
</script>

<style scoped lang='scss'>
.all {
  position: fixed;
  position: absolute; // 绝对路径
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 99999;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .icons {
    margin-top: 20px;
    display: flex;
    justify-content: space-around;
    width: 250px;
    border-radius: 30px;
    background-color: rgba(0, 0, 0, 0.3);
    align-items: center;
    height: 35px;
  }
  .imagediv {
    display: flex;
    align-items: center;
    width: 350px;
    height: 350px;
    justify-content: center;
  }
}
.hand {
  cursor: pointer;
}
.turn {
  animation: 1s linear;
}
// @keyframes turn {
//   0% {
//     -webkit-transform: rotate(0deg);
//   }
//   25% {
//     -webkit-transform: rotate(90deg);
//   }
//   50% {
//     -webkit-transform: rotate(180deg);
//   }
//   75% {
//     -webkit-transform: rotate(270deg);
//   }
//   100% {
//     -webkit-transform: rotate(360deg);
//   }
// }
</style>