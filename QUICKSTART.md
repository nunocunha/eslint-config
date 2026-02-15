# Quick Start Guide - @nunocunha/eslint-config

## 1. Install the Package

```bash
# Authenticate with GitHub Packages
npm login --registry=https://npm.pkg.github.com --scope=@nunocunha

# Install the package (peer dependencies are auto-installed with npm 7+)
npm install --save-dev @nunocunha/eslint-config
```

> **Note**: npm 7+ (Node 15+) automatically installs peer dependencies. If you're using an older version of npm or encounter issues, see the [README](./README.md) for manual installation instructions.

## 2. Create ESLint Config

Create `eslint.config.js`:

```javascript
import config from '@nunocunha/eslint-config';

export default config;
```

## 3. Create Prettier Config

Create `.prettierrc.json`:

```json
"@nunocunha/eslint-config/prettier"
```

## 4. Extend TypeScript Config

Update your `tsconfig.json` to extend the strict configuration:

```json
{
  "extends": "@nunocunha/eslint-config/tsconfig",
  "files": []
}
```

## 5. Add Scripts to package.json

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint --fix .",
    "prettier": "prettier --check .",
    "prettier:fix": "prettier --write ."
  }
}
```

## 6. Run Linting

```bash
# Check for issues
npm run lint

# Auto-fix issues
npm run lint:fix

# Format code
npm run format
```

## Common Customizations

### Multiple Component Prefixes

```javascript
import config from '@nunocunha/eslint-config';

export default [
  ...config,
  {
    rules: {
      '@angular-eslint/component-selector': [
        'error',
        { type: 'element', prefix: ['myapp', 'shared'], style: 'kebab-case' }
      ]
    }
  }
];
```

See the full [README](./README.md) for more customization options.
