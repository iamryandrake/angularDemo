(function(){
  var app = angular.module('store', [ ]);

  app.controller('StoreController', function() {
    this.product = gem;
  });

  var gems = [
    {
      name: 'Dodecahedron',
      price: 2.95,
      description: 'Rare gem',
      canPurchase: false,
      soldOut: true
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
