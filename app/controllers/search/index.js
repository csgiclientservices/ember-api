export default Ember.ArrayController.extend({
  actions: {
	  submitSearch: function() {
	  	  var searchItem = this.get('searchItem');
	  	  this.transitionToRoute('search.results',searchItem);
	  }
  }
});