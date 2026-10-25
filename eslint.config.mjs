// eslint.config.mjs
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  // 1. Global Ignores (Replaces .eslintignore)
  {
    ignores: [
      '**/dist/**', 
      '**/build/**', 
      '**/node_modules/**', 
      'coverage/'
    ],
  },
  
  // 2. Recommended ESLint & TypeScript Rules
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  
  // 3. Target Specific Files
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parserOptions: {
        projectService: true, // Enables type-checked linting rules
      },
    },
    rules: {
        // Add custom rules here
        "no-console": "error",
        "dot-notation": "error"
    },
  }
);
