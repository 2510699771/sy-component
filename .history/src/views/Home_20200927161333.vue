<template>
  <div style="height: 100vh">
    <a-layout>
      <a-layout-sider>
        <a-menu id="dddddd" v-model:selectedKeys="selectedKeys" theme="theme">
          <a-menu-item
            v-for="item in $router.options.routes[0].children"
            :key="item.path"
            @click="goto(item.path)"
          >
            <component :is="item.meta.icon"></component>
            <span>{{ item.meta.title }}</span>
          </a-menu-item>
        </a-menu></a-layout-sider
      >
      <a-layout-content style="background-color: white">
        <router-view />
      </a-layout-content>
    </a-layout>
  </div>
</template>

<script lang='ts'>
import { useRoute, useRouter } from "vue-router";
import {
  defineComponent,
  reactive,
  toRefs,
  SetupContext,
  onMounted,
} from "vue";
interface Data {
  selectedKeys: string[];
}
export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup(props, ctx: SetupContext) {
    let data: Data = reactive<Data>({
      selectedKeys: [],
    });
    let route = useRoute();
    let router = useRouter();
    onMounted(() => {
      data.selectedKeys.push(route.path);
    });
    let goto = (item: any) => {
      router.push(item);
    };
    return {
      ...toRefs(data),
      goto,
    };
  },
});
</script>

<style scoped lang='scss'>
.ant-layout-content {
  background-color: white;
}
</style>