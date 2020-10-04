<template>
  <div class="all" v-if="config.show === true && config" @click="show">
    <div class="conter">
      <div class="imagediv">
        <div class="toLeft" @click="toLeft"><LeftOutlined /></div>
        <div class="toRight" @click="toRight"><RightOutlined /></div>
        <img
          class="turn"
          :src="config.url[config.index]"
          :style="{
            width: config.widt + `px`,
            height: config.heigh + `px`,
            transform: transform,
          }"
        />
      </div>

      <div class="icons">
        <a-tooltip
          :mouseEnterDelay="timeout"
          autoAdjustOverflow
          placement="top"
        >
          <template v-slot:title>
            <span>放大</span>
          </template>
          <div class="icon" @click="amplification">
            <PlusCircleOutlined />
          </div>
        </a-tooltip>

        <a-tooltip
          :mouseEnterDelay="timeout"
          autoAdjustOverflow
          placement="top"
        >
          <template v-slot:title>
            <span>缩小</span>
          </template>
          <div class="icon1" @click="narrow"><MinusCircleOutlined /></div>
        </a-tooltip>

        <a-tooltip
          :mouseEnterDelay="timeout"
          autoAdjustOverflow
          placement="top"
        >
          <template v-slot:title>
            <span>向左旋转</span>
          </template>
          <div class="icon2" @click="left_rotating"><UndoOutlined /></div>
        </a-tooltip>

        <a-tooltip
          :mouseEnterDelay="timeout"
          autoAdjustOverflow
          placement="top"
        >
          <template v-slot:title>
            <span>向右旋转</span>
          </template>
          <div class="icon3" @click="right_rotating"><RedoOutlined /></div>
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
  timeout: number;
}
export default defineComponent({
  name: "reviewPicture",
  props: {
    config: {
      type: Object,
      default: {},
    },
    show: {
      type: Boolean,
      default: false,
    },
    index: {
      type: Number,
      default: 0,
    },
  },
  components: {},
  setup(props, ctx: SetupContext) {
    let data: Data = reactive<Data>({
      transform: "rotate(0deg)",
      daeg: 0,
      timeout: 0.5,
    });
    //放大
    let amplification = (event: any) => {
      event.stopPropagation();
      if (props.config.widt >= 900 || props.config.widt >= 600) {
        props.config.show = false;
      } else {
        props.config.widt += 10;
        props.config.heigh += 10;
      }
    };
    //缩小
    let narrow = (event: any) => {
      event.stopPropagation();
      if (props.config.widt >= 80 && props.config.heigh >= 80) {
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
    //上一张图片
    let toLeft = (event: any) => {
      event.stopPropagation();
      if (props.config.index === 0) {
        props.config.index = props.config.url.length - 1;
      } else {
        props.config.index = props.config.index - 1;
      }
    };
    //下一张图片
    let toRight = (event: any) => {
      event.stopPropagation();
      if (props.config.index === props.config.url.length - 1) {
        props.config.index = 0;
      } else {
        props.config.index++;
      }
    };
    return {
      ...toRefs(data),
      amplification,
      narrow,
      left_rotating,
      right_rotating,
      show,
      icon,
      toLeft,
      toRight,
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
    height: 40x;
    font-size: 20px;
  }
  .imagediv {
    display: flex;
    align-items: center;
    width: 900px;
    height: 600px;
    justify-content: center;
  }
}
.icon,
.icon1,
.icon2,
.icon3 {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
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
.toLeft {
  cursor: pointer;
  width: 50px;
  height: 50px;
  position: absolute;
  font-size: 25px;
  top: 45%;
  left: 125px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 1px solid rgb(201, 201, 201);
}
.toRight {
  cursor: pointer;
  width: 50px;
  height: 50px;
  top: 45%;
  right: 125px;
  position: absolute;
  font-size: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 1px solid rgb(201, 201, 201);
}

.toLeft:hover {
  background-color: white;
  color: black;
}
.toRight:hover {
  background-color: white;
  color: black;
}
.icon,
.icon1,
.icon2,
.icon3 {
  &:hover {
    font-size: 30px;
    color: rgb(230, 230, 230);
  }
}
</style>