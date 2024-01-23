// 11ty configuration, see: https://www.11ty.dev/docs/config/

const markdownItWikilinks = require("markdown-it-wikilinks")();

module.exports = function(eleventyConfig) {
  // Add WikiLinks plugin to Markdown engine
  // See also: https://www.11ty.dev/docs/languages/markdown/#add-your-own-plugins
  eleventyConfig.amendLibrary("md", mdLib => mdLib.use(markdownItWikilinks));
  
  return {
    dir: {
      // Set input directory to `src`
      input: "src"
    }
  }
};
