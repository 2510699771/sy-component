<template>
  <div>
    <a-layout>
      <a-layout-sider>
        <a-menu
          id="dddddd"
          style="width: 256px"
          v-model:selectedKeys="selectedKeys"
        >
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
      <a-layout-content>Content</a-layout-content>
    </a-layout>

    <router-view />
  </div>
</template>

<script lang='ts'>
import { useRoute, useRouter } from "vue-router";
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
interface Data {
  selectedKeys: string[];
}
export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup(props, ctx: SetupContext) {
    let data: Data = reactive<Data>({
      selectedKeys: ["/"],
    });
    let route = useRoute();
    let router = useRouter();

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
#components-layout-demo-basic {
  text-align: center;
}
#components-layout-demo-basic .ant-layout-header,
#components-layout-demo-basic .ant-layout-footer {
  background: #7dbcea;
  color: #fff;
}
#components-layout-demo-basic .ant-layout-footer {
  line-height: 1.5;
}
#components-layout-demo-basic .ant-layout-sider {
  background: #3ba0e9;
  color: #fff;
  line-height: 120px;
}
#components-layout-demo-basic .ant-layout-content {
  background: rgba(16, 142, 233, 1);
  color: #fff;
  min-height: 120px;
  line-height: 120px;
}
#components-layout-demo-basic > .ant-layout {
  margin-bottom: 48px;
}
#components-layout-demo-basic > .ant-layout:last-child {
  margin: 0;
}
</style>