import { ComputedRef, Ref, VNodeProps } from '@vue/runtime-core'
import { TemplateRef } from './dom'

/**
 * Value may or may not be a `ref`.
 *
 * ```ts
 * type MaybeRef<T> = T | Ref<T>
 * ```
 */
export type MaybeRef<T> = T | Ref<T> | ComputedRef<T>

/**
 * May be a simple ref (nor computed ref)
 */
export type MaybeBaseRef<T> = T | Ref<T>

/** VNodeProps Object */
export interface MergedVNodeProps extends VNodeProps {
  ref: TemplateRef | ((el: TemplateRef | null) => void)
}

/**
 * Any function
 */
export type Fn = () => void

export type Merge<T, P> = P & Omit<T, keyof P>

export type UnionStringArray<T extends Readonly<string[]>> = T[number]

export type Omit<T, K> = Pick<T, Exclude<keyof T, K>>

export type LiteralUnion<T extends U, U extends any = string> =
  | T
  | (U & { _?: never })

export type AnyFunction<T = any> = (...args: T[]) => any

export type FunctionArguments<T extends Function> = T extends (
  ...args: infer R
) => any
  ? R
  : never

export type Dict<T = any> = Record<string, T>

export type Booleanish = boolean | 'true' | 'false'
export type StringOrNumber = string | number

export type EventKeys =
  | 'ArrowDown'
  | 'ArrowUp'
  | 'ArrowLeft'
  | 'ArrowRight'
  | 'Enter'
  | 'Space'
  | 'Tab'
  | 'Backspace'
  | 'Control'
  | 'Meta'
  | 'Home'
  | 'End'
  | 'PageDown'
  | 'PageUp'
  | 'Delete'
  | 'Escape'
  | ' '
  | 'Shift'
