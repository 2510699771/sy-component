<template>
 <div>
    <a-menu
      id="dddddd"
      style="width: 256px"
      v-model:openKeys="openKeys"
      v-model:selectedKeys="selectedKeys"
      mode="inline"
      @click="handleClick"
    >
      <a-sub-menu key="sub1" @titleClick="titleClick">
        <template v-slot:title>
          <span><MailOutlined /><span>Navigation One</span></span>
        </template>
        <a-menu-item-group key="g1">
          <template v-slot:title><QqOutlined /><span>Item 1</span></template>
          <a-menu-item key="1">Option 1</a-menu-item>
          <a-menu-item key="2">Option 2</a-menu-item>
        </a-menu-item-group>
        <a-menu-item-group key="g2" title="Item 2">
          <a-menu-item key="3">
            Option 3
          </a-menu-item>
          <a-menu-item key="4">
            Option 4
          </a-menu-item>
        </a-menu-item-group>
      </a-sub-menu>
      <a-sub-menu key="sub2" @titleClick="titleClick">
        <template v-slot:title>
          <span><AppstoreOutlined /><span>Navigation Two</span></span>
        </template>
        <a-menu-item key="5">Option 5</a-menu-item>
        <a-menu-item key="6">Option 6</a-menu-item>
        <a-sub-menu key="sub3" title="Submenu">
          <a-menu-item key="7">
            Option 7
          </a-menu-item>
          <a-menu-item key="8">
            Option 8
          </a-menu-item>
        </a-sub-menu>
      </a-sub-menu>
      <a-sub-menu key="sub4">
        <template v-slot:title>
          <span><SettingOutlined /><span>Navigation Three</span></span>
        </template>
        <a-menu-item key="9">Option 9</a-menu-item>
        <a-menu-item key="10">Option 10</a-menu-item>
        <a-menu-item key="11">Option 11</a-menu-item>
        <a-menu-item key="12">Option 12</a-menu-item>
      </a-sub-menu>
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