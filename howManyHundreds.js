let howManyHundreds = function (num){
  num % 100 === 0
    num = num / 100;
    return Math.floor(num);
  }


  console.log(howManyHundreds(1000));
  console.log(howManyHundreds(894));
  console.log(howManyHundreds(520));
  console.log(howManyHundreds(99));
  console.log(howManyHundreds(0));