<template>
  <div>
    <br />
    <h3>普通通知</h3>
    <div style="margin-left: 20px">
      <sy-Notice v-model:num="num"></sy-Notice>
    </div>
    <br />
    <h3>消息超过99</h3>
    <div style="margin-left: 20px">
      <sy-Notice v-model:num="num1"></sy-Notice>
    </div>
    <br />
    <h3>默认弹出菜单</h3>
    <div style="margin-left: 100px">
      <sy-DialogNotice v-model:num="num1" v-model:direction="direction">
        <template v-slot:text
          >ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd</template
        >
      </sy-DialogNotice>
    </div>
    <h3>弹出菜单在其他方向</h3>
    <div style="margin-left: 200px">
      <sy-DialogNotice v-model:num="num" v-model:direction="direction1">
        <template v-slot:text>dddddd</template>
      </sy-DialogNotice>
    </div>
    <br />
    <br />
    <br />
    <div style="margin-left: 200px">
      <sy-DialogNotice v-model:num="num" v-model:direction="direction3" v >
        <template v-slot:text>dasda</template>
      </sy-DialogNotice>
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
      bounced: false,
    });
    return {
      ...toRefs(data),
    };
  },
});
</script>

<style scoped lang='scss'>
</style>