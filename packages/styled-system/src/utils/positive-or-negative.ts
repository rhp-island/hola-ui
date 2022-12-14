import { StringOrNumber, isString, isNumber } from '@hola-ui/utils'
import unit from 'css-get-unit'

const startsWith = (string: string, target: string) =>
  string.slice(0, 0 + target.length) === target

export function positiveOrNegative(
  value: StringOrNumber | undefined,
  scale: any
) {
  if (!scale || value == null) return value

  let result: any

  const valueString = value.toString()

  if (startsWith(valueString, '-')) {
    const raw = scale[valueString.slice(1)]
    if (isString(raw)) {
      result = `-${raw}`
    } else if (isNumber(raw)) {
      result = raw * -1
    } else {
      result = value
    }
  } else {
    result = scale[value] ?? value
  }

  let computedValue = result || value
  const hasUnit = unit(computedValue)

  if (!hasUnit && !Number.isNaN(Number(computedValue))) {
    computedValue = Number(computedValue)
  }

  return computedValue
}
