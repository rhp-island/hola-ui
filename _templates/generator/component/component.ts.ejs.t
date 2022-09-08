---
to: packages/<%=h.changeCase.paramCase(name)%>/src/<%=h.changeCase.paramCase(name)%>.ts
---
/**
 * Hey! Welcome to @hola-ui/vue <%= h.changeCase.pascalCase(name) %>
 *
 *
 * @see Source   https://github.com/rhp-island/hola-ui/blob/main/packages/<%=h.changeCase.paramCase(name)%>/src/<%=h.changeCase.paramCase(name)%>/<%=h.changeCase.paramCase(name)%>.ts
 * @see WAI-ARIA https://www.w3.org/TR/wai-aria-practices-1.2
 */

import { h, defineComponent, PropType } from '@vue/runtime-core'
import { hola, DOMElements } from '@hola-ui/system'

export const <%= h.changeCase.pascalCase(name) %> = defineComponent({
  props: {
    as: {
      type: [Object, String] as PropType<DOMElements>,
      default: 'div',
    },
  },
  setup(props, { slots, attrs }) {
    return () => h(hola(props.as), { ...attrs }, slots)
  },
})
