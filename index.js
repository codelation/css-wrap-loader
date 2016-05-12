module.exports = function(source) {
  this.cacheable();

  var viewName = this.resource.split('/')
                              .slice(-3)
                              .slice(0, 2)
                              .join('/');

  var before = 'body[data-view-name="' + viewName + '"] {';
  var after = '}';

  return [].concat(before, source, after).join('\n');
};
