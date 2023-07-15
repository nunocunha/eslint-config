module.exports = {
  extends: [
    `eslint:recommended`,
    `plugin:@typescript-eslint/recommended`,
  ],
  root: true,
  overrides: [
    {
      files: [
        `*.js`,
        `*.ts`,
      ],
      extends: [
        `plugin:import/recommended`,
        `plugin:import/typescript`,
      ],
      plugins: [
        `import`,
        `import-newlines`,
      ],
      rules: {
        'array-bracket-newline': [
          `error`,
          {minItems: 2},
        ],
        'array-element-newline': [
          `error`,
          `always`,
        ],
        'arrow-parens': [
          `error`,
          `always`,
        ],
        'comma-dangle': [
          `error`,
          `always-multiline`,
        ],
        'eol-last': `error`,
        eqeqeq: [
          `error`,
          `smart`,
        ],
        'grouped-accessor-pairs': [
          `error`,
          `getBeforeSet`,
        ],
        'import-newlines/enforce': [
          `error`,
          {items: 1},
        ],
        'import/order': [
          `error`,
          {
            alphabetize: {order: `asc`},
            'newlines-between': `always`,
          },
        ],
        'import/no-self-import': `error`,
        indent: [
          `error`,
          2,
        ],
        'key-spacing': [
          `error`,
          {
            beforeColon: false,
            afterColon: true,
            mode: `strict`,
          },
        ],
        'max-len': [
          `error`,
          {
            code: 120,
            tabWidth: 2,
            ignoreUrls: true,
          },
        ],
        'newline-per-chained-call': [
          `error`,
          {ignoreChainWithDepth: 1},
        ],
        'no-duplicate-imports': [`error`],
        'no-multiple-empty-lines': [
          `error`,
          {
            max: 1,
            maxBOF: 0,
            maxEOF: 0,
          },
        ],
        'no-sequences': `error`,
        "object-curly-spacing": [
          `error`,
          `never`,
        ],
        'object-curly-newline': [
          `error`,
          {
            multiline: true,
            minProperties: 2,
          },
        ],
        'object-property-newline': `error`,
        'prefer-regex-literals': [
          `error`,
          {disallowRedundantWrapping: true},
        ],
        'prefer-template': [`error`],
        quotes: [
          `error`,
          `backtick`,
        ],
        'quote-props': [
          `error`,
          `as-needed`,
        ],
        'sort-imports:': `off`,
        'spaced-comment': [
          `error`,
          `always`,
          {block: {balanced: true}},
        ],
      },
    },
    {
      files: [`*.js`],
      env: {node: true},
    },
    {
      files: [`*.ts`],
      parser: `@typescript-eslint/parser`,
      plugins: [`@typescript-eslint`],
      extends: [
        `plugin:@typescript-eslint/recommended`,
        `plugin:@angular-eslint/recommended`,
        `plugin:@angular-eslint/template/process-inline-templates`,
      ],
      rules: {
        '@angular-eslint/component-selector': [
          `error`,
          {
            type: `element`,
            prefix: `app`,
            style: `kebab-case`,
          },
        ],
        '@angular-eslint/directive-selector': [
          `error`,
          {
            type: `attribute`,
            prefix: `app`,
            style: `camelCase`,
          },
        ],
        '@typescript-eslint/explicit-function-return-type': [
          `error`,
          {allowExpressions: true},
        ],
        '@typescript-eslint/explicit-member-accessibility': `error`,
        '@typescript-eslint/naming-convention': [
          `error`,
          {
            selector: `default`,
            format: [`camelCase`],
            leadingUnderscore: `forbid`,
            trailingUnderscore: `forbid`,
          },
          {
            selector: `default`,
            modifiers: [`private`],
            format: [`camelCase`],
            leadingUnderscore: `allow`,
          },
          {
            selector: `default`,
            modifiers: [`requiresQuotes`],
            format: null,
          },
          {
            selector: [`classProperty`],
            modifiers: [`static`],
            format: [`UPPER_CASE`],
            leadingUnderscore: `forbid`,
          },
          {
            selector: [
              `class`,
              `interface`,
              `enum`,
              `typeAlias`,
            ],
            format: [`PascalCase`],
            leadingUnderscore: `forbid`,
          },
          {
            selector: [
              `accessor`,
              `classProperty`,
              // Do NOT enable this one, makes it impossible to use/configure external dependencies.
              // `objectLiteralProperty`,
              `parameter`,
              `parameterProperty`,
              `variable`,
            ],
            types: [`boolean`],
            format: [`PascalCase`],
            prefix: [
              `is`,
              `has`,
              `can`,
            ],
          },
          {
            selector: [`variable`],
            modifiers: [`exported`],
            format: [`UPPER_CASE`],
          },
        ],
        '@typescript-eslint/prefer-function-type': `error`,
        '@typescript-eslint/semi': [
          `error`,
          `always`,
        ],
      },
    },
    {
      files: [`*.component.ts`],
      extends: [
        `plugin:@angular-eslint/recommended`,
        `plugin:@angular-eslint/template/process-inline-templates`,
      ],
      rules: {
        '@angular-eslint/component-selector': [
          `error`,
          {
            type: [
              `element`,
              `attribute`,
            ],
            prefix: [
              `app`,
              `lib`,
            ],
            style: `kebab-case`,
          },
        ],
        'no-restricted-syntax': [
          `error`,
          {
            selector: `MethodDefinition[kind = 'get']:not(:matches([accessibility = 'private'], [accessibility = 'protected']))`,
            message: `Avoid public getters in components, as they degrade Angular performance.`,
          },
        ],
      },
    },
    {
      files: [`*.spec.ts`],
      plugins: [`ban`],
      rules: {
        'ban/ban': [
          `error`,
          {
            name: [
              `describe`,
              `skip`,
            ],
            message: `Do not skip tests.`,
          },
          {
            name: [
              `describe`,
              `only`,
            ],
            message: `Do not skip tests.`,
          },
          {
            name: [
              `context`,
              `skip`,
            ],
            message: `Do not skip tests.`,
          },
          {
            name: [
              `context`,
              `only`,
            ],
            message: `Do not skip tests.`,
          },
          {
            name: [
              `it`,
              `skip`,
            ],
            message: `Do not skip tests.`,
          },
          {
            name: [
              `it`,
              `only`,
            ],
            message: `Do not skip tests.`,
          },
          {
            name: [
              `test`,
              `skip`,
            ],
            message: `Do not skip tests.`,
          },
          {
            name: [
              `test`,
              `only`,
            ],
            message: `Do not skip tests.`,
          },
          {
            name: [
              `*`,
              `toHaveBeenCalled`,
            ],
            message: `Methods/functions logic should not be tested; test outcomes instead.`,
          },
          {
            name: [
              `*`,
              `toHaveBeenCalledTimes`,
            ],
            message: `Methods/functions logic should not be tested; test outcomes instead.`,
          },
          {
            name: [
              `*`,
              `toHaveBeenCalledWith`,
            ],
            message: `Methods/functions logic should not be tested; test outcomes instead.`,
          },
          {
            name: [
              `*`,
              `toHaveBeenNthCalledWith`,
            ],
            message: `Methods/functions logic should not be tested; test outcomes instead.`,
          },
          {
            name: [
              `*`,
              `toHaveBeenLastCalledWith`,
            ],
            message: `Methods/functions logic should not be tested; test outcomes instead.`,
          },
        ],
      },
    },
    {
      files: [`*.html`],
      extends: [`plugin:@angular-eslint/template/recommended`],
      rules: {'@angular-eslint/template/no-call-expression': `error`},
    },
    {
      files: [`.eslintrc.js`],
      rules: {
        'sort-keys': `off`,
        'max-len': `off`,
      },
    },
  ],
};
