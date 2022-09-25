# `@hola-ui/vue-auto-import`

If you use [Vite](https://vitejs.org), you can use this package to auto import components for you so that you needn't manually import components from Hola UI Vue that you want to consume.


This package depends on the [`unplugin-vue-components`]() to help resolve components from the template. `@hola-ui/vue-auto-import` exports a `componentResolverFunction` that will identify Hola UI Vue components and resolve them for you.

## Installation

```sh
yarn add @hola-ui/vue-auto-import && yarn add -D unplugin-vue-components
# or
npm i @hola-ui/vue-auto-import && npm install --dev unplugin-vue-components
```

## Usage
```ts
// In `vite.config.ts` file

import { defineConfig } from 'vite'
import ComponentsPlugin from 'unplugin-vue-components'
import { componentResolver } from '@hola-ui/vue-auto-import'


export default defineConfig({
  plugins: [
    ComponentsPlugin({
      customComponentResolvers: [componentResolver]
    })
  ]
})
```

That's it! In your template, you can use it as follows:
```vue
<template>
  <c-alert status="info" mb="3">
    <c-alert-title> Info alert </c-alert-title>
    <c-alert-description> Something just happened </c-alert-description>
  </c-alert>
</template>
```