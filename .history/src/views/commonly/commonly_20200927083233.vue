<template>
  <a-card>
    <div>
      <h2>鼠标移动的坐标</h2>
      <div>{{ x }}--{{ y }}</div>

      <h2 style="margin-top: 40px">倒计时</h2>
      <div>{{ date }}</div>

      <h2 style="margin-top: 40px">本地储存</h2>
      <span>{{ a }}</span>
      <button @click="get">取localStore</button>
      <button style="margin-left: 10px" @click="save">存localStore</button>
      <button style="margin-left: 10px" @click="clean">清除localStore</button>

      <h2 style="margin-top: 40px">计数器</h2>
      {{ cuent }}
      <button @click="add">增加</button>
      <button @click="del">减少</button>
      <button @click="set">设置</button>
      <button @click="red">重置</button>
      <button @click="timeout">延迟加</button>
      <button @click="timedel">延迟减</button>
      <button @click="stepad">按数量加</button>
      <button @click="stepde">按数量减</button>
    </div>
  </a-card>
</template>

<script lang='ts'>
import { useCounter } from "@/hooks/useCount";
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
    let {
      cuent,
      addNum,
      delNum,
      setUp,
      reset,
      delayAdd,
      delayDel,
      stepAdd,
      stepDel,
    } = useCounter({ current: 0, step: 5 });
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
    //增加
    let add = () => {
      addNum();
    };
    //减少
    let del = () => {
      delNum();
    };
    //设置
    let set = () => {
      setUp(50);
    };
    //重置
    let red = () => {
      reset();
    };
    //延迟加
    let timeout = () => {
      delayAdd();
    };
    //延迟减
    let timedel = () => {
      delayDel();
    };
    //按步数加
    let stepad = () => {
      stepAdd();
    };
    //按步数减
    let stepde = () => {
      stepDel();
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
      del,
      timedel,
      stepde,
      add,
      red,
      stepad,
      timeout,
      set,
      cuent,
      addNum,
      delNum,
      setUp,
      reset,
      delayAdd,
      delayDel,
      stepAdd,
      stepDel,
    };
  },
});
</script>

<style scoped lang='scss'>
</style>