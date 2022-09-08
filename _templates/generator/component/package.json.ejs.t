---
to: packages/<%=h.changeCase.paramCase(name)%>/package.json
---

{
  "name": "<%= '@hola-ui/' + h.changeCase.paramCase(name)%>",
  "description": "<%= 'Hola UI Vue | ' + h.changeCase.sentence(name) + ' component'%>",
  "version": "0.0.0-alpha.0",
  "main": "<%= 'dist/hola-ui-' + h.changeCase.paramCase(name) + '.cjs.js' %>",
  "module": "<%= 'dist/hola-ui-' + h.changeCase.paramCase(name) + '.esm.js' %>",
  "author": "Albert Tran <trantoan.fox.97@gmail.com>",
  "homepage": "https://github.com/rhp-island/hola-ui#readme",
  "license": "MIT",
  "files": [
    "dist"
  ],
  "exports": {
    ".": {
      "require": "<%= './dist/hola-ui-' + h.changeCase.paramCase(name) + '.cjs.js' %>",
      "default": "<%= './dist/hola-ui-' + h.changeCase.paramCase(name) + '.esm.js' %>"
    }
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/rhp-island/hola-ui.git"
  },
  "bugs": {
    "url": "https://github.com/rhp-island/hola-ui/issues"
  },
  "sideEffects": false,
    "scripts": {
    "clean": "rimraf dist"
  },
  "dependencies": {
    "@hola-ui/system": "latest"
  },
  "devDependencies": {
    "vue": "latest"
  },
  "peerDependencies": {
    "vue": "latest"
  },
  "publishConfig": {
    "access": "public"
  }
}
