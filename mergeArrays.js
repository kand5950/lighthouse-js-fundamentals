const merge = function (array1, array2){
  
  const array3 = array1.concat(array2);
  array3.sort();
  return array3;
  

}
console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]));