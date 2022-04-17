/*function findValueInArray(arr, value) {
    var l = arr.length;
    for (var i = 0; i <= l; i++) {
      var s = arr.includes(value);
      var p = arr.indexOf(value);
      if (s == true) {
        return `Positon Of entered value in array is ${p}`;
        break;
      } else return `Positon Of entered value in array is -1`;
    }
  }*/
  
  console.log(findValueInArray([1, 2, 3, 4, 5], 6));
  console.log(findValueInArray(['maruti', 'honda', 'mahindra', 'tata'], 'tata'));

  function findValueInArray(arr, value) {
    var l = arr.length;
    for (var i = 0; i <= l; i++) {
     let p = arr.indexOf(value);
      return p;
    };
  };
