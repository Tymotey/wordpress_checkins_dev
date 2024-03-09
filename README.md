# DEV install

Composer is required. Download it from: [Composer page](https://getcomposer.org/download/)
Node.js is required. Download it from: [Node.js page](https://nodejs.org/en/download/current)

```
open terminal to plugin folder
npm install
npm run postInstall
```

# DEV tests

```
npx playwright test --ui
```

# DEV + prepare plugin Live

```
npm run devAll
npm run devBlocks
npm run devAdmin
==================
npm run prepareLive
```

# Help

Refresh composer autload
`composer dump-autoload -o`
