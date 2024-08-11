/*
function processDoll(doll){
    // 1) Base case
    if (we found the piece of chocolate) {
        return "Yum Yum";
    } 
    else if(there are no more dolls)
        return "No chocolote here :("
    else 
    processDoll(the smaller doll)
    //2) Recursive call to iteself
}
*/

//factorial 4!
// 4 * 3 * 2 * 1


function factorial (n)
{
    // Base case
    if (n == 1 || n == 0) {
        return 1;
    }
    else return n * factorial(n-1);
}

console.log(factorial(4))


factorial(4)
    4 * factorial(3)
        3 * factorial(2)
            2 * factorial(1)


            factorial(4)
            4 * factorial(3)
                3 * factorial(2)
                    2 * (1)