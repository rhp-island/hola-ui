import { canUseDOM } from '@hola-ui/utils'

export const defaultWindow = canUseDOM() ? window : null
export { canUseDOM }
