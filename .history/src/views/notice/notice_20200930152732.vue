<template>
  <br />
  <div style="margin-left: 80px">
    <br />
    <h3>普通通知</h3>
    <div>
      <sy-Notice style="" v-model:num="num"></sy-Notice>
    </div>
    <br />
    <h3>消息超过99</h3>
    <div>
      <sy-Notice v-model:num="num1"></sy-Notice>
    </div>
    <br />
    <h3>默认弹出菜单</h3>
    <div style="">
      <sy-Notice v-model:num="num1" v-model:bounced="bounced">
        <template v-slot:text
          >ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd</template
        >
      </sy-Notice>
    </div>
    <br />
    <h3>弹出菜单在其他方向</h3>
    <div style="">
      <sy-Notice
        v-model:num="num1"
        v-model:direction="direction2"
        v-model:bounced="bounced"
      >
        <template v-slot:text>dddddd</template>
      </sy-Notice>
    </div>
    <br />
    <div>
      <sy-Notice
        style=""
        v-model:num="num1"
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
      num1: 100,
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