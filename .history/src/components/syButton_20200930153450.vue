<template>
  <div>
    <!-- 一个有意思的按钮 -->
    <div class="button" @click="button">
      <p>Click me</p>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
interface Data {}
export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup(props, ctx: SetupContext) {
    let data: Data = reactive<Data>({});

    let button=()=>{

    }
    
    return {
      ...toRefs(data),
      button
    };
  },
});
</script>

<style scoped lang='scss'>
body {
  background: #f1c40f;
}

.button {
  background: #3498db;
  width: 180px;
  padding: 4px 0;

  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  border-radius: 3px;

  p {
    font-family: "Roboto";
    text-align: center;
    text-transform: uppercase;
    color: #fff;
    user-select: none;
  }

  &:hover {
    cursor: pointer;
  }

  &:after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 10%;
    border-radius: 50%;
    background-color: darken(#f1c40f, 20%);
    opacity: 0.4;
    bottom: -30px;
  }
}
</style>