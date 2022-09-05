import { h, defineComponent, PropType } from '@vue/runtime-core'

const AButton = defineComponent({
  props: {
    as: {
      type: Object as PropType<string>,
      default: 'button',
    },
  },
  render() {
    return h(
      this?.as,
      { ...this.$props, ...this.$attrs },
      this.$slots.default && this.$slots.default()
    )
  },
})

export default AButton
