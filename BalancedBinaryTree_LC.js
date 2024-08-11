var isBalanced = function(root) {
    if (!root) return true
    let res = true;

    const dfs = (node) => {
        if (!node) { return 0; }
        let left = dfs(node.left);
        let right = dfs(node.right);
        
        if (Math.abs(left - right ) > 1) {
        res = false
        } return Math.max(left, right) + 1
        }
    
    dfs(root);
    return res;
};