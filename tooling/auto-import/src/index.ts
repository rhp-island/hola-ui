import * as HolaComponents from "@hola-ui/vue-next"

export const componentResolver = (name: string) => {
  if (name in HolaComponents) {
    return {
      importName: name,
      path: `@hola-ui/vue-next`,
    }
  }
}
