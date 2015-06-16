import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('search', { path: '/search'}, function(){
  	this.route('results', {path: '/:search_term'})
  });
  this.resource('product', {path: '/product/:product_id'});
});

export default Router;