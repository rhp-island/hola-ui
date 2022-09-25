import weakMemoize from '@emotion/weak-memoize'
import { createContext } from '@hola-ui/utils'
import { getTheme } from './utils'
import { ComputedRef } from 'vue'

const [_EmotionThemeProvider, useEmotionTheme, EmotionThemeContextSymbol] =
  createContext<object>({
    strict: false,
    name: 'EmotionThemeContext',
  })

let createCacheWithTheme = /* #__PURE__ */ weakMemoize((outerTheme) => {
  return weakMemoize((theme) => {
    return getTheme(outerTheme, theme)
  })
})

function EmotionThemeProvider(theme: object | ((Obj: object) => Object)) {
  let _theme = useEmotionTheme()
  if (theme !== _theme) {
    // @ts-ignore weak map typing not fulfilled properly
    _theme = createCacheWithTheme(_theme)(theme)
  }
  _EmotionThemeProvider(_theme)
}

export {
  createCacheWithTheme as createThemeCache,
  EmotionThemeProvider,
  useEmotionTheme,
  EmotionThemeContextSymbol,
}
