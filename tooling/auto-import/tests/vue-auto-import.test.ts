import { componentResolver } from "../src"

it("should resolve hola components with import name and path", () => {
  const components = [
    "HCloseButton",
    "HBox",
    "HPortal",
    "HHStack",
    "HVStack",
    "HBox",
    "HCircle",
    "HSquare",
    "HKbd",
  ]

  const path = "@hola-ui/vue-next"

  components.forEach((templateComponent: string) => {
    expect(componentResolver(templateComponent)).toEqual({
      importName: templateComponent,
      path,
    })
  })
})
