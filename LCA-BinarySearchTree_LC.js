var lowestCommonAncestor = function(root, p, q) {

    if (p.val < root.val && q.val < root.val) {
        return lowestCommonAncestor(root.left, p, q)
    } else if(p.val > root.val && q.val > root.val) {
        return lowestCommonAncestor(root.right, p, q)
    } else {
        console.log(root)
        return root;
    }
    
};

lowestCommonAncestor([6,2,8,0,4,7,9,null,null,3,5], 2, 8)