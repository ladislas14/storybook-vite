module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    {
      name: '@storybook/addon-docs',
      options: { transcludeMarkdown: true },
    },
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "storybook-addon-live-examples"
  ],
  "core": {
    "builder": "storybook-builder-vite"
  },
  viteFinal: (config, { configType }) => {
      return {
        ...config,
        optimizeDeps: {
          include: [...config.optimizeDeps.include, "react-live"],
        },
      }
  }
}