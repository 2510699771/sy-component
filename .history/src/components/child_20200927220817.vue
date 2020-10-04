<template>
  <div @click="toView">
    <img
      :src="config.url"
      :style="{
        width: config.widt + `px`,
        height: config.heigh + `px`,
      }"
      alt=""
    />
  </div>
  <div class="all" v-if="config.show === true && config" @click="show">
    <div class="conter">
      <div class="imagediv">
        <img
          class="turn"
          :src="config.url"
          :style="{
            width: width + `px`,
            height: height + `px`,
            transtion:1s,
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
  width: number;
  height: number;
}
export default defineComponent({
  name: "child",
  props: {
    config: {
      type: Object,
      default: {},
      time:number
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
      timeout: 0.5,
      time:1,
      width: 300,
      height: 300,
    });
    //放大
    let amplification = (event: any) => {
      event.stopPropagation();
      if (data.width >= 900 || data.height >= 600) {
        props.config.show = false;
        data.width = 300;
        data.height = 300;
      } else {
        data.width += 10;
        data.height += 10;
      }
    };
    //缩小
    let narrow = (event: any) => {
      event.stopPropagation();
      if (data.width >= 80 && data.height >= 80) {
        data.width = data.width - 10;
        data.height = data.height - 10;
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
    let toView = () => {
      if (props.config.show === false) {
        props.config.show = true;
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
      toView,
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

 