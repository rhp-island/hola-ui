import { createContext } from '@hola-ui/utils'
import { Dict } from '@hola-ui/utils'
import { SystemStyleObject } from '@hola-ui/styled-system'
import { ComputedRef } from '@vue/reactivity'

const [StylesProvider, useStyles] = createContext<
  ComputedRef<Dict<SystemStyleObject>>
>({
  name: 'StylesContext',
  errorMessage:
    'useStyles: `styles` is undefined. Seems you forgot to provide `StylesProvider(...)` ',
})

export { StylesProvider, useStyles }

export const createStylesContext = (componentName: string) =>
  createContext<ComputedRef<Dict<SystemStyleObject>>>({
    name: `${componentName}StylesContext`,
    errorMessage: `useStyles: "styles" is undefined. Seems you forgot to wrap the components in "<${componentName} />" `,
  })
