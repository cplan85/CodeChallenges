var invertTree = function(root) {

    if(root) {
        [root.left, root.right] = [invertTree(root.right ),invertTree( root.left )];
    }
   console.log(root)
    return root;
    
};

invertTree([4,2,7,1,3,6,9])