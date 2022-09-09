import { BaseThemeTypings } from './shared.types'
import type { ThemeTypings as GeneratedThemeTypings } from './theming.types'

/**
 * This is a placeholder meant to be implemented via TypeScript's Module
 * Augmentation feature and is an alternative to running `npx @hola-ui/cli
 * tokens`
 *
 * @example
 * ```ts
 * import { BaseThemeTypings } from "@hola-ui/styled-system";
 *
 * type DefaultSizes = 'small' | 'medium' | 'large';
 *
 * declare module "@hola-ui/styled-system" {
 *   export interface CustomThemeTypings extends BaseThemeTypings {
 *     // Example custom `borders` tokens
 *     borders: 'none' | 'thin' | 'thick';
 *     // ...
 *     // Other custom tokens
 *     // ...
 *     components: {
 *       Button: {
 *         // Example custom component sizes and variants
 *         sizes: DefaultSizes;
 *         variants: 'solid' | 'outline' | 'wacky' | 'chill';
 *       },
 *       // ...
 *      }
 *   }
 * }
 * ```
 *
 * @see https://www.typescriptlang.org/docs/handbook/declaration-merging.html#module-augmentation
 */
export interface CustomThemeTypings {}

export type ThemeTypings = CustomThemeTypings extends BaseThemeTypings
  ? CustomThemeTypings
  : GeneratedThemeTypings
