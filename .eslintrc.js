module.exports = {
  extends: 'next/core-web-vitals',
  rules: {
    'max-len': ['error', { 
      code: 90,
      ignoreUrls: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreRegExpLiterals: true
    }]
  }
}; 