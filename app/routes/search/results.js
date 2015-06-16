import Ember from 'ember';

export default Ember.Route.extend({
	model: function(params) {
		this.set('search_term', params.search_term);
		return this.store.find('results',{title: this.get('search_term').capitalize()});
	},
	setupController: function(controller,model) {
		controller.set('content',model);
    	controller.set('search_term', this.get('search_term'));
  	}
});