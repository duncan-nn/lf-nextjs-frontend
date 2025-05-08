module.exports = {
    extends: ['next', 'next/core-web-vitals', 'eslint:recommended'],
    rules: {
      // turn off a rule
      '@typescript-eslint/no-explicit-any': 'off',
  
      // customize severity: "off", "warn", "error"
      'react-hooks/rules-of-hooks': 'error',
      'no-console': 'warn',
    },
  };
  