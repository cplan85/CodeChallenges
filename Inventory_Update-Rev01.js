function updateInventory(arr1, arr2) {
 
    let inventoryOneNames = [];

    arr1.forEach(item => {
        inventoryOneNames.push(
            item[1]
        )
    });


        //loop through new delivery and push it to arr1 if not exist or adding if if exists
        arr2.map(item => {
            if(!inventoryOneNames.includes(item[1])) {
                arr1.push(item)
            }
            if(inventoryOneNames.includes(item[1])){
                let index = inventoryOneNames.indexOf(item[1]);
                arr1[index][0] += item[0];
            }
        })

        arr1.sort((a, b) => a[1].localeCompare(b[1]));

        return arr1;

}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"], 
    [2, "Dirty Sock"], 
    [1, "Hair Pin"], 
    [5, "Microphone"]];

var newInv = [
    [2, "Hair Pin"],
     [3, "Half-Eaten Apple"], 
     [67, "Bowling Ball"], 
     [7, "Toothpaste"]
     ];

updateInventory(curInv, newInv);