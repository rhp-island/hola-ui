import { Plugin } from '@vue/runtime-core'
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
    app.config.globalProperties.$holaTheme = options.extendTheme
  },
}

export default HolaUIVuePlugin
export { extendTheme }
