<template>
  <!-- 上 -->
  <div class="all" v-click-outside="closeDialog">
    <div
      class="tip bottom"
      v-if="direction === 'top' && show === true && bounced === true"
      style="bottom: 48px; left: -65px"
    >
      <slot name="text"></slot>
    </div>
    <!-- 左 -->
    <div
      class="tip2 bottom"
      v-if="direction === 'left' && show === true && bounced === true"
      style="top: -5px; left: -180px"
    >
      <slot name="text"></slot>
    </div>
    <!-- 右 -->
    <div
      class="tip3 bottom"
      v-if="direction === 'right' && show === true && bounced === true"
      style="top: -5px; left: 40px"
    >
      <slot name="text"></slot>
    </div>
    <div
      class="num"
      style="
        border-radius: 50%;
        width: 20px;
        height: 20px;
        right: 12px;
        top: -10px;
      "
      v-if="num < 99 && num >= 0"
    >
      {{ num }}
    </div>
    <div
      class="num"
      style="
        border-radius: 20px;
        width: 35px;
        height: 20px;
        right: -3px;
        top: -10px;
      "
      v-if="num >= 99"
    >
      99+
    </div>
    <img
      src="../images/notice.png"
      width="22"
      style="cursor: pointer"
      @click="open"
    />
    <!-- 下 -->
    <div
      class="tip1 bottom"
      v-if="direction === 'bottom' && show === true && bounced === true"
      style="bottom: -35px; left: -68px"
    >
      <slot name="text"></slot>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
interface Data {
  show: boolean;
}
export default defineComponent({
  name: "sy-Notice",
  props: {
    num: {
      type: Number,
      default: 0,
    },
    direction: {
      type: String,
      default: "top",
    },
    bounced: {
      type: Boolean,
      default: false,
    },
  },
  components: {},
  setup(props, ctx: SetupContext) {
    let data: Data = reactive<Data>({
      show: false,
    });

    let open = () => {
      console.log(document);

      if (data.show === true) {
        data.show = false;
      } else {
        data.show = true;
      }
    };

    const clickOutside=() = {
      // 初始化指令
      bind(el: any, binding: any, vnode: any) {
        function clickHandler(e: any) {
          // 这里判断点击的元素是否是本身，是本身，则返回
          if (el.contains(e.target)) {
            return false;
          }
          // 判断指令中是否绑定了函数
          if (binding.expression) {
            // 如果绑定了函数 则调用那个函数，此处binding.value就是handleClose方法
            binding.value(e);
          }
        }
        // 给当前元素绑定个私有变量，方便在unbind中可以解除事件监听
        el.__vueClickOutside__ = clickHandler;
        document.addEventListener("click", clickHandler);
      },
      directives: { clickOutside },
      update() {},
      unbind(el: any, binding: any) {
        // 解除事件监听
        document.removeEventListener("click", el.__vueClickOutside__);
        delete el.__vueClickOutside__;
      },
    };

    return {
      ...toRefs(data),
      open,
    };
  },
});
</script>

<style scoped lang='scss'>
.all {
  position: relative;
  height: 30px;
  width: 40px;
  z-index: 99;
  .num {
    background-color: red;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    color: white;
    font-size: 12px;
  }
}
.tip,
.tip1,
.tip2,
.tip3 {
  display: flex;
  justify-content: center;
  position: absolute;
  align-items: center;
  background-color: white;
  padding: 0 10px;
  width: 170px;
  line-height: 30px;
  color: black;
  text-align: center;
  border-radius: 5px;
  font-family: sans-serif;
  box-shadow: 0px 0px 2px rgb(196, 196, 196);
  z-index: 999;
  word-wrap: break-word;
  word-break: break-all;
}
.tip:after {
  content: "";
  position: absolute;
  width: 0;
  height: 0;
  top: 100%;
  left: 50%;
  margin-left: -15px;
  border-top: 8px solid white;
  border-bottom: 8px solid rgba(255, 255, 255, 0);
  border-left: 8px solid rgba(255, 255, 255, 0);
  border-right: 8px solid rgba(255, 255, 255, 0);
}
.tip1:after {
  content: "";
  position: absolute;
  width: 0;
  height: 0;
  bottom: 100%;
  left: 50%;
  margin-left: -15px;
  border-top: 8px solid rgba(255, 255, 255, 0);
  border-bottom: 8px solid rgb(255, 255, 255);
  border-left: 8px solid rgba(255, 255, 255, 0);
  border-right: 8px solid rgba(255, 255, 255, 0);
}
.tip2:after {
  content: "";
  position: absolute;
  width: 0;
  height: 0;
  left: 100%;
  top: 8px;
  border-top: 8px solid rgba(255, 255, 255, 0);
  border-bottom: 8px solid rgba(255, 255, 255, 0);
  border-left: 8px solid rgb(255, 255, 255);
  border-right: 8px solid rgba(255, 255, 255, 0);
}
.tip3:after {
  content: "";
  position: absolute;
  width: 0;
  height: 0;
  right: 100%;
  top: 8px;
  border-top: 8px solid rgba(255, 255, 255, 0);
  border-bottom: 8px solid rgba(255, 255, 255, 0);
  border-right: 8px solid rgb(255, 255, 255);
  border-left: 8px solid rgba(255, 255, 255, 0);
}
</style>