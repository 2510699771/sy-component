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
    <h3>弹出菜单在下面</h3>
    <div style="margin-left: 100px">
      <sy-DialogNotice v-model:num=9" v-model:direction="bottom">
        <template v-slot:text
          >ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd</template
        >
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
}
export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup(props, ctx: SetupContext) {
    let data: Data = reactive<Data>({
      num: 99,
      num1: 10,
      direction: "top",
      direction1: "bottom",
    });
    return {
      ...toRefs(data),
    };
  },
});
</script>

<style scoped lang='scss'>
</style>