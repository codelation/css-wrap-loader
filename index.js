module.exports = function(source) {
  this.cacheable();

  var pattern = /(@import\s+["'].*\/views\/([^/]*)\/([^/]*)\/.*\.scss["'];)/g;
  return source.replace(pattern, '[data-view-name="$2/$3"] {\n  $1\n}');
};
