<template>
  <div class="all" v-if="config.show === true && config" @click="show">
    <div class="conter">
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
        <a-tooltip mouseEnterDelay="0.5" autoAdjustOverflow placement="top">
          <template v-slot:title>
            <span>放大</span>
          </template>
          <div class="hand" @click="amplification">
            <PlusCircleOutlined />
          </div>
        </a-tooltip>

        <a-tooltip mouseEnterDelay="0.5" autoAdjustOverflow placement="top">
          <template v-slot:title>
            <span>缩小</span>
          </template>
          <div class="hand" @click="narrow"><MinusCircleOutlined /></div>
        </a-tooltip>

        <a-tooltip mouseEnterDelay="0.5" autoAdjustOverflow placement="top">
          <template v-slot:title>
            <span>向左旋转</span>
          </template>
          <div class="hand" @click="left_rotating"><UndoOutlined /></div>
        </a-tooltip>

        <a-tooltip mouseEnterDelay=0*1 autoAdjustOverflow placement="top">
          <template v-slot:title>
            <span>向右旋转</span>
          </template>
          <div class="hand" @click="right_rotating"><RedoOutlined /></div>
        </a-tooltip>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
interface Data {
  transform: string;
  daeg: number;
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
      daeg: 0,
    });
    //放大
    let amplification = (event: any) => {
      event.stopPropagation();
      if (props.config.widt >= 350 || props.config.widt >= 350) {
        props.config.show = false;
      } else {
        props.config.widt += 10;
        props.config.heigh += 10;
      }
    };
    //缩小
    let narrow = (event: any) => {
      event.stopPropagation();
      if (props.config.widt >= 50 && props.config.heigh >= 50) {
        props.config.widt = props.config.widt - 10;
        props.config.heigh = props.config.widt - 10;
      }
    };
    //向左旋转
    let left_rotating = (event: any) => {
      event.stopPropagation();
      data.daeg = data.daeg - 90;
      data.transform = `rotate(${data.daeg}deg)`;
    };
    //向右旋转
    let right_rotating = (event: any) => {
      event.stopPropagation();
      data.daeg = data.daeg + 90;
      data.transform = `rotate(${data.daeg}deg)`;
    };
    let show = () => {
      props.config.show = false;
    };
    let icon = (event: any) => {
      event.stopPropagation();
    };
    return {
      ...toRefs(data),
      amplification,
      narrow,
      left_rotating,
      right_rotating,
      show,
      icon,
    };
  },
});
</script>

<style scoped lang='scss'>
.all {
  .conter {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  position: fixed;
  position: absolute; // 绝对路径
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 9;
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
    font-size: 20px;
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
  display: flex;
  justify-content: center;
  align-items: center;
}
.turn {
  animation: 1s linear;
}
.hand {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>