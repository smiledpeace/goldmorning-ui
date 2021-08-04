# Coupon 优惠券

### 介绍

Coupon 是一个业务优惠券

### 引入

```js
import Vue from 'vue';
import { Coupon } from 'goldmorning-ui';

Vue.use(Coupon);
```

## 代码演示

### 基础用法

```html
<coupon
  amount="0.4"
  title="卖金优惠券"
  expired="2020.05.21-2021.06.31"
  describe="最高20克，第1单可用"
/>
```

### 可交易状态

```html
<coupon
  state="可交易"
  amount="0.4"
  title="卖金优惠券"
  expired="2020.05.21-2021.06.31"
/>
```

### isCheckBox

```html
<coupon
  state="可交易"
  is-check-box
  v-model="checked"
  @change="onChange"
  amount="0.4"
  title="卖金优惠券"
  expired="2020.05.21-2021.06.31"
/>
```

```js
import { ref } from 'vue';

export default {
  setup() {
    function onChange(checked) {
      console.log(checked);
    }
    return {
      checked: ref(''),
      onChange,
    };
  },
};
```

### 参数变化

border 属性主要针对选择和展示界面。默认为展示的状态。选择界面需要将 border 设置为 true。

```html
<coupon
  state="可成交"
  amount="0.5"
  symbol="-"
  btn-text="去消费"
  title="卖金优惠券"
  unit="元/g"
  expired="2020.05.21-2021.06.31"
  border
/>
```

### 不显示按钮

默认展示按钮，设置 show-button 为 false 则不展示。

```html
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
```

## API

### Props

| 参数        | 说明               | 类型               | 默认值  |
| ----------- | ------------------ | ------------------ | ------- |
| title       | 优惠券的描述       | _string_           | -       |
| amount      | 优惠金额           | _number \| string_ | -       |
| symbol      | 优惠符号 是+还是-  | _string_           | +       |
| unit        | 单位               | _string_           | 元/克   |
| describe    | 描述               | _string_           | -       |
| expired     | 有效时间           | _string_           | -       |
| state       | 优惠券状态         | _string_           | -       |
| border      | 是否显示框线       | _boolean_          | `false` |
| show-button | 是否显示框线       | _boolean_          | `true`  |
| btnText     | 按钮文案           | _string_           | 去使用  |
| v-model     | 当 CheckBox 时使用 | _boolean_          | -       |
| isCheckBox  | 是否为 checkbox    | _boolean_          | -       |
| disabled    | 是否禁用 checkbox  | _boolean_          | 克      |

### Events

| 事件名 | 说明               | 回调参数                 |
| ------ | ------------------ | ------------------------ |
| change | 当 CheckBox 时触发 | _checked: false \| true_ |
| click  | 点击按钮时触发     | _event: MouseEvent_      |
