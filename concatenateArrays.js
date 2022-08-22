const concat = function (array1, array2){
  var array3 = [];
  for (let i = 0; i < array2.length; i++){
    array3= array1.push(array2[i]);
  }
return array1;

  }

  console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]));
