import Ember from 'ember';

export default Ember.Component.extend({
  foundProduct: false,
  actions: {
    findProduct(products) {
      var productName = this.get('name');
      var self = this;
      products.forEach(function(product){
        if(product.get('title') === productName) {
          self.set('foundProduct', product);
        }
      });
    },
    updateProduct(product) {
      var params = {
        title: this.get('foundProduct.title'),
        image: this.get('foundProduct.image'),
        description: this.get('foundProduct.description'),
        cost: this.get('foundProduct.cost')
      };
      this.set('foundProduct', false);
      this.sendAction('updateProduct', params, product);
    }
  }
});
