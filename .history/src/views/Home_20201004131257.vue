<template>

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
</style>