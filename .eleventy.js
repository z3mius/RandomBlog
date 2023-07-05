const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {


  eleventyConfig.addPassthroughCopy('src/styles/');
  eleventyConfig.addPassthroughCopy('src/');
  eleventyConfig.addPassthroughCopy('src/admin');
  const md = require("markdown-it")({
    html: true
  })

  eleventyConfig.addNunjucksFilter("markdownify", (markdownString) =>
  md.render(markdownString)
  );

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