## Directives
ng-app - attach the Application Module to the page
```<html ng-app="store">```

ng-controller - attach a Controller function to the page
```<body ng-controller="StoreController as store">```

ng-show/ng-hide - display a section based on an Express
```<h1 ng-show="name"> Hello, {{name}}! </h1>```

ng-repeat - repeat a section for each item in an Array
```<li ng-repeat="product in store.products"> {{ product.name }}</li>```

ng-init - allows us to evaluate an expression in the current scope

ng-class - accepts a key (name of the class to set) and a value, which is the expression to evaluate.
```ng-class="{ active:tab === 1}"```

Expressions define a 2-way Data Binding, meaning Expressions are re-evaluated when a property changes.
