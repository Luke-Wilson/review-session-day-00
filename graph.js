'use strict'
var honeys = ['Wild Flower', 'Orange Blossom', 'Avo', 'Blueberry']

class Grub {
  constructor (age, color, food) {
    this.age = age || 0;
    this.color = color || 'pink';
    this.food = honeys[Math.floor(Math.random()*5)];
  }
}

Grub.prototype.eat = function() {
    console.log( 'Mmmmmmmmm ' + this.food)
}

//Copy in your Grub, Bee, and GiantBee Cunstructors from classes.js


//Complete the Graph functions below
var Graph = function() {
  this._nodes = {};
};

//store the node as a key in the nodes object
//add edges property to new nodes
Graph.prototype.addNode = function(node) {
};

//This function is complete, you shouldn't need to edit it
Graph.prototype.contains = function(node) {
  return !!this._nodes[node];
};

//delete node and remove it's connections to other nodes
Graph.prototype.removeNode = function(node) {
  if (this.contains(node)) {

  }
};

//This function is complete, you shouldn't need to edit it
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (!this.contains(fromNode)) {
    return false;
  }
  return !!this._nodes[fromNode].edges[toNode];
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  if (!this.contains(fromNode) || !this.contains(toNode)) {
    return;
  }
//Add your code here
// Add an edge to each node pointing to the other

};


Graph.prototype.removeEdge = function(fromNode, toNode) {

  if (!this.contains(fromNode) || !this.contains(toNode)) {
    return;
  }
//Add your code here
//Remove connection from both nodes

};

//this function is complete
Graph.prototype.forEachNode = function(cb) {
  for (var node in this._nodes) {
    cb(node);
  }
};

//Instatiate 3 objects for Grub, Bee and GiantBee class (9 total objects)

//Place your bees into a graph. Create connections between bees that are of the same class, and bees that eat the same honey

