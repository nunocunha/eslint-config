/**
 * Prettier configuration for use with @nunocunha/eslint-config
 * This configuration only handles style rules that have been deprecated in ESLint
 */
module.exports = {
  // Print width - maximum line length before wrapping
  printWidth: 120,

  // Tab width - number of spaces per indentation level
  tabWidth: 2,

  // Use spaces instead of tabs
  useTabs: false,

  // Semicolons at the end of statements
  semi: true,

  // Use single quotes instead of double quotes
  singleQuote: true,

  // Quote object properties only when necessary
  quoteProps: 'as-needed',

  // Use single quotes in JSX
  jsxSingleQuote: false,

  // Trailing commas where valid in ES5 (objects, arrays, etc.)
  trailingComma: 'es5',

  // Spaces between brackets in object literals
  bracketSpacing: true,

  // Put the > of a multi-line HTML element at the end of the last line
  bracketSameLine: false,

  // Include parentheses around a sole arrow function parameter
  arrowParens: 'always',

  // Format only valid code (do not attempt to format invalid code)
  requirePragma: false,

  // Insert @format pragma at the top of formatted files
  insertPragma: false,

  // Wrap prose at printWidth (markdown files)
  proseWrap: 'preserve',

  // Respect whitespace sensitivity in HTML
  htmlWhitespaceSensitivity: 'css',

  // Line endings - use auto to maintain existing line endings
  endOfLine: 'lf',

  // Control quotes around embedded language code (e.g., in markdown)
  embeddedLanguageFormatting: 'auto',

  // Enforce single attribute per line in HTML/JSX when multi-line
  singleAttributePerLine: true,

  // Angular-specific overrides
  overrides: [
    {
      files: '*.html',
      options: {
        parser: 'angular',
        printWidth: 120
      }
    },
    {
      files: '*.component.html',
      options: {
        parser: 'angular',
        printWidth: 120
      }
    }
  ]
};
