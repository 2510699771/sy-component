<template>
  <div style="display: flex">
    <div
      v-for="(item, index) in config.url"
      :key="index"
      @click="to_view(index)"
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
  <div class="all" v-if="config.show === true && isMark === true" @click="show">
    <div class="conter">
      <div class="imagediv" style="border: 1px solid red">
        <!-- 上一张 -->
        <div class="toLeft" @click.stop="toLeft" v-if="config.url.length > 1">
          <LeftOutlined />
        </div>
        <!-- 下一张 -->
        <div class="toRight" @click.stop="toRight" v-if="config.url.length > 1">
          <RightOutlined />
        </div>
        <!-- 展示图片 -->
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

      <div class="icons" @click.stop="iconblack">
        <a-tooltip
          :mouseEnterDelay="timeout"
          autoAdjustOverflow
          placement="top"
        >
          <template v-slot:title>
            <span>放大</span>
          </template>
          <div class="icon" @click.stop="amplification">
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
          <div class="icon1" @click.stop="narrow"><MinusCircleOutlined /></div>
        </a-tooltip>
        <a-tooltip
          :mouseEnterDelay="timeout"
          autoAdjustOverflow
          placement="top"
        >
          <template v-slot:title>
            <span>向左旋转</span>
          </template>
          <div class="icon3" @click.stop="left_rotating"><RedoOutlined /></div>
        </a-tooltip>
        <a-tooltip
          :mouseEnterDelay="timeout"
          autoAdjustOverflow
          placement="top"
        >
          <template v-slot:title>
            <span>向右旋转</span>
          </template>
          <div class="icon2" @click.stop="right_rotating"><UndoOutlined /></div>
        </a-tooltip>
      </div>
    </div>
  </div>
  <div class="all" v-if="config.show === true && isMark === false">
    <div class="Shut_down" @click="Shut_down">
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
  width?: number;
  height?: number;
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
    isMark: {
      type: Boolean,
      default: true,
    },
  },
  components: {},
  setup(props, ctx: SetupContext) {
    let data: Data = reactive<Data>({
      transform: "rotate(0deg)",
      daeg: 0,
      timeout: 0.5,
      // width: 300,
      // height: 300,
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
    let iconblack = () => {};
    //放大
    let amplification = (event: any) => {
      // event.stopPropagation();
      // if (data.width >= 900 || data.height >= 600) {
      //   props.config.show = false;
      // } else {
      //   data.width += 10;
      //   data.height += 10;
      // }
    };
    //缩小
    let narrow = (event: any) => {
    //   event.stopPropagation();
    //   if (data.width >= 80 && data.height >= 80) {
    //     data.width = data.width - 10;
    //     data.height = data.height - 10;
    //   }
    // };
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
    let show = () => {
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
      show,
      iconblack,
    };
  },
});