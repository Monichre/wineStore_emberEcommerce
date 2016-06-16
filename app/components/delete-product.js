import Ember from 'ember';

export default Ember.Component.extend({
  needToDelete:false,
  allFoundProducts: "",
  actions: {
    findDeleteProduct(products) {
      var productName = this.get('name');
      var allProducts=[];
      products.forEach(function(product) {
        if(product.get('title').includes(productName)){
          allProducts.push(product);
        }
      })
      this.set('allFoundProducts', allProducts);
      this.set('name', "");
      this.set('needToDelete', true);
      console.log(this.allFoundProducts);
    },
    delete(products){
      var list = $('.delete-product-list p span');
      var sublist = $('.delete-product-list p input');
      var productDelete = [];
      list.each(function(x){
        if(sublist[x].checked){
          productDelete.push(list[x].innerHTML);
        }
      });
      var productsDeleteList = [];
      productDelete.forEach(function(product) {
        products.forEach(function(originalProduct){
          if(product === originalProduct.get('title')) {
            productsDeleteList.push(originalProduct);
          }
        });
      });
      this.sendAction('delete', productsDeleteList);
      this.set('needToDelete', false);

    }
  }
});
