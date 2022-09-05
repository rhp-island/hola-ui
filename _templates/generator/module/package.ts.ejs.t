---
to: packages/<%=h.changeCase.paramCase(name)%>/package.json
---

{
  "name": "<%= '@poke-ui/' + h.changeCase.paramCase(name)%>",
  "version": "1.0.0",
  "main": "dist/cjs/index.js",
  "module": "dist/esm/index.js",
  "types": "dist/types/index.d.ts",
  "typings": "dist/types/index.d.ts",
  "files": [
    "dist"
  ],
  "description": "<%= 'Atomic UI Vue | ' + h.changeCase.pascalCase(name) + ' module'%>",
  "repository": "https://github.com/rhp-island/poke-ui.git",
  "author": "albert trantoan.fox.97@gmail.com",
  "license": "MIT",
  "scripts": {
    "build": "concurrently yarn:build:*",
    "build:esm": "cross-env BABEL_ENV=esm babel src --root-mode upward --extensions .ts -d dist/esm --source-maps",
    "build:cjs": "cross-env BABEL_ENV=cjs babel src --root-mode upward --extensions .ts -d dist/cjs --source-maps",
  }
}