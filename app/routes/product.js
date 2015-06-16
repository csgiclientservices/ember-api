import Ember from 'ember';

export default Ember.Route.extend({
	model: function(params) {
		this.set('product_id', params.product_id);
		return this.store.find('product',{id: this.get('product_id')});
	}
});
