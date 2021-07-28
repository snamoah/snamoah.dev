module.exports = {
  extends: [
    'react-app',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  overrides: [
    {
      files: ['*.mdx', '*.md'],
      extends: 'plugin:mdx/recommended',
    },
  ],
  plugins: ['jsx-a11y'],
}
