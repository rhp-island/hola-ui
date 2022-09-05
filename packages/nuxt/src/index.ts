import { h, defineComponent, PropType } from '@vue/runtime-core'

const AtomicNuxtModule = defineComponent({
  props: {
    as: {
      type: String as PropType<string>,
      default: 'div',
    },
  },
  render() {
    return h(this?.as, { ...this.$props, ...this.$attrs }, this.$slots.default)
  },
})

export default AtomicNuxtModule
