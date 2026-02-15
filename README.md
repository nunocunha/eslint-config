# @nunocunha/eslint-config

A comprehensive, strict ESLint configuration for TypeScript and Angular projects that follows Google's TypeScript Style Guide with Prettier integration, with some minor customizations.

<!-- TOC -->
* [@nunocunha/eslint-config](#nunocunhaeslint-config)
  * [Versioning Strategy](#versioning-strategy)
  * [Features](#features)
  * [Installation](#installation)
  * [Usage](#usage)
    * [ESLint Configuration](#eslint-configuration)
    * [Prettier Configuration](#prettier-configuration)
    * [TypeScript Configuration](#typescript-configuration)
    * [Package Scripts](#package-scripts)
  * [Customization](#customization)
    * [Changing Component Prefixes](#changing-component-prefixes)
    * [Relaxing Specific Rules](#relaxing-specific-rules)
    * [File-Specific Overrides](#file-specific-overrides)
  * [Rules Included](#rules-included)
    * [TypeScript Rules](#typescript-rules)
    * [Angular Rules](#angular-rules)
    * [Google Style Guide Rules](#google-style-guide-rules)
    * [Prettier Rules (Style Only)](#prettier-rules-style-only)
  * [VS Code Integration](#vs-code-integration)
  * [IntelliJ Integration](#intellij-integration)
  * [CI/CD Integration](#cicd-integration)
  * [License](#license)
<!-- TOC -->

## Versioning Strategy

This package uses a semantic versioning scheme that tracks Angular versions.

For more information, check the [VERSIONING](./VERSIONING.md) file.

## Features

- **Maximum Strictness**: Enables all recommended strict rules for TypeScript and Angular
- **Google Style Guide**: Follows Google's TypeScript coding standards
- **Angular Support**: Full Angular ESLint integration with component/directive/template rules
- **Prettier Integration**: Includes Prettier configuration for deprecated style rules only
- **TypeScript Config**: Strict `tsconfig.json` included for extending
- **Type Safety**: Enforces comprehensive type checking and safety rules
- **Component Prefix Support**: Allows customizable component selector prefixes
- **Plug-and-Play**: Minimal configuration required

## Installation

First, authenticate with GitHub Packages (if you haven't already):

```bash
npm login --registry=https://npm.pkg.github.com --scope=@nunocunha
```

Then install the package:

```bash
npm install --save-dev @nunocunha/eslint-config
```

**Note**: npm 7+ automatically installs peer dependencies. If you're using npm 6 or earlier, or if you prefer explicit control, you can install them manually:

<details>
<summary>Manual peer dependency installation</summary>

```bash
npm install --save-dev @nunocunha/eslint-config \
  @angular-eslint/eslint-plugin@^19.0.0 \
  @angular-eslint/eslint-plugin-template@^19.0.0 \
  @angular-eslint/template-parser@^19.0.0 \
  @typescript-eslint/eslint-plugin@^8.18.0 \
  @typescript-eslint/parser@^8.18.0 \
  eslint@^9.17.0 \
  eslint-config-google@^0.14.0 \
  eslint-config-prettier@^9.1.0 \
  eslint-plugin-prettier@^5.2.1 \
  prettier@^3.4.2 \
  typescript@^5.7.2
```
</details>

## Usage

### ESLint Configuration

Create an `eslint.config.js` (or `eslint.config.mjs`) file in your project root:

```javascript
import config from '@nunocunha/eslint-config';

export default [
  ...config,
  // Your custom overrides here (optional)
  {
    rules: {
      // Override rules if needed
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: 'myapp', // Change to your prefix
          style: 'kebab-case'
        }
      ],
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          prefix: 'myapp', // Change to your prefix
          style: 'camelCase'
        }
      ]
    }
  }
];
```

For CommonJS projects, use `eslint.config.js`:

```javascript
const config = require('@nunocunha/eslint-config');

module.exports = [
  ...config,
  // Your custom overrides here (optional)
];
```

### Prettier Configuration

Create a `.prettierrc.json` file in your project root:

```json lines
"@nunocunha/eslint-config/prettier"
```

Or create a `.prettierrc.js` file:

```javascript
module.exports = require('@nunocunha/eslint-config/prettier');
```

Or extend it with your own customizations:

```javascript
const config = require('@nunocunha/eslint-config/prettier');

module.exports = {
  ...config,
  // Your custom overrides
};
```

### TypeScript Configuration

Extend the provided strict TypeScript configuration in your `tsconfig.json`:

```json lines
{
  "extends": "@nunocunha/eslint-config/tsconfig",
  // ...
}
```

Or if you prefer to configure it yourself, ensure these strict settings are enabled:

<details>
<summary>Manual TypeScript configuration</summary>

```json lines
{
  "compilerOptions": {
    "strict": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true,
    "strictBindCallApply": true,
    "strictPropertyInitialization": true,
    "noImplicitThis": true,
    "alwaysStrict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedIndexedAccess": true,
    "noImplicitOverride": true,
    "noPropertyAccessFromIndexSignature": true
  },
  "angularCompilerOptions": {
    "strictTemplates": true,
    "strictInjectionParameters": true,
    "strictInputAccessModifiers": true
  }
}
```
</details>

### Package Scripts

Add these scripts to your `package.json`:

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

## Customization

### Changing Component Prefixes

The default prefixes are `app` and `lib`. To use different prefixes:

```javascript
export default [
  ...config,
  {
    files: ['**/*.ts'],
    rules: {
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: ['myapp', 'shared'], // Multiple prefixes allowed
          style: 'kebab-case'
        }
      ],
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          prefix: ['myapp', 'shared'],
          style: 'camelCase'
        }
      ],
      '@angular-eslint/pipe-prefix': [
        'error',
        { prefixes: ['myapp', 'shared'] }
      ]
    }
  }
];
```

### Relaxing Specific Rules

If certain rules are too strict for your project:

```javascript
export default [
  ...config,
  {
    files: ['**/*.ts'],
    rules: {
      // Disable specific rules
      '@typescript-eslint/no-explicit-any': 'off',
      
      // Or adjust severity
      '@typescript-eslint/explicit-function-return-type': 'warn',
      
      // Or customize rule options
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'default',
          format: ['camelCase', 'PascalCase'], // Allow both
          leadingUnderscore: 'allow' // Allow leading underscores
        }
      ]
    }
  }
];
```

### File-Specific Overrides

Apply different rules to specific files:

```javascript
export default [
  ...config,
  {
    files: ['**/*.spec.ts', '**/*.test.ts'],
    rules: {
      // More lenient rules for test files
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off'
    }
  },
  {
    files: ['**/environments/**/*.ts'],
    rules: {
      // Allow any in environment files
      '@typescript-eslint/no-explicit-any': 'off'
    }
  }
];
```

## Rules Included

This configuration includes:

### TypeScript Rules
- All `@typescript-eslint` recommended and strict rules
- Comprehensive type checking and safety rules
- Strict naming conventions following Google style
- Explicit return types and member accessibility
- No `any` types (with fix to `unknown`)
- Consistent type imports and exports

### Angular Rules
- Component and directive class suffix enforcement
- Component selector prefix configuration
- Template best practices and accessibility rules
- OnPush change detection preference
- Standalone component preference
- Lifecycle method ordering and interfaces

### Google Style Guide Rules
- Maximum line length of 120 characters
- No `var`, prefer `const`
- No implicit coercion or type conversion
- Strict equality checks (`===`), relaxed for null-checks
- Required curly braces for all control structures
- Banned dangerous features (eval, with, etc.)

### Prettier Rules (Style Only)
- 120 character line width
- 2 space indentation
- Single quotes for strings
- Semicolons required
- Trailing commas (ES5)
- LF line endings

## VS Code Integration

Install the ESLint and Prettier extensions, then add to your `.vscode/settings.json`:

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  },
  "eslint.validate": [
    "javascript",
    "typescript",
    "html"
  ]
}
```

## IntelliJ Integration

Install the Prettier extension, ESLint should be available already. Then add the following files:

`.idea/jsLinters/eslint.xml`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project version="4">
  <component name="EslintConfiguration">
    <option name="fix-on-save" value="true" />
  </component>
</project>
```

`.idea/prettier.xml`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project version="4">
    <component name="PrettierConfiguration">
        <option name="myConfigurationMode" value="AUTOMATIC" />
        <option name="myRunOnSave" value="true" />
    </component>
</project>
```

## CI/CD Integration

Add to your CI pipeline:

```yaml
# GitHub Actions example
- name: Lint and Format Check
  run: |
    npm run lint
    npm run prettier
```

## License

[MIT](./LICENSE)

## Contributing

Issues are always welcome, even documentation ones. If anything is wrong, please [open a new issue](https://github.com/nunocunha/eslint-config/issues/new)!
