import { defineComponent, h } from '@vue/runtime-core'
import { extractStyleAttrs } from './system.attrs'
import { domElements, DOMElements } from './system.utils'
import { css as _css, cx } from '@emotion/css'
import { css } from '@hola-ui/styled-system'
import theme from '@hola-ui/theme'

let id = 0

/**
 * Creates a Hola UI Vue component
 * @param tag Tag
 * @param componentName Component name
 */
// @ts-expect-error
export const hola: IHolaFactory = (
  tag: DOMElements,
  componentName?: string
): any => {
  // Increment ids
  id++

  return defineComponent({
    inheritAttrs: false,
    setup(props, { slots, attrs }) {
      // Separate component style attributes from raw HTML attributes
      const { class: inheritedClass, ...rest } = attrs
      const { styles, attrs: _attrs } = extractStyleAttrs(rest)
      const className = _css(css(styles)({ theme }))

      const _componentName = `hola-${componentName}` || `hola-component-${id}`

      return () =>
        h(
          tag,
          {
            class: cx(inheritedClass as string, _componentName, className),
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
  (tag: DOMElements, componentName?: string): any
}

domElements.forEach((tag) => {
  hola[tag] = hola(tag)
})
