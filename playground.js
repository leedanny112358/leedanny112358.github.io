function filteredArray(arr, elem) {
    let newArr = [];
    for (let i = 0; i<arr.length; i++){
      let isElem = false;
      for(let j = 0; j<arr[i].length; j++){
        if(arr[i][j]==elem){
          isElem = true;
        }
      } 
      if(isElem = false){
        newArr.push(arr[i]);
      }
    }
    return newArr;
  }
  
  console.log(filteredArray([ ["trumpets", 2], ["flutes", 4], ["saxophones", 2] ], 2));
