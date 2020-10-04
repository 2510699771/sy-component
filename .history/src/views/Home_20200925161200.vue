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
        @click="goto(item.path)"
      >
        <component :is="item.meta.icon"></component>
        <span>{{ item.meta.title }}</span>
      </a-menu-item>
    </a-menu>
  </div>
</template>

<script lang='ts'>
import { useRoute, useRouter } from "vue-router";
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
interface Data {
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
</style>