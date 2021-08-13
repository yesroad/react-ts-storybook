module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app"
  ],
  babel: async () => ({
    plugins: [
      [
        "@emotion/babel-plugin-jsx-pragmatic",
        {
          "export": "jsx",
          "import": "__to_avoid_prepending_/** @jsxImportSource @emotion/react */",
          "module": "@emotion/react"
        }
      ],
      [
        "@babel/plugin-transform-react-jsx",
        {
          "pragma": "__to_avoid_prepending_/** @jsxImportSource @emotion/react */"
        }
      ],
    ]
  }),  
}