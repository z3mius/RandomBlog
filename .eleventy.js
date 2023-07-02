const { DateTime } = require("luxon");
const markdownIt = require('markdown-it');

module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy('src/styles/');
  eleventyConfig.addPassthroughCopy('src/');
  eleventyConfig.addPassthroughCopy('src/admin');

  eleventyConfig.addFilter('markdown', function (content) {
    const markdown = markdownIt();
    return markdown.render(content);
  })

  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  })

  return {
    dir: {
      input: "src",
      output: "public"
    }
  }
};