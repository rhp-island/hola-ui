import {
  h,
  defineComponent,
  Fragment,
  PropType,
  provide,
  inject,
  computed,
} from '@vue/runtime-core'
import { ThemeProviderProps } from '@hola-ui/vue'

const AThemeProvider = defineComponent({
  name: 'CAlert',
  props: {
    value: {
      type: [Object] as PropType<ThemeProviderProps>,
      default: () => undefined,
    },
  },
  setup(props, { slots }) {
    const pluginTheme = inject('$holaTheme')
    const applicationTheme = computed(() => props.value || pluginTheme)
    provide('$holaTheme', applicationTheme.value)
    return () => h(Fragment, slots.default?.({ $holaTheme: props.value }))
  },
})

export default AThemeProvider
