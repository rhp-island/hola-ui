import { defineComponent, h } from '@vue/runtime-core'
import { extractStyleAttrs } from './system.attrs'
import { domElements, DOMElements } from './system.utils'
import { css as _css, cx } from '@emotion/css'
import { css } from '@hola-ui/styled-system'
import theme from '@hola-ui/theme'

/**
 * Creates a Hola UI Vue component
 * @param tag Tag
 * @param componentProps Component Props
 */
// @ts-ignore
export const hola: IHolaFactory = (
  tag: DOMElements,
  componentProps = {}
): any => {
  return defineComponent({
    inheritAttrs: false,
    props: componentProps,
    setup(props, { slots, attrs }) {
      const { class: inheritedClass, ...rest } = attrs
      const { styles, attrs: _attrs } = extractStyleAttrs(rest)

      const className = _css(css(styles)({ theme }))

      return () =>
        h(
          tag,
          {
            class: cx(inheritedClass as string, className),
            ...props,
            ..._attrs,
          },
          slots
        )
    },
  })
}

type IHolaFactory = {
  [key in DOMElements]: any
} & {
  (tag: DOMElements): any
}

domElements.forEach((tag) => {
  hola[tag] = hola(tag)
})
