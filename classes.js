'use strict'
var honeys = ['Wild Flower', 'Orange Blossom', 'Avocado', 'Blueberry'];

var Grub = function(age, color) {
  age = age || 0;
  color = color || 'pink';
  this.age = age;
  this.color = color;
  this.food = honeys[Math.floor(Math.random()*5)];
};

Grub.prototype.eat = function() {
    return "ate " + this.food;
};

//We've made a Grub class for you above already using traditional ES5 Construction

//Create an ES6 style class for Bee
//Create the Class using ES6 features 1. class, 2. super, and 3. constructor
//Use ES6 style defaults to provide default values if none are passed in
//Give the Bee a sting method that console.logs a fun message of your choice

//Great job making that Bee!
//Now create a GiantBee class
//This bee will be a subclass of Bee and inherit most of its properties directly from Bee
//GiantBee's
