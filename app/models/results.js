import DS from 'ember-data';

var Results = DS.Model.extend({
  title: DS.attr('string')
});

Results.reopenClass({
  FIXTURES: [
    { id: 1, title: "Buffy" },
    { id: 1, title: "Angel" }
  ]
});

export default Results;