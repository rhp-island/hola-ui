import type { HTMLAttributes, VNode } from "vue"
import type { HolaProps } from "@hola-ui/vue-system"
import { DefineComponent } from "vue"
import { HolaFactoryProps, ComponentWithProps } from "@hola-ui/vue-system"

declare global {
  namespace JSX {
    interface Element extends VNode {}
    interface ElementClass
      extends DefineComponent<HolaFactoryProps>,
        ComponentWithProps<HolaFactoryProps> {
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

declare module "vue" {
  export type JSXComponent<Props = any> =
    | { new (): ComponentPublicInstance<Props> }
    | FunctionalComponent<Props>
}
