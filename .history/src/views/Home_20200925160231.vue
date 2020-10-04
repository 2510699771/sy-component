<template>
  <div>
    <a-menu
      id="dddddd"
      style="width: 256px"
      v-model:selectedKeys="selectedKeys"
    >
      <a-menu-item
        v-for="item in $router.options.routes[0].children"
        :key="item.path"
      >
        <component :is="item.meta.icon"></component>
        <span>{{ item.meta.title }}</span>
      </a-menu-item>
    </a-menu>
  </div>

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
  selectedKeys: string[];
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
      selectedKeys: ["/"],
    });
    let route = useRoute();
    let router = useRouter();
    let { x, y } = useMouse();
    let { date } = useDate();
    let { getMessage, setMessage, cleanMessage } = useLocalstory();
    //存
    let save = () => {
      setMessage("data", data.name);
      console.log(router.options.routes[0].children);
    };
    //取
    let get = () => {
      data.a = getMessage("data");
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