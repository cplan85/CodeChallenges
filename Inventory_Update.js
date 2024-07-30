function updateInventory(arr1, arr2) {
 
    let names1Arr = [];
    let names2Arr = [];
    //refactor
    arr1.forEach(item => {
        names1Arr.push(
            item[1]
        )
    })
    arr2.forEach(item => {
        names2Arr.push(
            item[1]
        )
    })

    let repeatingNamesArr = [];
    let uniqueToInventory1Arr = [];
    let uniqueToInventory2Arr = [];
    let finalItems = [];

    //because this will get spliced
    let duplicateNames2Arr = [...names2Arr];

//get all duplicate named values
    names1Arr.forEach( (objName, idx) => {
        if(names2Arr.includes(objName)) {
            repeatingNamesArr.push({name: objName, firstIndex: idx, secondIndex: names2Arr.indexOf(objName)});
            //remove from secondArray
            names2Arr.splice(names2Arr.indexOf(objName), 1)
        } else {
            uniqueToInventory1Arr.push({firstArrname: objName, firstIndex: idx})

        }
    })
//repeat for other array
        names2Arr.forEach( (objName, idx) => {
        if(names1Arr.includes(objName)) {
            repeatingNamesArr.push({firstArrname: objName, secondIndex: idx, firstIndex: names1Arr.indexOf(objName)})
        }  else {
            uniqueToInventory2Arr.push({secondArrname: objName, secondIndex: duplicateNames2Arr.indexOf(objName)})

        }
    })

const duplicateItems = [...new Set(repeatingNamesArr)]

duplicateItems.forEach(obj => {
finalItems.push([
    (arr1[obj.firstIndex][0] + 
arr2[obj.secondIndex][0] ),
    obj.name
])
})

//console.log("DUPLICATES", duplicateItems)

uniqueToInventory1Arr.forEach(obj => {
    //console.log(arr1[obj.firstIndex][0])
    finalItems.push([arr1[obj.firstIndex][0], obj.firstArrname])
})



 uniqueToInventory2Arr.forEach(obj => {
     finalItems.push([arr2[obj.secondIndex][0], obj.secondArrname])
 })

console.log("unique to inventory 2", uniqueToInventory2Arr)


    finalItems.sort((a, b) => a[1].localeCompare(b[1]));
console.log(finalItems)
return finalItems;
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