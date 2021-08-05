<!--
 *Author: Smiledpeace
-->
<template>
  <demo-block title="基础用法">
    <div class="bg p12">
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
    <div class="bg p12">
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
    <div class="bg-white p12">
      <coupon
        class="mb8"
        state="可交易"
        amount="0.3"
        is-check-box
        v-model="checked"
        @change="onChange"
        title="卖金优惠券"
        expired="2020.05.21-2021.06.31"
        border
      />
    </div>
  </demo-block>

  <demo-block title="参数变化">
    <div class="bg-white p12">
      <coupon
        state="可成交"
        amount="0.5"
        symbol="-"
        btn-text="去消费"
        title="卖金优惠券"
        unit="元/g"
        expired="2020.05.21-2021.06.31"
        border
        @click="onClick"
      />
    </div>
  </demo-block>

  <demo-block title="disable状态">
    <div class="bg-white p12">
      <coupon
        state="可成交"
        amount="0.5"
        symbol="-"
        btn-text="去消费"
        title="卖金优惠券"
        unit="元/g"
        expired="2020.05.21-2021.06.31"
        border
        disabled
        is-check-box
        @click="onClick"
      />
    </div>
  </demo-block>

  <demo-block title="不显示按钮">
    <div class="bg-gold p12">
      <coupon
        state="可成交"
        amount="0.5"
        symbol="-"
        btn-text="去消费"
        title="卖金优惠券"
        unit="元/g"
        expired="2020.05.21-2021.06.31"
        mask-color="#FFF7EA"
        :show-button="false"
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
.bg {
  background-color: #ebedf0;
}
.bg-white {
  background-color: #fff;
}
.mb8 {
  margin-bottom: 8px;
}
.p12 {
  padding: 12px;
}
.bg-gold {
  background: linear-gradient(137deg, #fff7ea 0%, #ffeccd 100%);
}
</style>
