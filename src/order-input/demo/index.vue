<template>
  <demo-block title="基础用法">
    <div class="color-white p12">
      <order-input v-model="base" placeholder="请输入克重" unit="嘿"/>
    </div>
  </demo-block>

  <demo-block title="倍数校验">
    <div class="color-white p12">
      <order-input class="mb8" v-model="value2" show-error multiple="0.213" placeholder="请输入0.213 的整数倍"/>
      <order-input class="mb8" v-model="value3" show-error multiple="3" placeholder="请输入3的整数倍"/>
      <order-input class="mb8" v-model="value5" show-error multiple="5" placeholder="请输入5的整数倍"/>
    </div>
    
  </demo-block>
  
  <demo-block title="最大值">
    <div class="color-white p12">
      <order-input v-model="max" max="1960" placeholder="最大输入1960"/>
    </div>
  </demo-block>
  
  <demo-block title="小数位数">
    <div class="color-white p12">
      <order-input v-model="decimal" class="mb8" :decimal="0" placeholder="只能输入整数" unit="hhh"/>
      <order-input v-model="decimal1" class="mb8" :decimal="1" placeholder="最多1位小数"/>
      <order-input v-model="decimal2" class="mb8" :decimal="2" placeholder="最多2位小数"/>
    </div>
  </demo-block>
  
  <demo-block title="校验">
    <div class="color-white p12">
      <order-input v-model="value" v-model:isPass="pass" is-required multiple="5" show-error placeholder="校验倍数"/>
      
      <gm-button :disabled="!pass" @click="onClick">校验</gm-button>
    </div>
  </demo-block>
</template>
<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      max: ref(''),
      value2: ref(''),
      value3: ref(''),
      value5: ref(''),
      decimal: ref(''),
      decimal1: ref(''),
      decimal2: ref(''),
      base: ref(''),
      pass: ref(false),
      value: ref(''),
      onClick ()  {
        alert('校验通过')
      }
    }
  }
}
</script>
<style lang="less">
@import "../../style/color";
.mb8 {
  margin-bottom: 8px;
}
.p12 {
  padding: 12px;
}

</style>

