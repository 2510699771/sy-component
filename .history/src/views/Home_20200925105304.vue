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
import { useLocalstory } from "@/hooks/useStorge";
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
interface Data {
  name: ooo[];
}
interface ooo {
  num: string;
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
    let { getMessage, setMessage, cleanMessage } = useLocalstory();
    let save = () => {
      //localStorage.setItem("data", data.name);
    };
    let get = () => {
      let a = localStorage.getItem("data")!;
      console.log(a);
    };
    return {
      ...toRefs(data),
      date,
      x,
      y,
      save,
      get,
      getMessage,
      setMessage,
      cleanMessage,
    };
  },
});
</script>

<style scoped lang='scss'>
</style>