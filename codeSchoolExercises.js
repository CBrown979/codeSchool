//Shaping up with Angular
// Creating a Store Module

//The Flatlanders need a store to sell their gems and more! They need it really quick, Angular will do the trick!

// They have figured out how to manipulate time and space, allowing them to create three-dimensional gems. 
// The buying and selling of their gems has become a popular Flatlander practice and they believe the next step 
// is taking their wonderful wares to the fourth dimension (the web).

//Create a Module named gemStore so we can get started on this marketing journey.
var app = angular.module('gemStore', []);

//Attach the gemStore module to our HTML page with a Direct
//In the index.html file, add the ng-app directive to the html tag. this reference the first tag under DocType tag
//had to commentout the answer    <html ng-app="gemStore"> 

//In index.html, create a simple Expression to display a friendly "Hello, Angular!" message.
<h1>{{"Hello," + " Angular!"}}</h1>

//In order to add some behavior to our application, we need a controller. 
//Add a controller named StoreController to our gemStore application.
app.controller('StoreController', function(){});

//Attach the StoreController to the <body> tag. Be sure to alias it as store.
ng-controller="StoreController as store"

//In app.js, we've added a gem object to represent one of the products in our gemStore. 
//Assign it to the product property of StoreController so we can use them in the page.
this.product = gem

//Display the name of the product inside the <h3> tag.
{{store.product.name}}

//Display the price of the product inside the <em> tag.
{{store.product.price}}

//Not For Sale
//We've added two new properties to our product that we can use on the HTML side. The first of these two is canPurchase, 
//which is a boolean indicating if the product can be purchased. The second is soldOut which, as you can imagine, is a boolean 
//indicating if the product is sold out.
//Use these two new properties in our HTML page to solve the following objectives.

//Use a directive to ensure that we can only see the "Add to Cart" button if the canPurchase property is true.
ng-show="store.product.canPurchase"

//Our first gem is so popular that we've run out of stock already! Well, Flatlander gems are pretty rare, so it shouldn't be a 
//big surprise. Luckily there is a soldOut property to our gem. When a gem is soldOut, hide the .product element.
ng-hide="store.product.soldOut"

//Looks like the Flatlanders have discovered more gems for us to sell in the gemStore. 
//That's a relief! Follow the objectives below to add these new gems to the store.
this.products=gems;

//You know how to display all the products, don't you? Use the correct directive to display all the products in product row divs.
ng-repeat="product in store.products




