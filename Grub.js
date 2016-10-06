'use strict'
var honeys = ['Wild Flower', 'Orange Blossom', 'Avo', 'Blueberry']

class Grub {
  constructor (age, color, food) {
    this.age = age || 0;
    this.color = color || 'pink';
    this.food = honeys[Math.floor(Math.random()*5)];
  }

  eat () {
    console.log( 'Mmmmmmmmm ' + this.food)
  }
}

var grub = new Grub()
grub.eat()
grub.eat()

var grub2 = new Grub()
grub2.eat()
