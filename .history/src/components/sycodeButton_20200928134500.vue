<template>
  <button @click="start" class="btn">
    <div style="min-width: 80px; padding: 0 10px" class="button1">
      {{ time }}
    </div>
  </button>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
interface Data {
  time: number;
}
export default defineComponent({
  name: "sy-codeButton",
  props: {},
  components: {},
  setup(props, ctx: SetupContext) {
    let data: Data = reactive<Data>({
      time: 10,
    });
    let start = () => {
      let timer = setInterval(() => {
        data.time--;
        if (data.time === 0) {
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
  border: rgba(128, 128, 128, 0);
  outline: none;
  cursor: pointer;
}
.button1 {
  border: 1px solid rgb(180, 180, 180);
  border-radius: 10px;
  height: 30px;
}
.btn :hover {
  color: rgb(0, 197, 197);
  border: 1px solid rgb(0, 197, 197);
  background-color: rgba(64, 158, 209, 0.062);
}
</style>