import DS from 'ember-data';

var Product = DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string')
});

Product.reopenClass({
  FIXTURES: [
    { id: 1, title: "Product Name", description: "This is our product summary" },
  ]
});

export default Product;