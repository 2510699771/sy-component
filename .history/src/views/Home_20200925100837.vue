<template>
  <div>
    <div>{{ x }}--{{ y }}</div>
    <div>{{ time }}</div>
    <div>{{ date }}</div>
    <div
      style="width: 50px; height: 50px; border: 1px solid red"
      @click="save"
    ></div>
  </div>
</template>

<script lang='ts'>
import { useMouse } from "@/hooks/useMouse";
import { useDate } from "@/hooks/useDate";
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
interface Data {
  name: [{ num: "jace" }, { num: "tom" }, { num: "sony" }, { num: "bile" }];
}
export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup(props, ctx: SetupContext) {
    let data: Data = reactive<Data>({});
    let { x, y } = useMouse();
    let { date } = useDate();
    let save = () => {
      localStorage.setItem("data", data.name);
    };
    return {
      ...toRefs(data),
      date,
      x,
      y,
      save,
    };
  },
});
</script>

<style scoped lang='scss'>
</style>