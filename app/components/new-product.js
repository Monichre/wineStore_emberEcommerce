import Ember from 'ember';

export default Ember.Component.extend({
  newProductForm: false,
  actions: {
    addNewProduct() {
      this.set('newProductForm', true);
    },
    saveProduct(){
      var params = {
        title: this.get('title'),
        image: this.get('image'),
        description: this.get('description'),
        cost: parseInt(this.get('cost')),
      };
      this.set('newProductForm', false);
      this.sendAction("saveProduct", params);
    }
  }

});
