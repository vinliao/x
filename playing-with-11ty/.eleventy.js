module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/style')
  return {
    passthroughFileCopy: true,
    dir: {
      input: "src",
      output: "dist"
    },
  }
}