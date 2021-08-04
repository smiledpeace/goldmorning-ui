<!--
 *Author: Smiledpeace
-->
<template>
  <demo-block title="基础用法">
    <div class="color-white p12">
      <coupon
        unit="嘿"
        amount="0.4"
        title="卖金优惠券"
        expired="2020.05.21-2021.06.31"
        describe="最高20克，第1单可用"
      />
    </div>
  </demo-block>

  <demo-block title="可交易状态">
    <div class="color-white p12">
      <coupon
        class="mb8"
        state="可交易"
        amount="0.3"
        title="卖金优惠券"
        expired="2020.05.21-2021.06.31"
      />
    </div>
  </demo-block>

  <demo-block title="isCheckBox">
    <div class="color-white p12">
      <coupon
        class="mb8"
        state="可交易"
        amount="0.3"
        is-check-box
        v-model="checked"
        @change="onChange"
        title="卖金优惠券"
        expired="2020.05.21-2021.06.31"
      />
    </div>
  </demo-block>

  <demo-block title="参数变化">
    <div class="color-white p12">
      <coupon
        state="可成交"
        amount="0.5"
        symbol="-"
        btn-text="去消费"
        title="卖金优惠券"
        unit="元/g"
        expired="2020.05.21-2021.06.31"
      />
    </div>
  </demo-block>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'CouponDemo',
  props: {},
  setup() {
    const checked = ref(false);
    function onChange(res) {
      console.log(res);
    }
    function onClick(res) {
      console.log(res);
    }
    return {
      checked,
      onChange,
      onClick,
    };
  },
};
</script>

<style lang="less" rel="stylesheet/less" scoped>
@import '../../style/base';
.mb8 {
  margin-bottom: 8px;
}
.p12 {
  padding: 12px;
}
</style>
