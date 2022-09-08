import {
  Component,
  computed,
  ConcreteComponent,
  DefineComponent,
  defineComponent,
  h,
  HTMLAttributes,
  ComponentCustomProps,
  PropType,
  resolveComponent,
} from '@vue/runtime-core'
import {
  css,
  isStyleProp,
  ResponsiveValue,
  SystemProps,
  SystemStyleObject,
} from '@hola-ui/styled-system'
import _styled, { useEmotionTheme } from '@hola-ui/styled'

import {
  isFunction,
  objectFilter,
  isObject,
  memoizedGet as get,
  runIfFn,
  filterUndefined,
  Dict,
} from '@hola-ui/utils'
import { cx, css as _css, CSSObject } from '@emotion/css'
import { domElements, DOMElements } from './system.utils'
import { useTheme } from './composables/use-hola'
import { SNAO, extractStyleAttrs } from '@hola-ui/utils'
import { As, HolaProps, ComponentWithProps } from './system.types'
import { formElements, InputTypes } from './hola.forms'
import { FunctionInterpolation } from '@emotion/serialize'

export interface BaseStyleResolverProps {
  as?: HolaTagOrComponent
  __css?: SystemStyleObject
  sx?: SystemStyleObject
  css?: CSSObject
  noOfLines?: ResponsiveValue<number>
  isTruncated?: boolean
  apply?: ResponsiveValue<string>
  componentName?: String
  label?: string
  baseStyle?:
    | SystemStyleObject
    | ((props: StyleResolverProps) => SystemStyleObject)
  /**
   * User provided styles from component/hola API
   */
  styles?: SystemStyleObject
  /**
   * This attribute/property is reserved for all TSX component definitions.
   * It is referenced by the hola factiry function to
   * preserve the component's label class
   */
  __label?: string
  theme?: Dict<any>
}

export interface StyleResolverProps
  extends BaseStyleResolverProps,
    SystemProps {}

interface StyleResolverOptions extends StyleResolverProps {
  truncateStyle?: CSSObject
  theme?: any
}

interface HolaFactoryOptions extends StyleResolverProps {}

const holaProps = {
  as: [String, Object] as PropType<HolaTagOrComponent>,
  __css: Object as PropType<StyleResolverProps['__css']>,
  sx: Object as PropType<StyleResolverProps['sx']>,
  css: Object as PropType<StyleResolverProps['css']>,
  noOfLines: SNAO as PropType<StyleResolverProps['noOfLines']>,
  baseStyle: Object as PropType<StyleResolverProps['baseStyle']>,
  isTruncated: Boolean as PropType<StyleResolverProps['isTruncated']>,
  layerStyle: String as PropType<StyleResolverProps['layerStyle']>,
  textStyle: String as PropType<StyleResolverProps['textStyle']>,
  apply: String as PropType<StyleResolverProps['apply']>,
  label: String as PropType<StyleResolverOptions['label']>,
  modelValue: SNAO as PropType<string | boolean | object>,
  /**
   * @warning
   * @internal
   * This internal is an internal HolaFactoryFunction prop that
   * is used to determine how events are handled on Hola Factory
   * components.
   *
   * For example, if a factory component is considered to be raw (i.e. `__holaIsRaw: true`),
   * then, we do not pass v-model event listeners onto the component. This means that
   * `v-model` will not work in the template context.
   *
   * You can see how this prop is used in the `c-input` component.
   *
   * THIS PROP IS A NON-DOCUMENTED PROP, AND IS ONLY TO BE USED FOR INTERNAL DEVELOPMENT.
   */
  __holaIsRaw: Boolean as PropType<boolean>,
}

export type HolaBaseComponentProps = typeof holaProps
export type HolaTagOrComponent =
  | DOMElements
  | Component
  | ConcreteComponent
  | string

/**
 * Hola factory serves as an object of hola enabled HTML elements,
 * and also a function that can be used to enable custom component receive hola's style props.
 * @param tag Tag or Component
 * @param options resolver options
 * 
 * How does it work?
 *
 * 1. Components returned from the hola factory can be styled after consuming them
 *    @example
 *    ```js
 *    const Form = hola('form') // returns a VNode you can use in the template directly
 *    ```
 * 
 * 2. Hola components can directly be styled upon creation using the options object of type `StyleResolverProps`
 *    This resolves style object for component styles defined in the theme.
 * 
 *    Styling components using the hola factory function can be done using the following keys from the theme:
 *    - `baseStyle`
 *    - `layerStyle`
 *    - `textStyle`
 * 
 *    @example
 *    ```js
 *    const MyCustomButton = hola('button', {
 *     baseStyle: {
         bg: 'papayawhip,
         color: 'red.500,
         px: 4,
         py: 3
       }
 *    })
 *    ```
 *    ```html
 *    <my-custom-button>Hello Papaya Button</my-custom-button>
 *    ```
 * 
 *    See more about the style resolution in the `resolveStyles` function.
 * 
 * 3. Hola components created and styled using the `hola` factory can be overriden in the template by applying
 *    style properties directly
 * 
 *    @example
 *    ```html
 *    <my-custom-button bg="blue.400">
 *      Papaya button goes blue
 *    </my-custom-button>
 *    ```
 */
// @ts-expect-error
export const hola: IHolaFactory = (tag, options = {}): DefineComponent => {
  const inputHandlers = formElements[typeof tag === 'string' ? tag : '']
  const _props = (inputHandlers && inputHandlers.props) || {}
  const handleValueChange = inputHandlers && inputHandlers.handleValueChange

  return defineComponent({
    name: `hola-factory-${String(tag)}`,
    inheritAttrs: false,
    props: {
      ...holaProps,
      ..._props,
    },
    setup(props, { slots, emit, attrs }) {
      const theme = useTheme()

      const layerStyle$ = computed(
        () => props.layerStyle || options?.layerStyle
      )
      const textStyle$ = computed(() => props.textStyle || options?.textStyle)
      const baseStyle$ = computed(() => props.baseStyle || options?.baseStyle)
      const noOfLines$ = computed(() => props.noOfLines || options?.noOfLines)
      const isTruncated$ = computed(
        () => props.isTruncated || options?.isTruncated
      )
      const __css$ = computed(() => props.__css || options?.__css)
      const css$ = computed(() => props.css || options?.css)
      const sx$ = computed(() => props.sx || options?.sx)
      const apply$ = computed(() => props.apply || options?.apply)

      return () => {
        const { class: inheritedClass, __label, ...rest } = attrs
        const {
          layerStyle,
          baseStyle,
          textStyle,
          noOfLines,
          isTruncated,
          __css,
          css,
          sx,
          apply,
          label,
          ...otherStyles
        } = options

        // Separate component style attributes from raw HTML attributes
        const { styles, attrs: elementAttributes } = extractStyleAttrs<
          any,
          HTMLAttributes & BaseStyleResolverProps
        >({
          ...otherStyles,
          // Prioritize user provided styles
          ...rest,
        })

        const resolvedComponentStyles = resolveStyles({
          __css: __css$.value,
          baseStyle: baseStyle$.value,
          apply: apply$.value,
          layerStyle: layerStyle$.value,
          noOfLines: noOfLines$.value,
          isTruncated: isTruncated$.value,
          textStyle: textStyle$.value,
          sx: sx$.value,
          css: css$.value,
          ...(styles as SystemProps),
          theme,
        })

        const componentLabel = label || __label
        const _componentName = componentLabel ? `hola-${componentLabel}` : ''
        const className = _css(resolvedComponentStyles)

        let componentOrTag = props.as || tag

        // if tag is not a dom element like as="div" and an object (vue component as an object) like v-bind:as="RouterLink"
        if (
          !isObject(componentOrTag) &&
          !domElements.includes(componentOrTag as any)
        ) {
          // it's a string like as="router-link"
          componentOrTag = resolveComponent(componentOrTag)
        }

        return h(
          (componentOrTag as any) || props.as,
          {
            class: cx(inheritedClass as string, _componentName, className),
            ...elementAttributes,
            ...(!props.__holaIsRaw &&
              handleValueChange &&
              handleValueChange(props, attrs.type as InputTypes)(emit)),
          },
          slots
        )
      }
    },
  })
}

// return h(
//   _styled((componentOrTag as any) || props.as)({
//     ...resolvedComponentStyles,
//     ...elementAttributes,
//   }) as unknown as DefineComponent<HolaProps>,
//   slots
// )
interface GetStyleObject {
  (options: {
    baseStyle?:
      | SystemStyleObject
      | ((props: StyleResolverProps) => SystemStyleObject)
  }): FunctionInterpolation<StyleResolverProps>
}

export const toCSSObject: GetStyleObject = (options) => (props) => {
  const { theme, css: cssProp, __css, sx, ...rest } = props
  const styleProps = objectFilter(rest, (_, prop) => isStyleProp(prop))
  const finalStyles = resolveStyles(
    Object.assign(options, { theme }, styleProps)
  )
  const computedCSS = css(finalStyles)(props.theme)

  return cssProp ? [computedCSS, cssProp] : computedCSS
}

interface StyledOptions extends StyleResolverOptions {
  label?: string
  baseStyle?:
    | SystemStyleObject
    | ((props: StyleResolverProps) => SystemStyleObject)
}

export function styled<T extends As, P = {}>(
  component: T,
  options: StyledOptions
) {
  const { baseStyle, ...styledOptions } = options ?? {}

  const styleObject = toCSSObject(options)
  return _styled(component as HolaTagOrComponent, styledOptions)(styleObject)
}

export type HolaComponent<P = HolaProps> = ComponentWithProps<As & P>

type HolaFactory = {
  <T extends HolaTagOrComponent, P = {}>(
    component: T,
    options?: StyledOptions
  ): HolaComponent<P>
}

export type HTMLHolaComponents<P> = {
  [Tag in DOMElements]: HolaComponent<P>
}

export const _hola = styled as unknown as HolaFactory &
  HTMLHolaComponents<HolaProps>

domElements.forEach((tag) => {
  hola[tag] = hola(tag)
})

export const resolveStyles = (
  resolvers = {} as StyleResolverOptions
): CSSObject => {
  const {
    layerStyle,
    baseStyle,
    textStyle,
    noOfLines,
    isTruncated,
    __css,
    css: cssProp,
    sx,
    apply,
    theme,
    ...otherStyles
  } = resolvers

  const _layerStyle = get(theme as object, `layerStyles.${layerStyle}`, {})
  const _textStyle = get(theme as object, `textStyles.${textStyle}`, {})

  let truncateStyle: any = {}
  if (noOfLines != null) {
    truncateStyle = {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      display: '-webkit-box',
      WebkitBoxOrient: 'vertical',
      WebkitLineClamp: noOfLines,
    }
  } else if (isTruncated) {
    truncateStyle = {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    }
  }

  const finalStyles = css(
    Object.assign(
      {},
      __css,
      baseStyle,
      { apply: apply },
      _layerStyle,
      _textStyle,
      truncateStyle,
      otherStyles,
      sx
    )
  )(theme)

  const cssObject: CSSObject = Object.assign(
    finalStyles,
    isFunction(cssProp) ? cssProp(theme) : cssProp
  )
  return cssObject
}

export type HolaFactoryProps = HolaProps &
  StyleResolverProps &
  HTMLAttributes &
  ComponentCustomProps &
  JSX.IntrinsicAttributes & {
    // value?: unknown
    [key: string]: any
  }

/**
 * @example
 * h(hola(RouterLink, { to: 'https://vue.hola-ui.com' }), {}, slots)
 */
type UserProvidedProps = { [key: string]: any }

type IHolaFactory = {
  [key in DOMElements]: DefineComponent | ComponentWithProps<HolaFactoryProps>
} & {
  (
    tag: HolaTagOrComponent,
    options?: StyleResolverOptions & UserProvidedProps
  ): DefineComponent | ComponentWithProps<HolaFactoryProps>
}

domElements.forEach((tag) => {
  hola[tag] = hola(tag, {})
})

domElements.forEach((tag) => {
  _hola[tag] = _hola(tag, {})
})
