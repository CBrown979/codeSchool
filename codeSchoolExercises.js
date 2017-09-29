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

//Using Filters
//In the previous challenge we practiced displaying the prices of gems in our index.html. The first gem, Azurite, 
//now costs $110.50 (due to supply shortages) but our current code doesn't display the price correctly.

//Use an Angular filter to display the price as a currency.
{{product.price | currency}}

//Displaying the First Image
//We've added images to all products as well – like any self respecting store should have. A product has an array of images 
//we can use in our HTML. Let's get the first image to show on the page!

//We want to display the first full-sized image for each product. 
<img ng-src="{{product.images[0]}}" />

//Our 2-dimensional clients have worked hard to produce multiple images for their gems. Display all the thumbnails inside 
//our gallery without repeating yourself by using an AngularJS directive on the li.thumbnail element.

//Make the li's repeat for each image in the image array. Use the variable image as your identifier.
li class="small-image pull-left thumbnail" ng-repeat="image in product.images" >

//Now that we have image available from our ng-repeat let's replace the product.images[0] with it.
<img ng-src="{{image}}" />

//Many times a product will be ready to sell, but won't have images yet (like our first one). 
//In this case the images array will just be empty. Note the change in our gems array.
//We don't want to display the .gallery element if there are no images. Create an expression on our .gallery div to make this happen.

//Use the ng-show directive to make sure our image gallery is only displayed if a product has images.
div class="gallery" ng-show="product.images.length > 0">

//We just learned that cramming a bunch of logic into our HTML is kinda bad. 
//Let's start the Right Way with a Controller which will control our tabs.
app.controller('TabController', function(){});

//An empty Controller isn't much use. Do you remember why we needed a Controller at all? 
//That's right, we need to initialize the tab property. Go ahead and add that property now, setting it to 1.
app.controller('TabController', function(){
    this.tab=1;
  });
  
//In order to set the current tab, we'll need a setTab method to use in our HTML. 
//It should set the tab property of TabController to a value passed in.
app.controller('TabController', function(){
  this.tab = 1;
  this.setTab = function(selectedTab){
    this.tab = selectedTab;
  };
});

//We've got a setTab method. Now we need an isSet method that accepts a value and returns whether that value matches this.tab.
this.isSet = function(isSet) {
      return this.tab === isSet;
    };

//FULL Example within app.js
(function() {
  var app = angular.module('gemStore', []);

  app.controller('StoreController', function(){
    this.products = gems;
  });

  app.controller('TabController', function() {
    this.tab = 1;
    
    this.setTab = function(setTab) {
      this.tab = setTab;
    };
    this.isSet = function(isSet) {
      return this.tab === isSet;
    };
  });

  var gems = [
      {
        name: 'Azurite',
        description: "Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.",
        shine: 8,
        price: 110.50,
        rarity: 7,
        color: '#CCC',
        faces: 14,
        images: [
          "images/gem-02.gif",
          "images/gem-05.gif",
          "images/gem-09.gif"
        ],
        reviews: [{
          stars: 5,
          body: "I love this gem!",
          author: "joe@example.org",
          createdOn: 1397490980837
        }, {
          stars: 1,
          body: "This gem sucks.",
          author: "tim@example.org",
          createdOn: 1397490980837
        }]
      },
      {
        name: 'Bloodstone',
        description: "Origin of the Bloodstone is unknown, hence its low value. It has a very high shine and 12 sides, however.",
        shine: 9,
        price: 22.90,
        rarity: 6,
        color: '#EEE',
        faces: 12,
        images: [
          "images/gem-01.gif",
          "images/gem-03.gif",
          "images/gem-04.gif",
        ],
        reviews: [{
          stars: 3,
          body: "I think this gem was just OK, could honestly use more shine, IMO.",
          author: "JimmyDean@example.org",
          createdOn: 1397490980837
        }, {
          stars: 4,
          body: "Any gem with 12 faces is for me!",
          author: "gemsRock@example.org",
          createdOn: 1397490980837
        }]
      },
      {
        name: 'Zircon',
        description: "Zircon is our most coveted and sought after gem. You will pay much to be the proud owner of this gorgeous and high shine gem.",
        shine: 70,
        price: 1100,
        rarity: 2,
        color: '#000',
        faces: 6,
        images: [
          "images/gem-06.gif",
          "images/gem-07.gif",
          "images/gem-09.gif"
        ],
        reviews: [{
          stars: 1,
          body: "This gem is WAY too expensive for its rarity value.",
          author: "turtleguyy@example.org",
          createdOn: 1397490980837
        }, {
          stars: 1,
          body: "BBW: High Shine != High Quality.",
          author: "LouisW407@example.org",
          createdOn: 1397490980837
        }, {
          stars: 1,
          body: "Don't waste your rubles!",
          author: "nat@example.org",
          createdOn: 1397490980837
        }]
      }
    ];
})();

//FULL Example within index.html
<!DOCTYPE html>
<html ng-app="gemStore">
  <head>
    <link rel="stylesheet" type="text/css" href="bootstrap.min.css" />
    <script type="text/javascript" src="angular.min.js"></script>
    <script type="text/javascript" src="app.js"></script>
  </head>
  <body ng-controller="StoreController as store">

    <!--  Products Container  -->
    <div class="list-group">
      <!--  Product Container  -->
      <div class="list-group-item" ng-repeat="product in store.products">
        <h3>
          {{product.name}}
          <em class="pull-right">{{product.price | currency}}</em>
        </h3>

        <!-- Image Gallery  -->
        <div ng-show="product.images.length">
        <!-- Fail 1 Message -->
        <div ng-show="product.images">
          <img class="img img-circle img-thumbnail center-block" ng-src="{{product.images[0]}}" />
          <ul class="clearfix">
            <li class="small-image pull-left thumbnail" ng-repeat="image in product.images"> <img ng-src="{{image}}" /> </li>
          </ul>
        </div>

      </div>
    </div>
  </body>
</html>

//To connect our controller to our page, we're going to need a few directives. 
//Try to figure out which ones to use, but if you get stuck we'll give you hints along the way. 
//We've provided all the HTML for you. Try to accomplish the following tasks:
//Attach the TabController to the <section> element with the .tab class. Don't forget to also add an alias.
<section class="tab" ng-controller="TabController as tab">

//Trigger the setTab method when a link inside a tab is clicked. Add this to each of the tab links. 
//Pass in the number of the tab, in this case 1, 2 or 3.
<ul class="nav nav-pills">
  <li>
    <a href ng-click="tab.setTab(1)">Description</a></li>
  <li>
    <a href ng-click="tab.setTab(2)">Specs</a></li>
  <li>
    <a href ng-click="tab.setTab(3)">Reviews</a></li>
</ul>

//Use the isSet method to show the corresponding tab. 
//You'll need to add a directive to each of the <div> elements in .tab.
<div ng-show="tab.isSet(1)">
          <h4>Description</h4>
          <blockquote>{{product.description}}</blockquote>
        </div>
        <div ng-show="tab.isSet(2)">
          <h4>Specs</h4>
          <blockquote>Shine: {{product.shine}}</blockquote>
        </div>
        <div ng-show="tab.isSet(3)">
          <h4>Reviews</h4>
          <blockquote></blockquote>

//Add the active class to the correct <li> when each tab is clicked. 
//You'll need to add a directive to each <li> in .nav.          
<section class="tab" ng-controller="TabController as tab">
  <ul class="nav nav-pills">
    <li ng-class="{ active: tab.isSet(1) }">
      <a href ng-click="tab.setTab(1)">Description</a></li>
    <li ng-class="{ active: tab.isSet(2) }">
      <a href ng-click="tab.setTab(2)">Specs</a></li>
    <li ng-class="{ active: tab.isSet(3) }">
      <a href ng-click="tab.setTab(3)">Reviews</a></li>
  </ul>
  
//Within the Description tab, output the product's description within the <blockquote> element.
  <blockquote>{{product.description}}</blockquote>

//Within the Specs tab, output the product's shine value. 
//It should look something like this within the <blockquote> element: "Shine: 4".
<section class="tab" ng-controller="TabController as tab">
  <ul class="nav nav-pills">
    <li ng-class="{ active: tab.isSet(1) }">
      <a href ng-click="tab.setTab(1)">Description</a></li>
    <li ng-class="{ active: tab.isSet(2) }">
      <a href ng-click="tab.setTab(2)">Specs</a></li>
    <li ng-class="{ active: tab.isSet(3) }">
      <a href ng-click="tab.setTab(3)">Reviews</a></li>
  </ul>
  <div ng-show="tab.isSet(1)">
    <h4>Description</h4>
    <blockquote>{{product.description}}</blockquote>
  </div>
  <div ng-show="tab.isSet(2)">
    <h4>Specs</h4>
    <blockquote>Shine: {{product.shine}}</blockquote>
  </div>
  <div ng-show="tab.isSet(3)">
    <h4>Reviews</h4>
  </div>
</section>

//Creating Gallery Controller
//Now that you're such a whiz with tabbed tab, can you apply what you've learned to our image gallery, too? 
//Don't worry, we'll start slow… And there's a lot more in common than you might think!

//Let's start with a Controller, just like last time. Call it GalleryController.
app.controller('GalleryController', function(){
    this.current = 0; //Initialize a current property of GalleryController with a value of 0.
});

//Add a method to GalleryController called setCurrent that accepts a value and assigns it to current. 
//If no value is passed in, set current to 0.
app.controller('GalleryController', function(){
    this.current = 0;
    this.setCurrent = function(newGallery){
    this.current = newGallery || 0;
  };
  
//Using Gallery Controller
//Now that we've got an awesome GalleryController, let's wire it up to the page:

//Attach GalleryController to the .gallery element that wraps our gallery; use the alias gallery.
//Use the ng-controller directive, aliasing the controller as gallery.
<div class='gallery' ng-controller="GalleryController as gallery"  ng-show="product.images.length">
</div>

//Change the first ng-src directive to use the current property. Properly use current as the index instead of 0.
 <div class='gallery' ng-controller="GalleryController as gallery"  ng-show="product.images.length">
        <div class="img-wrap">
          <img ng-src="{{product.images[gallery.current]}}" />
        </div>
        <ul class="img-thumbnails clearfix">
          <li class="small-image pull-left thumbnail" ng-repeat="image in product.images">
            <img ng-src="{{image}}" />
          </li>
        </ul>
      </div>
      
//Displaying Reviews should seem repetitive
//We added reviews to all the products, as you can see in the js file. Inside our Reviews tab display ALL the reviews for a
//product. Make sure you show the reviews body, author, and stars.

//You need to create multiple li's for each review that exists.
<li ng-repeat="review in product.reviews">

//Set the blockquote stars ( strong tag) to the review stars.
<li ng-repeat="review in product.reviews">
                <blockquote>
                  <strong>{{review.stars}} Stars</strong>
                  {{review.body}}
                  
                  <cite class="clearfix">—</cite>
                </blockquote>
              </li>
                  
//Set the cite to the review author.
    <cite class="clearfix">{{review.author}}</cite>
    
//Create a Review Form
//We have provided a form below the list of reviews and a preview blockquote that will show when the form is being filled out. 
//Add ng-model to each input item stars, body, and author. Remember, each one is a part of the review object as a whole.

//Use ng-model for review.stars select form field.
<select ng-model="review.stars" class="form-control" ng-options="stars for stars in [5,4,3,2,1]" title="Stars">
  <option value="">Rate the Product</option>
</select>

//Use ng-model for review.body for the forms textarea.
<h4>Submit a Review</h4>
              <fieldset class="form-group">
                <select ng-model="review.stars" class="form-control" ng-options="stars for stars in [5,4,3,2,1]"  title="Stars">
                  <option value="">Rate the Product</option>
                </select>
              </fieldset>
              <fieldset class="form-group">
                <textarea ng-model="review.body" class="form-control" placeholder="Write a short review of the product..." title="Review"></textarea>
              </fieldset>
              <fieldset class="form-group">
                <input ng-model="review.author" type="email" class="form-control" placeholder="jimmyDean@example.org" title="Email" />
              </fieldset>
              <fieldset class="form-group">
                <input type="submit" class="btn btn-primary pull-right" value="Submit Review" />
              </fieldset>
            </form>
            
//REview Live Preview
//Display all three parts of the review in the preview blockquote.

//In the strong tag, before Stars, put in the right expression to display review.stars. 
//Keep the space prior to Stars
<strong>{{review.stars}} Stars</strong>

//On the blank line with no tags put in the right expression to display review.body
{{review.body}}

//In the cite tag, immediately after the -, put in the right expression to display review.author.
//Live Preview
<blockquote>
  <strong>{{review.stars}} Stars</strong>
  {{review.body}}
  <cite class="clearfix">-{{review.author}}</cite>
</blockquote>

//Creating Review Controller 
//Create a ReviewController and inside of it an empty review ripe for the stuffing! 
//Then below that create the functionality to create new reviews.

//Create a new controller called ReviewController.
  app.controller('ReviewController', function(){
      //Set our review variable to an empty object when the ReviewController is created.
      this.review={};
      
      //Create an empty function named addReview in your ReviewController.
      this.addReview = function(product) {

    //We'll pass in the product we want to review to our addReview function. 
    //Edit your function declaration to accept a product parameter -- SEE ABOVE
    
     //When addReview is called with a product, it should add the review from the controller to the passed-in product's reviews 
     //array. Implement this functionality in the addReview method.
     product.reviews.push(this.review);
     
     //Reset the review to an empty object after it's been added to product.reviews.
    this.review = {};
  };
});

//Full Example
(function() {
  var app = angular.module('gemStore', []);

  app.controller('StoreController', function(){
    this.products = gems;
  });

  app.controller('TabController', function(){
    this.tab = 1;

    this.setTab = function(tab){
      this.tab = tab;
    };

    this.isSet = function(tab){
      return (this.tab === tab);
    };
  });

  app.controller('GalleryController', function(){
    this.current = 0;

    this.setCurrent = function(index){
      this.current = index;
    };
  });

  app.controller('ReviewController', function(){
    this.review = {};
    this.addReview = function(product){
      product.reviews.push(this.review);
      this.review = {};
    };

  });

  var gems = [
    {
      name: 'Azurite',
      description: "Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.",
      shine: 8,
      price: 110.50,
      rarity: 7,
      color: '#CCC',
      faces: 14,
      images: [
        "images/gem-02.gif",
        "images/gem-05.gif",
        "images/gem-09.gif"
      ],
      reviews: [{
        stars: 5,
        body: "I love this gem!",
        author: "joe@example.org",
        createdOn: 1397490980837
      }, {
        stars: 1,
        body: "This gem sucks.",
        author: "tim@example.org",
        createdOn: 1397490980837
      }]
    }, {
      name: 'Bloodstone',
      description: "Origin of the Bloodstone is unknown, hence its low value. It has a very high shine and 12 sides, however.",
      shine: 9,
      price: 22.90,
      rarity: 6,
      color: '#EEE',
      faces: 12,
      images: [
        "images/gem-01.gif",
        "images/gem-03.gif",
        "images/gem-04.gif",
      ],
      reviews: [{
        stars: 3,
        body: "I think this gem was just OK, could honestly use more shine, IMO.",
        author: "JimmyDean@example.org",
        createdOn: 1397490980837
      }, {
        stars: 4,
        body: "Any gem with 12 faces is for me!",
        author: "gemsRock@example.org",
        createdOn: 1397490980837
      }]
    }, {
      name: 'Zircon',
      description: "Zircon is our most coveted and sought after gem. You will pay much to be the proud owner of this gorgeous and high shine gem.",
      shine: 70,
      price: 1100,
      rarity: 2,
      color: '#000',
      faces: 6,
      images: [
        "images/gem-06.gif",
        "images/gem-07.gif",
        "images/gem-08.gif"
      ],
      reviews: [{
        stars: 1,
        body: "This gem is WAY too expensive for its rarity value.",
        author: "turtleguyy@example.org",
        createdOn: 1397490980837
      }, {
        stars: 1,
        body: "BBW: High Shine != High Quality.",
        author: "LouisW407@example.org",
        createdOn: 1397490980837
      }, {
        stars: 1,
        body: "Don't waste your rubles!",
        author: "nat@example.org",
        createdOn: 1397490980837
      }]
    }
  ];
})();


//Using Review Controller 250 PTS
//Assign the review controller we just created to our form and use the alias reviewCtrl to reference it inside the form. 
//On submission of the form save the new review.

//Inside the form tag create a ng-controller attribute and assign it to the ReviewController with an alias of reviewCtrl.

<form name="reviewForm" ng-controller="ReviewController as reviewCtrl" 

//Inside the form tag create a ng-submit attribute. Set the value of the ng-submit attribute to call our new addReview function. 
//Remember to pass in product when calling the addReview function.
ng-submit="reviewCtrl.addReview(product)">

//Prefix all three ng-models with the controller's alias.
<h4>Submit a Review</h4>
  <fieldset class="form-group">
    <select ng-model="reviewCtrl.review.stars" class="form-control" ng-options="stars for stars in [5,4,3,2,1]" title="Stars">
      <option value="">Rate the Product</option>
    </select>
  </fieldset>
  <fieldset class="form-group">
    <textarea ng-model="reviewCtrl.review.body" class="form-control" placeholder="Write a short review of the product..." title="Review"></textarea>
  </fieldset>
  <fieldset class="form-group">
    <input ng-model="reviewCtrl.review.author" type="email" class="form-control" placeholder="jimmyDean@example.org" title="Email" />
  </fieldset>
  <fieldset class="form-group">
    <input type="submit" class="btn btn-primary pull-right" value="Submit Review" />
  </fieldset>
</form>

//If you will notice, our live preview is no longer working. Try and figure out why and get the preview blockquote working again!
<!--  Live Preview -->
  <blockquote>
    <strong>{{reviewCtrl.review.stars}} Stars</strong>
    {{reviewCtrl.review.body}}
    <cite class="clearfix">—{{reviewCtrl.review.author}}</cite>
  </blockquote>

  <!--  Review Form -->
  <h4>Submit a Review</h4>
  <fieldset class="form-group">
    <select ng-model="reviewCtrl.review.stars" class="form-control" ng-options="stars for stars in [5,4,3,2,1]" title="Stars">
      <option value="">Rate the Product</option>
    </select>
  </fieldset>
  <fieldset class="form-group">
    <textarea ng-model="reviewCtrl.review.body" class="form-control" placeholder="Write a short review of the product..." title="Review"></textarea>
  </fieldset>
  <fieldset class="form-group">
    <input ng-model="reviewCtrl.review.author" type="email" class="form-control" placeholder="jimmyDean@example.org" title="Email" />
  </fieldset>
  <fieldset class="form-group">
    <input type="submit" class="btn btn-primary pull-right" value="Submit Review" />
  </fieldset>
</form>

//Form Validations
//Use the fancy directives you just learned to validate the new review form.

//Turn Off HTML Validation
//Add the novalidate directive to our form in order to turn off default HTML validation.
<form name="reviewForm" ng-controller="ReviewController as reviewCtrl" ng-submit="reviewCtrl.addReview(product)" novalidate>

//Mark stars & author as required fields.
<fieldset class="form-group">
  <select ng-model="reviewCtrl.review.stars" class="form-control" ng-options="stars for stars in [5,4,3,2,1]" title="Stars" required>
    <option value="">Rate the Product</option>
  </select>
</fieldset>
<fieldset class="form-group">
  <textarea ng-model="reviewCtrl.review.body" class="form-control" placeholder="Write a short review of the product..." title="Review" required></textarea>
</fieldset>
<fieldset class="form-group">
  <input ng-model="reviewCtrl.review.author" type="email" class="form-control" placeholder="jimmyDean@example.org" title="Email" required />
</fieldset>

//Prevent the submit if not $valid

<!--  Review Form -->
<form name="reviewForm" ng-controller="ReviewController as reviewCtrl" ng-submit="reviewForm.$valid && reviewCtrl.addReview(product)" novalidate>

              <!--  Live Preview -->
              <blockquote >
    <strong>{{reviewCtrl.review.stars}} Stars</strong>
    {{reviewCtrl.review.body}}
    <cite class="clearfix">—{{reviewCtrl.review.author}}</cite>
  </blockquote>
              <!--  Review Form -->
              <h4>Submit a Review</h4>
              <fieldset class="form-group">
    <select ng-model="reviewCtrl.review.stars" class="form-control" ng-options="stars for stars in [5,4,3,2,1]" title="Stars" required >
      <option value="">Rate the Product</option>
    </select>
  </fieldset>
  <fieldset class="form-group">
    <textarea ng-model="reviewCtrl.review.body" class="form-control" placeholder="Write a short review of the product..." title="Review"></textarea>
  </fieldset>
  <fieldset class="form-group">
    <input ng-model="reviewCtrl.review.author" type="email" class="form-control" placeholder="jimmyDean@example.org" title="Email" required />
  </fieldset>
  <fieldset class="form-group">
    <input type="submit" class="btn btn-primary pull-right" value="Submit Review" />
  </fieldset>
</form>

//Form Styling
//Give the defined classes in your css colors. See the magic of ng-invalid/ng-valid at work!

//For elements with both the .ng-invalid and .ng-dirty classes, give the border-color of red.
//Add a style for .ng-invalid.ng-dirty setting the border-color to red.

.ng-invalid.ng-dirty {
  border-color: red;
}

//For ng-valid && ng-dirty, give a green border-color
.ng-valid.ng-dirty {
  border-color: green;
}

//Showing CreatedOn Date
//It's time to show when a review was created using the createdOn property. Follow the task below to add this in.

Upon saving a review, we're running the addReview function in our app.js JavaScript file. 
Before the review is pushed onto the array, add to this.review a new property createdOn with a value Date.now().
this.addReview = function(product){
  this.review.createdOn = Date.now();
  product.reviews.push(this.review);
  this.review = {};
};

// In the review template, we're already displaying most of the information about our review. 
// Add the createdOn date to the review within the cite element. We want it to say "-<Author> on <date>".

//You can output the createdOn date for the review in a similar way to how we output the other attributes of the review.
<cite class="clearfix">{{review.author}} on {{review.createdOn}}</cite>

//Use the date filter on the createdOn property in the template.
<cite class="clearfix">{{review.author}} on {{review.createdOn | date}}</cite>

//Refactoring Description Tab
// Notice that we have created an empty html file called product-description.html. Separate out the Description 
// Tab's content into the new html file. Include the product-description.html in our index where it belongs.

//Separate out our description tab into product-description.html.
