# `@hola-ui/vue` for Vue 3 / Nuxt 3 (WIP)

The official working repository for V1 of Atomic UI Vue with Vue 3 / Nuxt 3 support.

### Install dependencies
```bash
yarn install
```

### Watch components
```bash
yarn start
```

### Component playground (based on vite)
```bash
# In one background terminal (Only needs to be run once)
yarn start

# In another terminal
yarn playground:dev
```

## Development Guide
### Major todos:
- [-] Documentation (WIP)
- [-] Accessibility JS hooks (WIP, Documented in Roadmap)

### Creating a new commit message
The commits follow the [conventional commit format](https://www.conventionalcommits.org/). Husky is setup to lint your commit messages to match this format. 
```bash
type(scope?): subject #scope is optional; multiple scopes are supported (current delimiter options: "/", "\" and ",")
```

For example:

```bash
git commit -m "feat(component): create x component"

git commit -m "chore: update x dependencies"
```