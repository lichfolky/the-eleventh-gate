module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/css/");
  eleventyConfig.addWatchTarget("./src/css/");
};
