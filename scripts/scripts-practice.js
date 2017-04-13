//Calculator functionality
    // Gets input
    var addInputs = function() {
        var inputA = document.getElementById('input-a').value,
            inputB = document.getElementById('input-b').value;
            selection = document.getElementById('selector');

        //Based on dropdown selector, changes mathematical operation
        if (selection[selection.selectedIndex].value === 'addition') {
          document.getElementById('answerMe').innerHTML = Number(inputA) + Number(inputB);
        } else if (selection[selection.selectedIndex].value === 'subtraction') {
          document.getElementById('answerMe').innerHTML = Number(inputA) - Number(inputB);
        } else if (selection[selection.selectedIndex].value === 'multiplication') {
          document.getElementById('answerMe').innerHTML = Number(inputA) * Number(inputB);
        } else { document.getElementById('answerMe').innerHTML = Number(inputA) / Number(inputB); }

        };

//To Uppercase
function sentenceCase () {
  var string = document.getElementById('sentence-input').value;
  string = string.toLowerCase().split(' ');
  for (var i = 0; i < string.length; i++) {
    string[i] = string[i].charAt(0).toUpperCase() + string[i].slice(1);
  }
  string = string.join(' ');
  console.log(string);
  document.getElementById('sentence-output').innerHTML = string;
};

//Shows gas price
var gasPrice = function() {
  var grade = document.getElementById('gas-type').value,
      response = '';
  grade = grade.toLowerCase();

  switch (grade) {
    case 'regular':
      response = 'You\'ve chosen ' + grade + '! The price is $2.00 per gallon.';
      break;
    case 'mid-grade':
      response = 'You\'ve chosen ' + grade + '! The price is $2.50 per gallon.';
      break;
    case 'premium':
      response = 'You\'ve chosen ' + grade + '! The price is $3.00 per gallon.';
      break;
    default:
      response = 'That is not a valid grade';
  }
  document.getElementById('gas-output').innerHTML = response;
};

//Easy onclick test

var psychOut = function() {
  var textNode = document.getElementById('grabber');
  var subhead = textNode.innerHTML;
  if (subhead === "Click Me") {
    textNode.innerHTML = "Psych!";
  } else {
    textNode.innerHTML = "Click Me";
  }
};

//Function debugging
  //declare functions
  function firstFunction() {
    secondFunction();
  };
  function secondFunction() {
    thirdFunction();
  };
  function thirdFunction() {
    fourthFunction();
  };
  function fourthFunction() {
    thirdHeader.innerHTML = "The Content is Here!";
  };
  //grab id
  var thirdHeader = document.getElementById('third-header');
  //set onclick event
  
  //tiny for practice
  var counter = 0;
  for (var i = 0; i < 100; i++) {
    counter++;
  };
  console.log(counter);



  //Carousel
$(document).ready(function() {
  $('#nature-carousel').carousel({
    interval: 2000
  });
});

//Players
var player1 = {
  name: "Kristen",
  username: "khore",
  score: 1000,
  rank: 5,
  race: "human",
  class: "warrior"
}
var player2 = {
  name: "Tim",
  username: "elsiore",
  score: 1200,
  rank: 2,
  race: "elf",
  class: "mage"
}

function playerDetails() {
  console.log(this.name + " is logged in as " + this.username + ". Their score is " + this.score + " and their rank is " + this.rank);
};

player1.logDetails = playerDetails;
player2.logDetails = playerDetails;


//To Do List
function toDoList () {
  var input = document.getElementById('to-do-list-input').value, 
      li = document.createElement('li'),
      newToDoItem = document.createTextNode(input);
    
      li.appendChild(newToDoItem);
  document.getElementById('to-do-ul').appendChild(li);
    
};
  
