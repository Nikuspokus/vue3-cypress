const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "4zrtqs",
  component: {
    devServer: {
      framework: "vue",
      bundler: "vite",
    },
  },
});
