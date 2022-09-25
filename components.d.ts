/**
 * Typescript support for @@hola-ui/vue-next1.0.0-alpha.13 auto-imported
 * components using `unplugin-vue-components,`
 *
 * @see: https://github.com/antfu/unplugin-vue-components/#typescript
 *
 * This is a generated file. Do not edit it's contents.
 *
 * This file was generated on 2022-09-12T04:00:56.880Z
 */

import { HolaProps, hola } from "@hola-ui/vue-system"
import { VNodeChild, VNode, HTMLAttributes } from "vue"

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
      extends Omit<HTMLAttributes, "color">,
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
  "v-model"?: unknown
  "v-models"?: unknown[]
  "v-custom"?: unknown[]
  "v-show"?: boolean
  "v-html"?: JsxNode
  "v-slots"?: SlotDirective
} & Omit<HTMLAttributes, "innerHTML"> & {
    innerHTML?: JsxNode
  }

declare var hola: typeof import("@hola-ui/vue-next")["hola"]

declare module "@vue/runtime-core" {
  import { hola } from "@hola-ui/vue-next"
  export { hola }

  /* Global component types for Volar auto-complete */
  export interface GlobalComponents {
    hola: typeof import("@hola-ui/vue-next")["hola"]
    HAccordion: typeof import("@hola-ui/vue-next")["HAccordion"]
    HAccordionButton: typeof import("@hola-ui/vue-next")["HAccordionButton"]
    HAccordionIcon: typeof import("@hola-ui/vue-next")["HAccordionIcon"]
    HAccordionItem: typeof import("@hola-ui/vue-next")["HAccordionItem"]
    HAccordionPanel: typeof import("@hola-ui/vue-next")["HAccordionPanel"]
    HAlert: typeof import("@hola-ui/vue-next")["HAlert"]
    HAlertDescription: typeof import("@hola-ui/vue-next")["HAlertDescription"]
    HAlertIcon: typeof import("@hola-ui/vue-next")["HAlertIcon"]
    HAlertTitle: typeof import("@hola-ui/vue-next")["HAlertTitle"]
    HBreadcrumb: typeof import("@hola-ui/vue-next")["HBreadcrumb"]
    HBreadcrumbItem: typeof import("@hola-ui/vue-next")["HBreadcrumbItem"]
    HBreadcrumbLink: typeof import("@hola-ui/vue-next")["HBreadcrumbLink"]
    HBreadcrumbSeparator: typeof import("@hola-ui/vue-next")["HBreadcrumbSeparator"]
    HButton: typeof import("@hola-ui/vue-next")["HButton"]
    HButtonGroup: typeof import("@hola-ui/vue-next")["HButtonGroup"]
    HIconButton: typeof import("@hola-ui/vue-next")["HIconButton"]
    HCheckbox: typeof import("@hola-ui/vue-next")["HCheckbox"]
    HFocusLock: typeof import("@hola-ui/vue-next")["HFocusLock"]
    HFormErrorIcon: typeof import("@hola-ui/vue-next")["HFormErrorIcon"]
    HFormErrorMessage: typeof import("@hola-ui/vue-next")["HFormErrorMessage"]
    HFormLabel: typeof import("@hola-ui/vue-next")["HFormLabel"]
    HRequiredIndicator: typeof import("@hola-ui/vue-next")["HRequiredIndicator"]
    HIcon: typeof import("@hola-ui/vue-next")["HIcon"]
    HInput: typeof import("@hola-ui/vue-next")["HInput"]
    HInputAddon: typeof import("@hola-ui/vue-next")["HInputAddon"]
    HInputGroup: typeof import("@hola-ui/vue-next")["HInputGroup"]
    HInputLeftAddon: typeof import("@hola-ui/vue-next")["HInputLeftAddon"]
    HInputLeftElement: typeof import("@hola-ui/vue-next")["HInputLeftElement"]
    HInputRightAddon: typeof import("@hola-ui/vue-next")["HInputRightAddon"]
    HInputRightElement: typeof import("@hola-ui/vue-next")["HInputRightElement"]
    HAspectRatio: typeof import("@hola-ui/vue-next")["HAspectRatio"]
    HBadge: typeof import("@hola-ui/vue-next")["HBadge"]
    HBox: typeof import("@hola-ui/vue-next")["HBox"]
    HCenter: typeof import("@hola-ui/vue-next")["HCenter"]
    HCircle: typeof import("@hola-ui/vue-next")["HCircle"]
    HContainer: typeof import("@hola-ui/vue-next")["HContainer"]
    HDivider: typeof import("@hola-ui/vue-next")["HDivider"]
    HGrid: typeof import("@hola-ui/vue-next")["HGrid"]
    HGridItem: typeof import("@hola-ui/vue-next")["HGridItem"]
    HHStack: typeof import("@hola-ui/vue-next")["HHStack"]
    HHeading: typeof import("@hola-ui/vue-next")["HHeading"]
    HKbd: typeof import("@hola-ui/vue-next")["HKbd"]
    HLink: typeof import("@hola-ui/vue-next")["HLink"]
    HLinkBox: typeof import("@hola-ui/vue-next")["HLinkBox"]
    HLinkOverlay: typeof import("@hola-ui/vue-next")["HLinkOverlay"]
    HList: typeof import("@hola-ui/vue-next")["HList"]
    HListIcon: typeof import("@hola-ui/vue-next")["HListIcon"]
    HListItem: typeof import("@hola-ui/vue-next")["HListItem"]
    HOrderedList: typeof import("@hola-ui/vue-next")["HOrderedList"]
    HSimpleGrid: typeof import("@hola-ui/vue-next")["HSimpleGrid"]
    HSpacer: typeof import("@hola-ui/vue-next")["HSpacer"]
    HSquare: typeof import("@hola-ui/vue-next")["HSquare"]
    HStack: typeof import("@hola-ui/vue-next")["HStack"]
    HStackDivider: typeof import("@hola-ui/vue-next")["HStackDivider"]
    HStackItem: typeof import("@hola-ui/vue-next")["HStackItem"]
    HText: typeof import("@hola-ui/vue-next")["HText"]
    HUnorderedList: typeof import("@hola-ui/vue-next")["HUnorderedList"]
    HVStack: typeof import("@hola-ui/vue-next")["HVStack"]
    HAlertDialog: typeof import("@hola-ui/vue-next")["HAlertDialog"]
    HAlertDialogBody: typeof import("@hola-ui/vue-next")["HAlertDialogBody"]
    HAlertDialogCloseButton: typeof import("@hola-ui/vue-next")["HAlertDialogCloseButton"]
    HAlertDialogContent: typeof import("@hola-ui/vue-next")["HAlertDialogContent"]
    HAlertDialogFooter: typeof import("@hola-ui/vue-next")["HAlertDialogFooter"]
    HAlertDialogHeader: typeof import("@hola-ui/vue-next")["HAlertDialogHeader"]
    HAlertDialogOverlay: typeof import("@hola-ui/vue-next")["HAlertDialogOverlay"]
    HDrawer: typeof import("@hola-ui/vue-next")["HDrawer"]
    HDrawerBody: typeof import("@hola-ui/vue-next")["HDrawerBody"]
    HDrawerCloseButton: typeof import("@hola-ui/vue-next")["HDrawerCloseButton"]
    HDrawerContent: typeof import("@hola-ui/vue-next")["HDrawerContent"]
    HDrawerFooter: typeof import("@hola-ui/vue-next")["HDrawerFooter"]
    HDrawerHeader: typeof import("@hola-ui/vue-next")["HDrawerHeader"]
    HDrawerOverlay: typeof import("@hola-ui/vue-next")["HDrawerOverlay"]
    HModal: typeof import("@hola-ui/vue-next")["HModal"]
    HModalBody: typeof import("@hola-ui/vue-next")["HModalBody"]
    HModalCloseButton: typeof import("@hola-ui/vue-next")["HModalCloseButton"]
    HModalContent: typeof import("@hola-ui/vue-next")["HModalContent"]
    HModalFooter: typeof import("@hola-ui/vue-next")["HModalFooter"]
    HModalHeader: typeof import("@hola-ui/vue-next")["HModalHeader"]
    HModalOverlay: typeof import("@hola-ui/vue-next")["HModalOverlay"]
    HAnimatePresence: typeof import("@hola-ui/vue-next")["HAnimatePresence"]
    HCollapse: typeof import("@hola-ui/vue-next")["HCollapse"]
    HMotion: typeof import("@hola-ui/vue-next")["HMotion"]
    HPortal: typeof import("@hola-ui/vue-next")["HPortal"]
    HScrollLock: typeof import("@hola-ui/vue-next")["HScrollLock"]
    HVisuallyHidden: typeof import("@hola-ui/vue-next")["HVisuallyHidden"]
    HVisuallyHiddenInput: typeof import("@hola-ui/vue-next")["HVisuallyHiddenInput"]
    "hola.a": typeof import("@hola-ui/vue-next")["HBox"]
    "hola.b": typeof import("@hola-ui/vue-next")["HBox"]
    "hola.article": typeof import("@hola-ui/vue-next")["HBox"]
    "hola.aside": typeof import("@hola-ui/vue-next")["HBox"]
    "hola.blockquote": typeof import("@hola-ui/vue-next")["HBox"]
    "hola.button": typeof import("@hola-ui/vue-next")["HBox"]
    "hola.caption": typeof import("@hola-ui/vue-next")["HBox"]
    "hola.cite": typeof import("@hola-ui/vue-next")["HBox"]
    "hola.circle": typeof import("@hola-ui/vue-next")["HBox"]
    "hola.code": typeof import("@hola-ui/vue-next")["HBox"]
    "hola.dd": typeof import("@hola-ui/vue-next")["HBox"]
    "hola.div": typeof import("@hola-ui/vue-next")["HBox"]
    "hola.dl": typeof import("@hola-ui/vue-next")["HBox"]
    "hola.dt": typeof import("@hola-ui/vue-next")["HBox"]
    "hola.fieldset": typeof import("@hola-ui/vue-next")["HBox"]
    "hola.figcaption": typeof import("@hola-ui/vue-next")["HBox"]
    "hola.figure": typeof import("@hola-ui/vue-next")["HBox"]
    "hola.footer": typeof import("@hola-ui/vue-next")["HBox"]
    "hola.form": typeof import("@hola-ui/vue-next")["HBox"]
    "hola.h1": typeof import("@hola-ui/vue-next")["HBox"]
    "hola.h2": typeof import("@hola-ui/vue-next")["HBox"]
    "hola.h3": typeof import("@hola-ui/vue-next")["HBox"]
    "hola.h4": typeof import("@hola-ui/vue-next")["HBox"]
    "hola.h5": typeof import("@hola-ui/vue-next")["HBox"]
    "hola.h6": typeof import("@hola-ui/vue-next")["HBox"]
    "hola.header": typeof import("@hola-ui/vue-next")["HBox"]
    "hola.hr": typeof import("@hola-ui/vue-next")["HBox"]
    "hola.iframe": typeof import("@hola-ui/vue-next")["HBox"]
    "hola.img": typeof import("@hola-ui/vue-next")["HBox"]
    "hola.input": typeof import("@hola-ui/vue-next")["HBox"]
    "hola.kbd": typeof import("@hola-ui/vue-next")["HBox"]
    "hola.label": typeof import("@hola-ui/vue-next")["HBox"]
    "hola.li": typeof import("@hola-ui/vue-next")["HBox"]
    "hola.mark": typeof import("@hola-ui/vue-next")["HBox"]
    "hola.main": typeof import("@hola-ui/vue-next")["HBox"]
    "hola.nav": typeof import("@hola-ui/vue-next")["HBox"]
    "hola.ol": typeof import("@hola-ui/vue-next")["HBox"]
    "hola.p": typeof import("@hola-ui/vue-next")["HBox"]
    "hola.path": typeof import("@hola-ui/vue-next")["HBox"]
    "hola.pre": typeof import("@hola-ui/vue-next")["HBox"]
    "hola.q": typeof import("@hola-ui/vue-next")["HBox"]
    "hola.rect": typeof import("@hola-ui/vue-next")["HBox"]
    "hola.s": typeof import("@hola-ui/vue-next")["HBox"]
    "hola.svg": typeof import("@hola-ui/vue-next")["HBox"]
    "hola.section": typeof import("@hola-ui/vue-next")["HBox"]
    "hola.select": typeof import("@hola-ui/vue-next")["HBox"]
    "hola.strong": typeof import("@hola-ui/vue-next")["HBox"]
    "hola.small": typeof import("@hola-ui/vue-next")["HBox"]
    "hola.span": typeof import("@hola-ui/vue-next")["HBox"]
    "hola.sub": typeof import("@hola-ui/vue-next")["HBox"]
    "hola.sup": typeof import("@hola-ui/vue-next")["HBox"]
    "hola.table": typeof import("@hola-ui/vue-next")["HBox"]
    "hola.tbody": typeof import("@hola-ui/vue-next")["HBox"]
    "hola.td": typeof import("@hola-ui/vue-next")["HBox"]
    "hola.textarea": typeof import("@hola-ui/vue-next")["HBox"]
    "hola.tfoot": typeof import("@hola-ui/vue-next")["HBox"]
    "hola.th": typeof import("@hola-ui/vue-next")["HBox"]
    "hola.thead": typeof import("@hola-ui/vue-next")["HBox"]
    "hola.tr": typeof import("@hola-ui/vue-next")["HBox"]
    "hola.ul": typeof import("@hola-ui/vue-next")["HBox"]
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
