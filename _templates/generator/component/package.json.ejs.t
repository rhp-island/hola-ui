---
to: packages/<%=h.changeCase.paramCase(name)%>/package.json
---

{
  "name": "<%= '@hola-ui/' + h.changeCase.paramCase(name)%>",
  "description": "<%= 'Hola UI Vue | ' + h.changeCase.sentence(description) + ' component'%>",
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
    "@hola-ui/system": "0.1.0-alpha.5"
  },
  "devDependencies": {
    "vue": "^3.1.4"
  },
  "peerDependencies": {
    "vue": "^3.1.4"
  },
  "publishConfig": {
    "access": "public"
  }
}
