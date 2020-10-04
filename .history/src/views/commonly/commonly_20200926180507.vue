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
      <button @click="add">增加</button>
      <button>减少</button>
      <button>设置</button>
      <button>重置</button>
      <button>延迟加</button>
      <button>延迟减</button>
      <button>按数量加</button>
      <button>按数量减</button>
    </div>
  </a-card>
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
    //增加
    let add = () => {
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
      add
    };
  },
});
</script>

<style scoped lang='scss'>
</style>