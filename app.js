(function(){
  var app = angular.module('store', [ ]);

  app.controller('StoreController', function() {
    this.products = gem;
  });

  app.controller('PanelController', function() {
    this.tab = 1;

    this.selectTab = function (setTab) {
      this.tab = setTab;
    };

    this.isSelected = function(checkTab) {
      return this.tab === checkTab;
    };
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
