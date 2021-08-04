<!--
 *Author: Smiledpeace
-->
<template>
  <label class="coupon" :class="{ checked: modelValue }">
    <div class="coupon-left">
      <div class="coupon-offer">
        <span class="coupon-symbol">{{ symbol }}</span>
        <span class="coupon-amount">{{ amount }}</span>
      </div>
      <div class="coupon-unit">单位：{{ unit }}</div>
    </div>
    <div class="coupon-mask" :class="{ checked: modelValue }">
      <div class="coupon-mask--line"></div>
    </div>
    <div class="coupon-right">
      <div class="coupon-info">
        <h3 class="coupon-title" :class="{ mb4: !describe }">{{ title }}</h3>
        <div class="coupon-describe" :class="{ describe: describe }">
          {{ describe }}
        </div>
        <div class="coupon-expired">{{ expired }}</div>
      </div>
      <!--   是否使用check   -->
      <template v-if="isCheckBox">
        <input
          type="checkbox"
          class="coupon-input-checkbox"
          @change="onChange"
          :value="modelValue"
          :disabled="disabled"
        />
        <span class="coupon-checkbox" :class="{ checked: modelValue }"></span>
      </template>

      <button class="coupon-btn" @click="onClick" v-else>{{ btnText }}</button>
    </div>

    <span class="coupon-state" v-if="state">{{ state }}</span>
  </label>
</template>

<script>
export default {
  name: 'Coupon',
  components: {},
  props: {
    amount: [String, Number],
    title: String,
    expired: String,
    state: String,
    describe: String,
    symbol: {
      type: String,
      default: '+',
    },
    unit: {
      type: String,
      default: '元/克',
    },
    btnText: {
      type: String,
      default: '去使用',
    },
    isCheckBox: Boolean,
    modelValue: Boolean,
    disabled: Boolean,
  },
  emits: ['update:modelValue', 'change', 'click'],
  setup(props, { emit }) {
    // checkbox change
    function onChange(evt) {
      emit('update:modelValue', evt.target.checked);
      emit('change', evt.target.checked);
    }
    // click 点击
    function onClick(evt) {
      emit('click', evt);
    }

    return {
      onChange,
      onClick,
    };
  },
};
</script>

<style lang="less" rel="stylesheet/less" scoped>
@activity-color: rgba(195, 37, 45, 0.05);
.flex-column-center() {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.coupon {
  display: flex;
  height: 82px;
  border-radius: 6px;
  position: relative;
  overflow: hidden;
  background-color: var(--color-white);
  font-family: var(--family);
  &::after {
    content: '';
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 1px solid #eee;
    border-radius: 6px;
    transition: all 0.3s ease;
  }
  &.checked {
    &::after {
      background-color: @activity-color;
      border-color: @activity-color;
    }
  }
}
// 左侧
.coupon-left {
  width: 98px;
  align-items: center;
  .flex-column-center();
}
.coupon-offer {
  margin-bottom: 4px;
}
// 符号
.coupon-symbol {
  color: var(--color-primary);
  font-size: 18px;
  font-weight: 800;
  line-height: 25px;
  margin-right: 2px;
}
// 金额
.coupon-amount {
  color: var(--color-primary);
  font-family: var(--family-number-heavy);
  font-size: 32px;
  font-weight: normal;
  line-height: 36px;
}
.coupon-unit,
.coupon-expired,
.coupon-describe {
  font-size: 12px;
  font-weight: 400;
  color: var(--color-sub);
  line-height: 17px;
}
// 遮罩
.coupon-mask {
  width: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 0;
  position: relative;
  z-index: 2;
  &--line {
    border-left: 1px #ddd dashed;
    height: 100%;
  }

  &::before,
  &::after {
    content: '';
    width: 12px;
    height: 12px;
    position: absolute;
    border-radius: 50%;
    border: 1px solid rgba(221, 221, 221, 0.5);
    background-color: #fff;
    transition: all 0.3s ease;
  }
  &::before {
    top: -6px;
  }
  &::after {
    bottom: -6px;
  }

  &.checked {
    &::before,
    &::after {
      border-color: rgba(195, 37, 45, 0.1);
    }
  }
}

// 右侧
.coupon-right {
  flex: 1 1 0;
  overflow: hidden;
  position: relative;
  z-index: 2;
  display: flex;
  margin-left: 6px;
  margin-right: 12px;
  align-items: center;
}

.coupon-describe {
  &.describe {
    margin-top: 2px;
    margin-bottom: 2px;
  }
}
.coupon-info {
  flex: 1 1 0;
  overflow: hidden;
  .flex-column-center();
}
.coupon-title {
  font-size: 14px;
  font-family: var(--family-medium);
  font-weight: 500;
  color: #333;
  line-height: 20px;
  &.mb4 {
    margin-bottom: 4px;
  }
}
.coupon-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-primary);
  padding: 6px 12px;
  border-radius: 100px;
  box-sizing: border-box;
  height: 28px;
  border: none;
  font-size: 12px;
  font-weight: 400;
  color: var(--color-white);
  line-height: 16px;
}
.coupon-state {
  height: 14px;
  background: #fe6632;
  border-radius: 0 6px 0 6px;
  padding: 1px 4px;
  font-size: 12px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.9);
  line-height: 14px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
}
.coupon-checkbox {
  display: block;
  background-image: url('https://gm-itrade-1255882558.cos.ap-guangzhou.myqcloud.com/GM_ITRADE/base/20210803/175212ncex89.svg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 16px;
  height: 16px;
  &.checked {
    background-image: url('https://gm-itrade-1255882558.cos.ap-guangzhou.myqcloud.com/GM_ITRADE/base/20210803/1752121jyuum.svg');
  }
}

.coupon-input-checkbox {
  position: absolute;
  visibility: hidden;
  &:disabled + .coupon-checkbox {
    opacity: 0.3;
  }
}
</style>
