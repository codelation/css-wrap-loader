module.exports = function(source) {
  this.cacheable();

  if (this.resource.split('/').indexOf('views') < 0) {
    return source;
  }

  var viewName = this.resource.split('/')
                              .slice(-3)
                              .slice(0, 2)
                              .join('/');

  var before = '[data-view-name="' + viewName + '"] {';
  var after = '}';

  return [].concat(before, source, after).join('\n');
};
