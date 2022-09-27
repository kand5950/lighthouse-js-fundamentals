const titleCase  = function(text) {

  //create new text
  let newText = '';

  //iterate through text

  for (let n = 0; n < text.length; n++) {
  //if no text return ""
    if (text.length === 0) {
      newText;
    }//if 1 text or any text given, first letter always capital
    else if (n === 0) {
      newText += text[n].toUpperCase();
    } //if letter has space before capitalize, otherwise all letters lower case
    else if (text[n - 1] === ' ') {
      newText += text[n].toUpperCase();
    } else {
      newText += text[n].toLowerCase();
    }
  }
  console.log(newText);
  return newText;
};

titleCase("this is an example"); //should return "This Is An Example"
titleCase("test"); //should return "Test"
titleCase("i r cool"); //should return "I R Cool"
titleCase("WHAT HAPPENS HERE"); //should return "What Happens Here"
titleCase(""); //should return ""
titleCase("A"); //should return "A"