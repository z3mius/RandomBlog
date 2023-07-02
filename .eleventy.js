// Add above your Eleventy config
const markdownIt = require("markdown-it");

// Add within your config module
const md = new markdownIt({
  html: true,
});


const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {

  eleventyConfig.addFilter("markdown", (content) => {
    return md.render(content);
  });

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