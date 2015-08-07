// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node, matches){
  
  var node = node || document.body;

  var matches = matches || [];
  
  // base case, node has no children
  if (!node.hasChildNodes()) {
    if (node.classList.contains(className)) {      
      matches.push(node);
    }
  }

  // else, the node has children and we need to go deeper
  else {
    if (node.classList.contains(className)) {
      matches.push(node);
    }
    
    // recursively call getElementsByClassName on each child of node
    for (var i = 0; i < node.children.length; i++) {
      var child = node.children[i];
      getElementsByClassName(className, child, matches);
    }
  }

  return matches;
  
};