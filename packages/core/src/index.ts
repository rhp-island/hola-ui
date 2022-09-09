import { computed, Plugin, ref, UnwrapRef } from 'vue'
import defaultTheme from '@hola-ui/theme'
import type { ColorModeRef } from '@hola-ui/a-color-mode'
import { toCSSVar, WithCSSVar } from '@hola-ui/styled-system'
import { hola, injectGlobal } from '@hola-ui/system'
import {
  EmotionThemeContextSymbol,
  EmotionCacheInjectionSymbol,
} from '@hola-ui/styled'
import createCache, { EmotionCache } from '@emotion/cache'
import internalIcons from './icon.internals'
import { extendTheme, ThemeOverride } from './extend-theme'
import { MergedIcons, parseIcons } from './parse-icons'
import { injectResetStyles, injectThemeGlobalStyles } from './helpers/css-reset'
import { mode } from '@hola-ui/theme-tools'
import { HolaPluginOptions } from './helpers/plugin.types'

/**
 * 1. Support passing cache options from plugin
 * 2. Provide emotion theme directly from plugin
 * 3.
 */

/**
 * Helper function to extend Hola plugin with options
 * It just returns its arguments with typescript types added
 */

export function extendHola(options: HolaPluginOptions = { cssReset: true }) {
  return options
}

const HolaUIVuePlugin: Plugin = {
  install(app, options: HolaPluginOptions = { cssReset: true }) {
    // 1. Get theme value
    // 2. Parse theme tokens to CSS variables
    // 3. Inject all CSS variables as theme object
    const theme = options.extendTheme || defaultTheme
    const computedTheme = computed<WithCSSVar<ThemeOverride>>(() =>
      toCSSVar(theme)
    )

    // Inject Hola CSS variables
    injectGlobal({
      ':root': computedTheme.value.__cssVars,
    })

    // Initialize colormode
    const colorMode: UnwrapRef<ColorModeRef> =
      theme.config?.initialColorMode || 'light'

    // Provide initial colormode
    app.config.globalProperties.$initialColorMode = colorMode

    const colorModeRef = ref(colorMode) as ColorModeRef
    app.provide<ColorModeRef>('$holaColorMode', colorModeRef)

    if (options.cssReset) {
      injectResetStyles()
    }

    let libraryIcons = options.icons?.library || {}
    let extendedIcons = options.icons?.extend || {}

    // Bind theme to application global properties and provide to application
    app.config.globalProperties.$holaTheme = computedTheme.value
    app.config.globalProperties.$holaTheme = computedTheme.value
    app.provide(EmotionThemeContextSymbol, computedTheme.value)
    app.provide('$holaTheme', computedTheme.value as ThemeOverride)

    let emotionCache: EmotionCache | null = null
    // Provide emotion cache
    if (options.emotionCacheOptions) {
      emotionCache = createCache(options.emotionCacheOptions)
      app.provide(EmotionCacheInjectionSymbol, emotionCache)
    }

    if (!emotionCache) {
      emotionCache = createCache({
        key: 'hola',
        nonce: `hola-global-cache-${Date.now()}`,
      })
    }

    // Inject `styles.global` in document
    injectThemeGlobalStyles(computedTheme.value, emotionCache, colorModeRef)

    libraryIcons = parseIcons(libraryIcons)

    // Merge internal icons and library icons
    const mergedIcons: MergedIcons = {
      ...internalIcons,
      ...libraryIcons,
      ...extendedIcons,
    }

    app.provide('$holaIcons', mergedIcons)

    // Set color mode property
    app.config.globalProperties.$mode = mode
  },
}

export type { HolaPluginOptions }
export interface ThemeProviderProps extends ThemeOverride {}
export default HolaUIVuePlugin
export { extendTheme }

// Export hola factory function
export { hola }

/**
 *
 * Component exports
 * ==================
 *
 * Dear contributors,
 *
 * Please keep these exports in Alphabetical order :)
 */

// C
export * from '@hola-ui/a-color-mode'

/**
 *
 * Directives exports
 * ==================
 *
 * Dear contributors,
 *
 * Please keep these exports in Alphabetical order :)
 */
