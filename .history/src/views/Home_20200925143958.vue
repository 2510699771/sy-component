<template>
  <div>
    <div>{{ x }}--{{ y }}</div>
    <div>{{ time }}</div>
    <div>{{ date }}</div>
    <span>{{ a }}</span> <button @click="get">取localStore</button>
    <button @click="save">存localStore</button>
    <button @click="clean">清除localStore</button>
  </div>
</template>

<script lang='ts'>
import { useRoute, useRouter } from "vue-router";
import { useMouse } from "@/hooks/useMouse";
import { useDate } from "@/hooks/useDate";
import { useLocalstory } from "@/hooks/useStorge";
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
interface Data {
  name: ooo[];
  nam: string[];
  a: any;
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
      nam: ["jace", "tom", "sony", "bile"],
      a: "",
    });
    let route = useRoute();
    let { x, y } = useMouse();
    let { date } = useDate();
    let { getMessage, setMessage, cleanMessage } = useLocalstory();
    //存
    let save = () => {
      setMessage("data", data.name);
      data.a = data.name;
      console.log(route);
    };
    //取
    let get = () => {
      console.log("取");
      data.a = JSON.parse(getMessage("data"));
      console.log(data.a);
    };
    //清除
    let clean = () => {
      cleanMessage("data");
      data.a = "";
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
      clean,
    };
  },
});
</script>

<style scoped lang='scss'>
</style>