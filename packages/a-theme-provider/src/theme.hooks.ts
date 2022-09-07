// @ts-ignore
import { ThemeProviderProps } from '@hola-ui/vue'
import { computed, inject } from 'vue'

/** Provides theme object in component context */
export const useTheme = () => {
  const theme = inject('$chakraTheme') as ThemeProviderProps
  return theme
}