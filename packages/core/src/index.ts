import { Plugin } from '@vue/runtime-core'
import defaultTheme from '@hola-ui/theme'
import { ThemeOverride, extendTheme } from './extend-theme'

interface ExtendIconsPath {
  path: string
  viewBox?: string
}
interface IconsOptions {
  pack?: 'fa' | 'fe'
  library?: {}
  extend?: Record<string, ExtendIconsPath>
}
interface HolaUIVuePluginOptions {
  extendTheme?: ThemeOverride
  icons?: IconsOptions
}

const HolaUIVuePlugin: Plugin = {
  install(app, options: HolaUIVuePluginOptions = {}) {
    const theme = options.extendTheme || defaultTheme
    app.config.globalProperties.$holaTheme = theme
    app.provide('$holaTheme', theme)
  },
}

export interface ThemeProviderProps extends ThemeOverride {}
export default HolaUIVuePlugin
export { extendTheme }
