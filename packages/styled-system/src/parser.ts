import { compose } from '@styled-system/core'
import {
  backgroundParser,
  borderParser,
  colorParser,
  flexboxParser,
  gridParser,
  layoutParser,
  listParser,
  othersParser,
  outlineParser,
  positionParser,
  shadowParser,
  spaceParser,
  transformParser,
  transitionParser,
  typographyParser,
} from './config'

export const parser = compose(
  backgroundParser,
  borderParser,
  colorParser,
  flexboxParser,
  layoutParser,
  outlineParser,
  gridParser,
  othersParser,
  positionParser,
  shadowParser,
  spaceParser,
  typographyParser,
  transformParser,
  transitionParser,
  listParser
)
