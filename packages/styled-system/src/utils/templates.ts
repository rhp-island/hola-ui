/**
 * The CSS transform order following the upcoming spec from CSSWG
 * translate => rotate => scale => skew
 * @see https://drafts.csswg.org/css-transforms-2/#ctm
 * @see https://www.stefanjudis.com/blog/order-in-css-transformation-transform-functions-vs-individual-transforms/
 */
const transformTemplate = [
  'rotate(var(--hola-rotate, 0))',
  'scaleX(var(--hola-scale-x, 1))',
  'scaleY(var(--hola-scale-y, 1))',
  'skewX(var(--hola-skew-x, 0))',
  'skewY(var(--hola-skew-y, 0))',
]

export function getTransformTemplate() {
  return [
    'translateX(var(--hola-translate-x, 0))',
    'translateY(var(--hola-translate-y, 0))',
    ...transformTemplate,
  ].join(' ')
}

export function getTransformGpuTemplate() {
  return [
    'translate3d(var(--hola-translate-x, 0), var(--hola-translate-y, 0), 0)',
    ...transformTemplate,
  ].join(' ')
}

export const filterTemplate = {
  '--hola-blur': 'var(--hola-empty,/*!*/ /*!*/)',
  '--hola-brightness': 'var(--hola-empty,/*!*/ /*!*/)',
  '--hola-contrast': 'var(--hola-empty,/*!*/ /*!*/)',
  '--hola-grayscale': 'var(--hola-empty,/*!*/ /*!*/)',
  '--hola-hue-rotate': 'var(--hola-empty,/*!*/ /*!*/)',
  '--hola-invert': 'var(--hola-empty,/*!*/ /*!*/)',
  '--hola-saturate': 'var(--hola-empty,/*!*/ /*!*/)',
  '--hola-sepia': 'var(--hola-empty,/*!*/ /*!*/)',
  '--hola-drop-shadow': 'var(--hola-empty,/*!*/ /*!*/)',
  filter: [
    'var(--hola-blur)',
    'var(--hola-brightness)',
    'var(--hola-contrast)',
    'var(--hola-grayscale)',
    'var(--hola-hue-rotate)',
    'var(--hola-invert)',
    'var(--hola-saturate)',
    'var(--hola-sepia)',
    'var(--hola-drop-shadow)',
  ].join(' '),
}

export const backdropFilterTemplate = {
  backdropFilter: [
    'var(--hola-backdrop-blur)',
    'var(--hola-backdrop-brightness)',
    'var(--hola-backdrop-contrast)',
    'var(--hola-backdrop-grayscale)',
    'var(--hola-backdrop-hue-rotate)',
    'var(--hola-backdrop-invert)',
    'var(--hola-backdrop-opacity)',
    'var(--hola-backdrop-saturate)',
    'var(--hola-backdrop-sepia)',
  ].join(' '),
  '--hola-backdrop-blur': 'var(--hola-empty,/*!*/ /*!*/)',
  '--hola-backdrop-brightness': 'var(--hola-empty,/*!*/ /*!*/)',
  '--hola-backdrop-contrast': 'var(--hola-empty,/*!*/ /*!*/)',
  '--hola-backdrop-grayscale': 'var(--hola-empty,/*!*/ /*!*/)',
  '--hola-backdrop-hue-rotate': 'var(--hola-empty,/*!*/ /*!*/)',
  '--hola-backdrop-invert': 'var(--hola-empty,/*!*/ /*!*/)',
  '--hola-backdrop-opacity': 'var(--hola-empty,/*!*/ /*!*/)',
  '--hola-backdrop-saturate': 'var(--hola-empty,/*!*/ /*!*/)',
  '--hola-backdrop-sepia': 'var(--hola-empty,/*!*/ /*!*/)',
}

export function getRingTemplate(value: any) {
  return {
    '--hola-ring-offset-shadow': `var(--hola-ring-inset) 0 0 0 var(--hola-ring-offset-width) var(--hola-ring-offset-color)`,
    '--hola-ring-shadow': `var(--hola-ring-inset) 0 0 0 calc(var(--hola-ring-width) + var(--hola-ring-offset-width)) var(--hola-ring-color)`,
    '--hola-ring-width': value,
    boxShadow: [
      `var(--hola-ring-offset-shadow)`,
      `var(--hola-ring-shadow)`,
      `var(--hola-shadow, 0 0 #0000)`,
    ].join(', '),
  }
}

export const flexDirectionTemplate = {
  'row-reverse': {
    space: '--hola-space-x-reverse',
    divide: '--hola-divide-x-reverse',
  },
  'column-reverse': {
    space: '--hola-space-y-reverse',
    divide: '--hola-divide-y-reverse',
  },
}

const owlSelector = '& > :not(style) ~ :not(style)'

export const spaceXTemplate = {
  [owlSelector]: {
    marginInlineStart:
      'calc(var(--hola-space-x) * calc(1 - var(--hola-space-x-reverse)))',
    marginInlineEnd: 'calc(var(--hola-space-x) * var(--hola-space-x-reverse))',
  },
}

export const spaceYTemplate = {
  [owlSelector]: {
    marginTop:
      'calc(var(--hola-space-y) * calc(1 - var(--hola-space-y-reverse)))',
    marginBottom: 'calc(var(--hola-space-y) * var(--hola-space-y-reverse))',
  },
}
