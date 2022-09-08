import { inject } from '@vue/runtime-core'
import { useColorMode } from '@hola-ui/a-color-mode'
import { Dict } from '@hola-ui/utils'

/** Provides theme object in component context */
export const useTheme = <T extends object = Dict>(): T => {
  const theme = inject('$holaTheme') as T
  return theme
}

/** Single hook to provide theme and color mode values */
export const useHola = () => {
  const theme = useTheme()
  const { colorMode } = useColorMode()
  return {
    theme,
    colorMode,
  }
}
