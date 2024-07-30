var productExceptSelf = function(nums) {
    
    let totalProducts = [];
    for(var i=0; i < nums.length; i++) {
        
        let initialValue =1;
        newArr =[...nums];
        newArr[i]=1;
        const product = newArr.reduce(
            (accumulator, currentValue) => accumulator * currentValue,
            initialValue,
          );


        totalProducts.push(product)

    }
    return totalProducts
};

productExceptSelf([1,2,3,4]);