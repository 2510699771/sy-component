<template>
  <button
    @click="start"
    :disabled="disabled"
    :class="disabled === false ? 'btn' : 'btn1'"
  >

    <div
      v-if="disabled === false"
      style="min-width: 80px; padding: 0 10px"
      class="button1"
    >
      {{ time }}
    </div>
    <div
      v-if="disabled === true"
      style="min-width: 80px; padding: 0 10px"
      class="button1"
    >
      {{ time }}
    </div>
  </button>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
interface Data {
  time: number;
  disabled: boolean;
}
export default defineComponent({
  name: "sy-codeButton",
  props: {
    time：{}
  },
  components: {},
  setup(props, ctx: SetupContext) {
    let data: Data = reactive<Data>({
      time: 10,
      disabled: false,
    });
    let start = () => {
      data.disabled = true;
      let timer = setInterval(() => {
        data.time--;
        if (data.time === 0) {
          data.disabled = false;
          clearInterval(timer);
        }
      }, 1000);
    };
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