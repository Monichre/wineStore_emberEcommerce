import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),

  productTotal: Ember.computed('shoppingCart.items', function(){
    Ember.Logger.log(this.shoppingCart);
    Ember.Logger.log(this.get('shoppingCart.items').length);
    return this.get('shoppingCart.items');
  }),
  actions: {

    getTotal(){
      Ember.Logger.log(this.shoppingCart);
    }
  }

});
