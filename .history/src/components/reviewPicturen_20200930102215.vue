<template>
  <div style="display: flex">
    <div
      v-for="(item, index) in config.url"
      :key="index"
      @click="to_view(index)"
      style="border: 1px solid red"
    >
      <img
        :src="item"
        :style="{
          width: config.widt + `px`,
          height: config.heigh + `px`,
        }"
      />
    </div>
  </div>
  <div
    class="all"
    v-if="config.show === true && config.isMark === true"
    @click="show"
  >
    <div class="Shut_down" @click="Shut_down" v-if="config.isMark === true">
      <CloseCircleOutlined />
    </div>
    <div class="conter">
      <div class="imagediv">
        <!-- 上一张 -->
        <div class="toLeft" @click="toLeft" v-if="config.url.length > 1">
          <LeftOutlined />
        </div>
        <!-- 下一张 -->
        <div class="toRight" @click="toRight" v-if="config.url.length > 1">
          <RightOutlined />
        </div>
        <img
          class="turn"
          :src="config.url[index]"
          :style="{
            width: width + `px`,
            height: height + `px`,
            transform: transform,
            transition: time + 's',
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
          <div class="icon3" @click="left_rotating"><RedoOutlined /></div>
        </a-tooltip>
        <a-tooltip
          :mouseEnterDelay="timeout"
          autoAdjustOverflow
          placement="top"
        >
          <template v-slot:title>
            <span>向右旋转</span>
          </template>
          <div class="icon2" @click="right_rotating"><UndoOutlined /></div>
        </a-tooltip>
      </div>
    </div>
  </div>
  <div
    class="all"
    v-if="config.show === true && config.isMark === true"
    @click="show"
  >
    <div class="Shut_down" @click="Shut_down" v-if="config.isMark === true">
      <CloseCircleOutlined />
    </div>
    <div class="conter">
      <div class="imagediv">
        <!-- 上一张 -->
        <div class="toLeft" @click="toLeft" v-if="config.url.length > 1">
          <LeftOutlined />
        </div>
        <!-- 下一张 -->
        <div class="toRight" @click="toRight" v-if="config.url.length > 1">
          <RightOutlined />
        </div>
        <img
          class="turn"
          :src="config.url[index]"
          :style="{
            width: width + `px`,
            height: height + `px`,
            transform: transform,
            transition: time + 's',
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
          <div class="icon3" @click="left_rotating"><RedoOutlined /></div>
        </a-tooltip>
        <a-tooltip
          :mouseEnterDelay="timeout"
          autoAdjustOverflow
          placement="top"
        >
          <template v-slot:title>
            <span>向右旋转</span>
          </template>
          <div class="icon2" @click="right_rotating"><UndoOutlined /></div>
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
  index: number;
  time: number;
}
export default defineComponent({
  name: "reviewPicturen",
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
      timeout: 0.5,
      width: 300,
      height: 300,
      index: 0,
      time: 1,
    });
    //展示
    let to_view = (index: number) => {
      if (props.config.show === false) {
        data.index = index;
        props.config.show = true;
      } else {
        props.config.show = false;
      }
    };
    //放大
    let amplification = (event: any) => {
      event.stopPropagation();
      if (data.width >= 900 || data.height >= 600) {
        props.config.show = false;
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
    let Shut_down = () => {
      props.config.show = false;
    };
    let icon = (event: any) => {
      event.stopPropagation();
    };
    //上一张图片
    let toLeft = (event: any) => {
      event.stopPropagation();
      if (data.index === 0) {
        data.index = props.config.url.length - 1;
      } else {
        data.index = props.config.index - 1;
      }
    };
    //下一张图片
    let toRight = (event: any) => {
      event.stopPropagation();
      if (data.index === props.config.url.length - 1) {
        data.index = 0;
      } else {
        data.index++;
      }
    };
    return {
      ...toRefs(data),
      amplification,
      narrow,
      left_rotating,
      right_rotating,
      Shut_down,
      icon,
      toLeft,
      toRight,
      to_view,
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
.Shut_down {
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 25px;
}
</style>