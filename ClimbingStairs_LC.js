var climbStairs = function(n){
    let dp = [];
    dp[1] = 1;
    dp[2] = 2;

    for(let i = 3; i <= n; i ++){
        //optimal substructure
        dp[i] = dp[i -1] + dp[i -2];
        console.log(dp[i])
    }
    console.log(dp[n])
    return dp[n];
    
}

climbStairs(3)