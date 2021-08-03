<!--
 *Author: Smiledpeace
-->
<template>
  <button class="gm-btn" @click="onClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'GmButton',
  components: {},
  props: {},
  emits: ['click'],
  setup(props, { emit }) {
    const onClick = (event) => {
      emit('click', event);
    };
    
    return {
      onClick
    }
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>

</style>
