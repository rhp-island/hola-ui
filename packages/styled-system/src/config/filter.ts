import * as CSS from 'csstype'
import { Config } from '../utils/prop-config'
import { Length, Token, t, transforms } from '../utils'

export const filter: Config = {
  filter: { transform: transforms.filter },
  blur: t.blur('--hola-blur'),
  brightness: t.propT('--hola-brightness', transforms.brightness),
  contrast: t.propT('--hola-contrast', transforms.contrast),
  hueRotate: t.degreeT('--hola-hue-rotate'),
  invert: t.propT('--hola-invert', transforms.invert),
  saturate: t.propT('--hola-saturate', transforms.saturate),
  dropShadow: t.propT('--hola-drop-shadow', transforms.dropShadow),
  backdropFilter: { transform: transforms.backdropFilter },
  backdropBlur: t.blur('--hola-backdrop-blur'),
  backdropBrightness: t.propT(
    '--hola-backdrop-brightness',
    transforms.brightness
  ),
  backdropContrast: t.propT('--hola-backdrop-contrast', transforms.contrast),
  backdropHueRotate: t.degreeT('--hola-backdrop-hue-rotate'),
  backdropInvert: t.propT('--hola-backdrop-invert', transforms.invert),
  backdropSaturate: t.propT('--hola-backdrop-saturate', transforms.saturate),
}

export interface FilterProps {
  /**
   * The CSS `filter` property. When set to `auto`, you allow
   * Hola UI to define the color based on the filter style props
   * (`blur`, `saturate`, etc.)
   */
  filter?: Token<CSS.Property.Filter | 'auto'>
  /**
   * Sets the blur filter value of an element.
   * Value is assigned to `--hola-filter` css variable
   */
  blur?: Token<{}, 'blur'>
  /**
   * Sets the brightness filter value of an element.
   * Value is assigned to `--hola-brightness` css variable
   */
  brightness?: Token<Length>
  /**
   * Sets the contrast filter value of an element.
   * Value is assigned to `--hola-contrast` css variable
   */
  contrast?: Token<Length>
  /**
   * Sets the hue-rotate filter value of an element.
   * Value is assigned to `--hola-hue-rotate` css variable
   */
  hueRotate?: Token<Length>
  /**
   * Sets the invert filter value of an element.
   * Value is assigned to `--hola-invert` css variable
   */
  invert?: Token<Length>
  /**
   * Sets the saturation filter value of an element.
   * Value is assigned to `--hola-saturate` css variable
   */
  saturate?: Token<Length>
  /**
   * Sets the drop-shadow filter value of an element.
   * Value is assigned to `--hola-drop-shadow` css variable
   */
  dropShadow?: Token<CSS.Property.BoxShadow, 'shadows'>
  /**
   * The CSS `backdrop-filter` property. When set to `auto`, you allow
   * Hola UI to define the color based on the backdrop filter style props
   * (`backdropBlur`, `backdropSaturate`, etc.)
   */
  backdropFilter?: Token<CSS.Property.BackdropFilter | 'auto'>
  /**
   * Sets the backdrop-blur filter value of an element.
   * Value is assigned to `--hola-backdrop-blur` css variable
   */
  backdropBlur?: Token<{}, 'blur'>
  /**
   * Sets the backdrop-brightness filter value of an element.
   * Value is assigned to `--hola-backdrop-brightness` css variable
   */
  backdropBrightness?: Token<Length>
  /**
   * Sets the backdrop-contrast filter value of an element.
   * Value is assigned to `--hola-backdrop-contrast` css variable
   */
  backdropContrast?: Token<Length>
  /**
   * Sets the backdrop-hue-rotate filter value of an element.
   * Value is assigned to `--hola-backdrop-hue-rotate` css variable
   */
  backdropHueRotate?: Token<Length>
  /**
   * Sets the backdrop-invert filter value of an element.
   * Value is assigned to `--hola-backdrop-invert` css variable
   */
  backdropInvert?: Token<Length>
  /**
   * Sets the backdrop-saturate filter value of an element.
   * Value is assigned to `--hola-backdrop-saturate` css variable
   */
  backdropSaturate?: Token<Length>
}
