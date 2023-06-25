module.exports = {
  'extends': [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  'root': true,
  'overrides': [
    {
      'files': [
        '*.js',
        '*.ts',
      ],
      'plugins': [
        'import',
      ],
      'rules': {
        'arrow-parens': [
          'error',
          'always',
        ],
        'eol-last': 'error',
        'eqeqeq': [
          'error',
          'smart',
        ],
        'no-multiple-empty-lines': [
          'warn',
          {
            'max': 1,
            'maxBOF': 0,
            'maxEOF': 0,
          },
        ],
        'import/order': [
          'warn',
          {
            'alphabetize': {
              'order': 'asc',
            },
            'newlines-between': 'always',
          },
        ],
      },
    },
    {
      'files': [
        '*.js',
      ],
      'env': {
        'node': true,
      },
    },
    {
      'files': [
        '*.ts',
      ],
      'parser': '@typescript-eslint/parser',
      'parserOptions': {
        'project': [
          'tsconfig.json',
          'tsconfig.app.json',
          'tsconfig.base.json',
          'tsconfig.e2e.json',
          'tsconfig.spec.json',
        ],
        'createDefaultProgram': true,
      },
      'plugins': [
        '@typescript-eslint',
      ],
      'extends': [
        'plugin:@typescript-eslint/recommended',
        'plugin:@angular-eslint/recommended',
        'plugin:@angular-eslint/template/process-inline-templates',
      ],
      'rules': {
        '@angular-eslint/directive-selector': [
          'error',
          {
            'type': 'attribute',
            'prefix': 'app',
            'style': 'camelCase',
          },
        ],
        '@angular-eslint/component-selector': [
          'error',
          {
            'type': 'element',
            'prefix': 'app',
            'style': 'kebab-case',
          },
        ],
        '@typescript-eslint/explicit-member-accessibility': 'error',
        '@typescript-eslint/explicit-function-return-type': [
          'error',
          {
            'allowExpressions': true,
          },
        ],
        '@typescript-eslint/prefer-function-type': 'error',
        '@typescript-eslint/semi': [
          'error',
          'always',
        ],
      },
    },
    {
      'files': [
        '*.component.ts',
      ],
      'parserOptions': {
        'project': [
          'tsconfig.app.json',
        ],
        'createDefaultProgram': true,
      },
      'extends': [
        'plugin:@angular-eslint/recommended',
        'plugin:@angular-eslint/template/process-inline-templates',
      ],
      'rules': {
        '@angular-eslint/component-selector': [
          'error',
          {
            'type': [
              'element',
              'attribute',
            ],
            'prefix': [
              'app',
              'lib',
            ],
            'style': 'kebab-case',
          },
        ],
        'no-restricted-syntax': [
          'error',
          {
            'selector': 'MethodDefinition[kind = \'get\']:not(:matches([accessibility = \'private\'], [accessibility = \'protected\']))',
            'message': 'Avoid public getters in components, as they degrade Angular performance.',
          },
        ],
      },
    },
    {
      'files': [
        '*.spec.ts',
      ],
      'plugins': [
        'ban',
      ],
      'rules': {
        'ban/ban': [
          'error',
          {
            'name': [
              'describe',
              'skip',
            ],
            'message': 'Do not skip tests.',
          },
          {
            'name': [
              'describe',
              'only',
            ],
            'message': 'Do not skip tests.',
          },
          {
            'name': [
              'context',
              'skip',
            ],
            'message': 'Do not skip tests.',
          },
          {
            'name': [
              'context',
              'only',
            ],
            'message': 'Do not skip tests.',
          },
          {
            'name': [
              'it',
              'skip',
            ],
            'message': 'Do not skip tests.',
          },
          {
            'name': [
              'it',
              'only',
            ],
            'message': 'Do not skip tests.',
          },
          {
            'name': [
              'test',
              'skip',
            ],
            'message': 'Do not skip tests.',
          },
          {
            'name': [
              'test',
              'only',
            ],
            'message': 'Do not skip tests.',
          },
          {
            'name': [
              '*',
              'toHaveBeenCalled',
            ],
            'message': 'Methods/functions logic should not be tested; test outcomes instead.',
          },
          {
            'name': [
              '*',
              'toHaveBeenCalledTimes',
            ],
            'message': 'Methods/functions logic should not be tested; test outcomes instead.',
          },
          {
            'name': [
              '*',
              'toHaveBeenCalledWith',
            ],
            'message': 'Methods/functions logic should not be tested; test outcomes instead.',
          },
          {
            'name': [
              '*',
              'toHaveBeenNthCalledWith',
            ],
            'message': 'Methods/functions logic should not be tested; test outcomes instead.',
          },
          {
            'name': [
              '*',
              'toHaveBeenLastCalledWith',
            ],
            'message': 'Methods/functions logic should not be tested; test outcomes instead.',
          },
        ],
      },
    },
    {
      'files': [
        '*.html',
      ],
      'extends': [
        'plugin:@angular-eslint/template/recommended',
      ],
      'rules': {
        '@angular-eslint/template/no-call-expression': 'error',
      },
    },
  ],
};
