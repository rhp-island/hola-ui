import { defineComponent, h } from '@vue/runtime-core'
import { domElements, DOMElements } from './system.utils'

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
      return () =>
        h(
          tag,
          {
            ...props,
            ...attrs,
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
