var increasingBST = function(root) {
    let head = new TreeNode('dummy')
    let cursor = head 
    
    inorder(root)

    return head.right

    function inorder(node){
        if(!node)
            return;
        inorder(node.left)
        cursor.right = new TreeNode(node.val);
        cursor = cursor.right 

        inorder(node.right)
    }
};


console.log(increasingBST([5,3,6,2,4,null,8,1,null,null,null,7,9]))