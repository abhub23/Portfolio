// Prettier configuration file
module.exports = {
  semi: true, // Use semicolons at the end of statements (default: true)
  singleQuote: true, // Use single quotes instead of double quotes for strings (default: false)
  trailingComma: "es5", // Add trailing commas where valid in ES5 (objects, arrays, etc.)
  tabWidth: 2, // Number of spaces per indentation level (default: 2)
  useTabs: false, // Use spaces instead of tabs for indentation (default: false)
  bracketSpacing: true, // Print spaces between brackets in object literals (e.g., { foo: "bar" })
  arrowParens: "always", // Always include parentheses around arrow function parameters (e.g., (x) => x + 1)
  printWidth: 80, // Max line length before Prettier wraps text onto a new line (default: 80)
  proseWrap: "preserve", // Wrap markdown text as-is (default: 'preserve', can also be 'always' or 'never')
  endOfLine: "lf", // Enforce Unix-style line endings ('lf' for Linux/macOS, 'crlf' for Windows)
};
