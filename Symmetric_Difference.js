// with only 2 arguments

function sym(args) {
  
    let uniqueArr1 = [];
    let uniqueArr2 = [];
  
   arguments[0].forEach((number) => {
     if( arguments[1].includes(number)) {
       uniqueArr1 = uniqueArr1;
     } 
     else { uniqueArr1.push(number)}
   })
  
    arguments[1].forEach((number) => {
     if( arguments[0].includes(number)) {
       uniqueArr2 = uniqueArr2;
     } 
     else { uniqueArr2.push(number)}
   })
  
   const mergedArray = uniqueArr2.concat(uniqueArr1);
   const result = [...new Set(mergedArray)];
   console.log(result)
   return result;
  }
  
  sym([1, 2, 3, 3], [5, 2, 1, 4]);