(function(){
  var app = angular.module('store', [ ]);

  app.controller('StoreController', function() {
    this.products = gem;
  });

  var gem = [
    {
      name: 'Dodecahedron',
      price: 2.95,
      description: 'Rare gem',
      canPurchase: false,
      soldOut: false
  },
  {
    name: 'Dodecahedron 2',
    price: 5.95,
    description: 'Rare gem',
    canPurchase: false,
    soldOut: false
  }
];
})();
