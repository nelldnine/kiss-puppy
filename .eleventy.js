module.exports = function(e) {
  e.addPassthroughCopy('static');
  return {
    dir: {
      input: 'views'
    },
    templateFormats: ['njk', 'md', 'css'],
  };
}