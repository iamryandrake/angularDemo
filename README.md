## Directives
ng-app - attach the Application Module to the page
```<html ng-app="store">```

ng-controller - attach a Controller function to the page
```<body ng-controller="StoreController as store">```

ng-show/ng-hide - display a section based on an Express
```<h1 ng-show="name"> Hello, {{name}}! </h1>```

ng-repeat - repeat a section for each item in an Array
```<li ng-repeat="product in store.products"> {{ product.name }}</li>```
