<template>
  <a-card>
    <div>
      <h2>鼠标移动的坐标</h2>
      <div>{{ x }}--{{ y }}</div>

      <h2 style="margin-top: 40px">倒计时</h2>
      <div>{{ time }}</div>
      
      <div>{{ date }}</div>
      <span>{{ a }}</span> <button @click="get">取localStore</button>
      <button @click="save">存localStore</button>
      <button @click="clean">清除localStore</button>
    </div></a-card
  >
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
    let { x, y } = useMouse();
    let { date } = useDate();
    let { getMessage, setMessage, cleanMessage } = useLocalstory();
    //存
    let save = () => {
      setMessage("data", data.name);
    };
    //取
    let get = () => {
      data.a = getMessage("data");
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