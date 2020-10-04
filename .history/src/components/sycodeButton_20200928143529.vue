<template>
  <button
    @click="start"
    :disabled="disabled"
    :class="disabled === false ? 'btn' : 'btn1'"
  >
    <div v-if="texts" style="min-width: 80px; padding: 0 20px" class="button1">
      {{ texts }}
    </div>
    <div
      v-if="disabled === false && !text"
      style="min-width: 80px; padding: 0 20px"
      class="button1"
    >
      {{ times }}s{{ sendText }}
    </div>
    <div
      v-if="disabled === true && !texts"
      style="min-width: 80px; padding: 0 20px"
      class="button1"
    >
      {{ times }}s{{ sendText }}
    </div>
  </button>
</template>

<script lang='ts'>
import {
  defineComponent,
  reactive,
  toRefs,
  SetupContext,
  onMounted,
} from "vue";
interface Data {
  times: number;
  disabled: boolean;
  texts: string;
}
export default defineComponent({
  name: "sy-codeButton",
  props: {
    time: {
      type: Number,
      default: 0,
    },
    text: {
      type: String,
      default: "发送验证码",
    },
    sendText: {
      type: String,
      default: "重新发送",
    },
    endText: {
      type: String,
      default: "重新发送",
    },
  },
  components: {},
  setup(props, ctx: SetupContext) {
    let data: Data = reactive<Data>({
      times: 0,
      disabled: false,
      texts: "",
    });
    let start = () => {
      data.texts = "";
      data.disabled = true;
      let timer = setInterval(() => {
        data.times--;
        if (data.times === 0) {
          data.disabled = false;
          clearInterval(timer);
        }
      }, 1000);
    };
    onMounted(() => {
      data.texts = props.text;
            data.times = props.time;
    });
    return {
      ...toRefs(data),
      start,
    };
  },
});
</script>

<style scoped lang='scss'>
.btn {
  border: rgb(128, 128, 128);
  outline: none;
  cursor: pointer;
}
.btn1 {
  border: rgb(128, 128, 128);
  outline: none;
  cursor: not-allowed;
}
.button1 {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  height: 35px;
  background: #fff;
  border: 1px solid #dcdfe6;
}
.btn :hover {
  border-color: #c6e2ff;
  background-color: #ecf5ff;
}
</style>