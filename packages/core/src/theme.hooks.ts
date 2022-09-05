import { ThemeProviderProps } from '@hola-ui/vue'
import { computed, inject } from '@vue/runtime-core'

/** Provides theme object in component context */
export const useTheme = () => {
  const theme = inject('$holaTheme') as ThemeProviderProps
  return theme
}
