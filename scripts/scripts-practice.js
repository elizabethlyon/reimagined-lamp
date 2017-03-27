

//To Uppercase
function sentenceCase () {
  var string = document.getElementById("sentence-input").value;
  string = string.toLowerCase().split(" ");
  for (var i = 0; i < string.length; i++) {
    string[i] = string[i].charAt(0).toUpperCase() + string[i].slice(1);
  }
  string = string.join(" ");
  console.log(string);
  document.getElementById("sentence-output").innerHTML = string;
};

//Shows gas price
var gasPrice = function() {
  var grade = document.getElementById("gas-type").value,
      response = "";
  // var grade = "Mid-GRAde";
  grade = grade.toLowerCase();

  switch (grade) {
    case "regular":
      response = "You've chosen " + grade + "! The price is $2.00 per gallon.";
      break;
    case "mid-grade":
      response = "You've chosen " + grade + "! The price is $2.50 per gallon.";
      break;
    case "premium":
      response = "You've chosen " + grade + "! The price is $3.00 per gallon.";
      break;
    default:
      response = "That is not a valid grade";
  }
  document.getElementById("gas-output").innerHTML = response;
};
