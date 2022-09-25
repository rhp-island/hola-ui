/**
 * Typescript support for @@hola-ui/vue-next1.0.0-alpha.13 auto-imported
 * components using `unplugin-vue-components,`
 *
 * @see: https://github.com/antfu/unplugin-vue-components/#typescript
 *
 * This is a generated file. Do not edit it's contents.
 *
 * This file was generated on 2022-09-25T15:20:16.054Z
 */

import { HolaProps, hola } from '@hola-ui/system'
import { VNodeChild, VNode, HTMLAttributes } from 'vue'

export type JsxNode = VNodeChild | JSX.Element

declare global {
  namespace h.JSX {
    interface Element extends VNode {}
    interface ElementClass {
      $props: {}
    }
    interface ElementAttributesProperty {
      $props: {}
    }

    interface IntrinsicAttributes
      extends Omit<HTMLAttributes, 'color'>,
        HolaProps {}
  }
}

type EventHandler = (...args: any[]) => void

export interface SlotDirective {
  [name: string]: () => JsxNode
}

type JsxComponentCustomProps = {
  vModel?: unknown
  vModels?: unknown[]
  vCustom?: unknown[]
  vShow?: boolean
  vHtml?: JsxNode
  vSlots?: SlotDirective
  'v-model'?: unknown
  'v-models'?: unknown[]
  'v-custom'?: unknown[]
  'v-show'?: boolean
  'v-html'?: JsxNode
  'v-slots'?: SlotDirective
} & Omit<HTMLAttributes, 'innerHTML'> & {
    innerHTML?: JsxNode
  }

declare var hola: typeof import('@hola-ui/vue-next')['hola']

declare module '@vue/runtime-core' {
  import { hola } from '@hola-ui/vue-next'
  export { hola }

  /* Global component types for Volar auto-complete */
  export interface GlobalComponents {
    hola: typeof import('@hola-ui/vue-next')['hola']
  }

  /* Component custom props types for JSX and TSX auto complete */
  export interface ComponentCustomProps
    extends JsxComponentCustomProps,
      HolaProps {
    vSlots?: {
      [eleName: string]: JSX.Element
    }
  }

  interface ComponentCustomProps {
    role?: string
    tabindex?: number | string
    value?: unknown
    // should be removed after Vue supported component events typing
    // see: https://github.com/vuejs/vue-next/issues/1553
    //      https://github.com/vuejs/vue-next/issues/3029
    onBlur?: EventHandler
    onOpen?: EventHandler
    onEdit?: EventHandler
    onLoad?: EventHandler
    onClose?: EventHandler
    onFocus?: EventHandler
    onInput?: EventHandler
    onClick?: EventHandler
    onPress?: EventHandler
    onCancel?: EventHandler
    onChange?: EventHandler
    onDelete?: EventHandler
    onScroll?: EventHandler
    onSubmit?: EventHandler
    onSelect?: EventHandler
    onConfirm?: EventHandler
    onPreview?: EventHandler
    onKeypress?: EventHandler
    onTouchend?: EventHandler
    onTouchmove?: EventHandler
    onTouchstart?: EventHandler
    onTouchcancel?: EventHandler
    onMouseenter?: EventHandler
    onMouseleave?: EventHandler
    onMousemove?: EventHandler
    onKeydown?: EventHandler
    onKeyup?: EventHandler
    onDeselect?: EventHandler
    onClear?: EventHandler
  }
}

export {}
