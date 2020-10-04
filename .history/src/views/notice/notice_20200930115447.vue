<template>
  <div>
    <br />
    <h3>普通通知</h3>
    <div style="margin-left: 20px">
      <sy-Notice v-model:num="num"></sy-Notice>
    </div>
    <br />
    <h3>消息超过99</h3>
    <div style="margin-left: 20px; display: flex">
      <sy-Notice v-model:num="num1"></sy-Notice><span>消息超过99</span>
    </div>
    <br />
    <h3>默认弹出菜单</h3>
    <div style="position: relative; z-index: 999">
      <sy-Notice v-model:num="num1" v-model:direction="direction">
        <template v-slot:text
          >ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd</template
        >
      </sy-Notice>
    </div>
    <h3>弹出菜单在其他方向</h3>
    <div style="position: relative; z-index: 999">
      <sy-Notice
        v-model:num="num"
        v-model:direction="direction2"
        v-model:bounced="bounced"
      >
        <template v-slot:text>dddddd</template>
      </sy-Notice>
    </div>
    <br />
    <div style="margin-left: 20px; position:relative; z-index: 999">
      <sy-Notice
        v-model:num="num"
        v-model:direction="direction1"
        v-model:bounced="bounced"
      >
        <template v-slot:text>dasda</template>
      </sy-Notice>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
interface Data {
  num: number;
  num1: number;
  direction: string;
  direction1: string;
  direction2: string;
  bounced: boolean;
  direction3: string;
}
export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup(props, ctx: SetupContext) {
    let data: Data = reactive<Data>({
      num: 1,
      num1: 10,
      direction: "top",
      direction1: "left",
      direction2: "right",
      direction3: "bottom",
      bounced: true,
    });
    return {
      ...toRefs(data),
    };
  },
});
</script>

<style scoped lang='scss'>
</style>