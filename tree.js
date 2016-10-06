//This tree constructor is complete
//You need to fill in the rockPaperPermutations
//function on line 61

var Tree = function(value) {
  this.value = value;
  this.children = [];
};



Tree.prototype.addChild = function(value) {

  var child = new Tree(value);
  this.children.push(child);
  };

Tree.prototype.contains = function(target) {

  if ( this.value === target ) {
    return true;
  }
  for ( var i = 0; i < this.children.length; i++ ) {
    var child = this.children[i];
    if (child.contains(target)) {
      return true;
    }
  }
  return false;
  };


//This is a complete depth first search, but if you want a good visualization of your
//rock paper scissors answer, use a breadth first search
Tree.prototype.traverse = function(callback) {
  callback(this.value);

  if (!this.children) { return; }
  for (var i = 0; i < this.children.length; i++) {
    var child = this.children[i];
    child.traverse(callback);
  }
};

Tree.prototype.visualize = function () {
  var s = '';
  this.traverse(node => {
    console.log(node)
    s += ' ' + node
  })
  console.log(s)
}

//Your task is to create a tree that represents the decision tree for solving the rock-paper-scissors problem

//Root of tree has empty string
var tree = new Tree('');
var letters = ['r', 'p', 's']

//For n rounds of rps - build a tree whose levels represent a round, and leaves represent a final permutation or game outcome - see below for what the tree looks like after 2 rounds
function rockPaperPermutation (n, tree) {
  //FILL ME IN, you need to add children to the tree instance with the empty string as its root
}

//call rock paper scissors with however many rounds you
//want and your tree instance
rockPaperPermutation(3, tree)

tree.visualize()
//The visualizer above runs off of tree.traverse(), which is a
//depth first search. If you want a cleaner representation
//of your tree change the traverse function to do a
//breadth first search

//                             ''
//                          r - p - s
// 1 round:                /    |     \
// 2 rounds:       rr-rp-rs  pr-pp-ps  sr-sp-ss