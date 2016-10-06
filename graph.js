'use strict'
var honeys = ['Wild Flower', 'Orange Blossom', 'Avo', 'Blueberry']

var id = 0;

class Grub {

  constructor() {
    this.age = 0;
    this.color = 'pink';
    this.food = honeys[Math.floor(Math.random()*5)];
    this.id = id++;
  }

  eat() {
    return 'Mmmmmmmmm ' + this.food;
  }
};

//Copy in your Bee, and GiantBee Cunstructors from classes.js - they need to correctly inherit from Grub for your graph to work at the end


//Complete the Undirected Graph functions below
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
//---------------------------------------------------------//

//Instatiate a graph and 3 objects for Grub, Bee and GiantBee class (9 total objects)
//ex. graph = new Graph()

//store the bees in an array, so that their index in the array corresponds to their id property
var bees = ['FILL ME IN']

//Place your bees into a graph, storing the Bee's id as its node value.
bees.forEach(bee => /*put your bee into the graph using bee.id as its node value*/)


//Create connections between bees that are of the same class, and bees that eat the same honey - you will have to access your bees from the bees array using their id to create the connections
//Hint: you can use bee.constructor to test if two bees are of the same class


//Visualize your Graph by invoking this function
Graph.prototype.visualize = function() {
  var s = '';
  this.forEachNode((node) => {
    s += node + '->';
    for (var edge in this._nodes[node].edges) {
      s += ' ' + edge;
    }
    s += '\n'
  });
  console.log(s)
};

//uncomment to run visualizer in console
//graph.visualize()

//if you were successful, you should see the ids for each bee pointing to its connections