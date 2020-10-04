<template>
  <div>
    <div>{{ x }}--{{ y }}</div>
    <div>{{ time }}</div>
    <div>{{ date }}</div>
    <div
      style="width: 50px; height: 50px; border: 1px solid red"
      @click="save"
    ></div>
    <div
      style="width: 50px; height: 50px; border: 1px solid red"
      @click="get"
    ></div>
  </div>
</template>

<script lang='ts'>
import { useMouse } from "@/hooks/useMouse";
import { useDate } from "@/hooks/useDate";
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
interface Data {
  name: any;
}
export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup(props, ctx: SetupContext) {
    let data: Data = reactive<Data>({
      name: [{ num: "jace" }, { num: "tom" }, { num: "sony" }, { num: "bile" }],
    });
    let { x, y } = useMouse();
    let { date } = useDate();
    let save = () => {
      JSON.stringify(localStorage.setItem("data", data.name));
    };
    let get = () => {
      JSON.parse(localStorage.getItem("data"));
    };
    return {
      ...toRefs(data),
      date,
      x,
      y,
      save,
      get,
    };
  },
});
</script>

<style scoped lang='scss'>
</style>