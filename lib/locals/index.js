var _ = require('lodash');

module.exports = {
  pageInAncestors: function(page, ancestors) {
    var slugs = _.pluck(ancestors, 'slug');
    return _.contains(slugs, page.slug);
  }
}