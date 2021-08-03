# OrderInput 校验输入框

### 介绍

OrderInput 是一个业务输入组件

### 引入

```js
import Vue from 'vue';
import { OrderInput } from 'gm-ui';

Vue.use(OrderInput);
```

## 代码演示

### 基础用法
可以通过 v-model 双向绑定输入框的值，通过 placeholder 设置占位提示文字，通过 unit 设置单位。
```html
<order-input v-model="value" placeholder="请输入克重" unit="嘿"/>
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const value = ref('');
    return { value };
  },
};
```
### 校验整数倍
根据 multiple 属性校验输入值的整数倍。
```html
<order-input v-model="value2" multiple="0.2" placeholder="请输入0.2的整数倍"/>
<order-input v-model="value3" multiple="3" placeholder="请输入3的整数倍"/>
<order-input v-model="value4" multiple="5" placeholder="请输入5的整数倍"/>
```

```js
import { ref } from 'vue';

export default {
  setup() {
    return { 
      value2: ref(''),
      value3: ref(''),
      value5: ref('') 
    }
  },
};
```

### 最大值
根据 max 属性限制输入最大值。
```html
<order-input v-model="max" max="1960" placeholder="最大输入1960"/>
```

```js
import { ref } from 'vue';

export default {
  setup() {
    return { 
      max: ref(''),
    }
  },
};
```
### 最大小数位数
根据 decimal 属性限制最大小数位数。
```html
<order-input v-model="decimal" :decimal="0" placeholder="只能输入整数"/>
<order-input v-model="decimal1" :decimal="1" placeholder="最多1位小数"/>
<order-input v-model="decimal2" :decimal="2" placeholder="最多2位小数"/>
```

```js
import { ref } from 'vue';

export default {
  setup() {
    return { 
      decimal: ref(''),
      decimal1: ref(''),
      decimal2: ref('') 
    }
  },
};
```
### 校验
根据 v-model:isPass 获取校验是否通过。is-required 属性校验是否必填
```html
<order-input v-model="value" v-model:isPass="pass" is-required multiple="5" placeholder="校验倍数"/>

<gm-button :disabled="!pass">通过</gm-button>
```

```js
import { ref } from 'vue';

export default {
  setup() {
    return { 
      value: ref(''),
      pass: ref(false)
    }
  },
};
```

## API

### Props

| 参数         | 说明     | 类型     | 默认值    |
| ----------- | -------- | -------- | --------- |
| v-model     | 当前输入的值 | _number \| string_ | - |
| v-model:isPass | 校验是否通过 | _boolean_ | - |
| placeholder | 输入框占位提示文字 | _string_ | - |
| max | 输入的最大数值 | _number \| string_ | - |
| min | 输入的最小数值 | _number \| string_ | - |
| show-error | 是否显示提示文本 | _boolean_ | `false` |
| multiple | 校验倍数 | _number \| string_ | - |
| decimal | 最大保留小数位数 | _number_ | - |
| is-required | 是否必填 | _boolean_ | - |
| unit | 单位 | _string_ | 克 |

### Events

| 事件名 | 说明       | 回调参数            |
| ------ | ---------- | ------------------- |
| blur  | 输入框失去焦点时触发 | _event: MouseEvent_ |

### Slots

| 名称    | 说明     |
| ------- | -------- |
| error | 错误提示插槽 |
