<template>
  <div>
    <label
      class="add-label"
      :data-unit="unit"
      :class="{ error: error.multiple }"
    >
      <input
        class="add-weight"
        type="number"
        inputmode="decimal"
        :value="modelValue"
        :placeholder="placeholder"
        @input="onInput"
        @blur="onBlur"
      />
    </label>

    <slot name="error">
      <div class="error-tip" v-if="showError && error.text">
        {{ error.text }}
      </div>
    </slot>
  </div>
</template>

<script>
import { reactive } from 'vue';

export default {
  name: 'OrderInput',
  props: {
    modelValue: [Number, String],
    placeholder: String,
    unit: {
      type: String,
      default: '克',
    },
    multiple: [String, Number], // 判断输入重量是不是整数倍
    decimal: [String, Number], // 小数位数
    max: [String, Number], // 最大值
    min: [String, Number], // 最小值
    showError: Boolean,
    isRequired: Boolean, // 是否必填
  },
  emits: ['update:modelValue', 'update:isPass', 'blur'],
  setup(props, { emit }) {
    // 检查
    const error = reactive({
      text: '',
      multiple: false,
    });

    function getDecimal(num) {
      if (Number.isInteger(+num)) {
        return 0;
      }
      const strfi = num + ''; // 转为字符串
      const dotPos = strfi.indexOf('.');
      return strfi.substr(dotPos + 1).length; // 拿到小数点之后的位数
    }
    // 获取整数
    function toInteger(num, decimalLen) {
      const isNegative = num < 0; // 是否是小数
      const times = 10 ** decimalLen; // 精度倍数
      let intNum = parseInt(Math.abs(num) * times + 0.5, 10);
      if (isNegative) {
        intNum = -intNum;
      }
      return intNum;
    }
    // 是整数倍
    function isMultiple(n1, n2) {
      const decimal = Math.max(getDecimal(n1), getDecimal(n2));
      const o1 = toInteger(n1, decimal);
      const o2 = toInteger(n2, decimal);
      console.log(o1, o2);
      return o1 % o2 === 0;
    }

    function triggerValidate(val) {
      const result = {
        msg: '',
        multipleError: false,
      };

      if (props.isRequired && !val) {
        result.msg = props.placeholder;
      } else if (val < props.min) {
        result.msg = `最小克重为${props.min}`;
      } else if (props.multiple && !isMultiple(val, props.multiple)) {
        result.msg = `请输入${props.multiple}的整数倍`;
        result.multipleError = true;
      }

      if (result.msg) {
        emit('update:isPass', false);
      } else {
        emit('update:isPass', true);
      }

      error.text = result.msg;
      error.multiple = result.multipleError;
    }
    // model
    function onInput(evt) {
      const { value } = evt.target;
      let result = value;
      // 最大展示几位小数
      const decimal = value.split('.');
      if (decimal.length === 2 && decimal[1].length > props.decimal) {
        if (props.decimal === 0) {
          result = decimal[0];
        } else {
          result = `${decimal[0]}.${decimal[1].slice(0, props.decimal)}`;
        }
      }

      // 最大值处理
      if (result > +props.max) {
        result = props.max;
      }
      emit('update:modelValue', result);
      // console.log(evt)
      evt.target.value = result;

      triggerValidate(result);
    }

    // function
    function onBlur(evt) {
      emit('blur', evt);
    }

    return { onInput, onBlur, error };
  },
};
</script>

<style lang="less" rel="stylesheet/less" scoped>
@import '../style/var';
.add-label {
  display: flex;
  line-height: 20px;
  position: relative;
  border: 1px solid transparent;
  box-sizing: border-box;
  transition: border-color 0.25s linear;
  border-radius: 4px;
  overflow: hidden;
  &::after {
    content: attr(data-unit);
    position: absolute;
    right: 12px;
    bottom: 10px;
    color: #646566;
  }

  &.error {
    border-color: var(--color-primary);
  }
}

.add-weight {
  background: #f7f8fa;
  padding: 10px 0;
  flex: 1 1 0;
  text-align: center;
  font-size: 22px;
  border: none;
  &:focus {
    outline-color: transparent;
  }
  &::placeholder {
    opacity: 0.3;
  }
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
input[type='number'] {
  -moz-appearance: textfield;
}
.error-tip {
  font-size: 12px;
  color: var(--color-error);
  line-height: 24px;
}
</style>
