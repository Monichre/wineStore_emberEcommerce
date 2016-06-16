import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('product');
  },
  actions: {
    saveProduct(params){
      var newProduct = this.store.createRecord('product', params);
      newProduct.save();
    },
    updateProduct(params, product) {
      Object.keys(params).forEach(function(key) {
        console.log(product.get(key));
        if(params[key] != null){
          product.set(key, params[key]);
        }
      });
      product.save();
    },
    delete(products){
      products.forEach(function(product) {
        product.destroyRecord();
      })
    }
  }
});
