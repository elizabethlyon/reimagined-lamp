


const styles = require('./styles.less');

// console.log('hello, I like salsa');



// var mainHeaderWrapper = document.getElementsByClassName('header-wrapper');
//
// console.log(mainHeaderWrapper);
//
// mainHeaderWrapper[0].onclick = function() {
//   console.log('Welcome to Web Dev Practice');
// };
//getElementsByClassName creates an array, so either need to specify the index or loop through the array

// var divArray = document.getElementsByClassName('divider');
// console.log(divArray);

//Calculator functionality
$('.addInputs').click(function() {
  //gets inputs
  var inputA = document.getElementById('input-a').value,
      inputB = document.getElementById('input-b').value,
      selection = document.getElementById('selector');

  //Based on dropdown selector, changes mathematical operation
  if (selection[selection.selectedIndex].value === 'addition') {
    document.getElementById('answerMe').innerHTML = Number(inputA) + Number(inputB);
  } else if (selection[selection.selectedIndex].value === 'subtraction') {
    document.getElementById('answerMe').innerHTML = Number(inputA) - Number(inputB);
  } else if (selection[selection.selectedIndex].value === 'multiplication') {
    document.getElementById('answerMe').innerHTML = Number(inputA) * Number(inputB);
  } else { document.getElementById('answerMe').innerHTML = Number(inputA) / Number(inputB); }
});


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
$('.psych-out').click(function() {
  var grabNode = $('.grabber');
  if (grabNode[0].firstChild.data === 'Click Me') {
      grabNode.replaceWith('<h2 class="grabber">Psych!</h2>');
  } else { grabNode.replaceWith('<h2 class="grabber">Click Me</h2>') }
});


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
// $(document).ready(function() {
//   $('#nature-carousel').carousel({
//     interval: 2000
//   });
// });

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

var changer = document.getElementById('hgc-img-img'); //grabs the place where the image is declared
var imageIndex = 0; //sets the array location to the first position

// var rotate = function() {
//   //Rotating, non-controllable carousel
//   imagesArray: ['images/caiman.jpg', 'images/dawn.jpeg', 'images/fieldkitten.jpeg', 'images/fireworks2.jpeg'];
//   changer.setAttribute('src', imagesArray[imageIndex]);
//   imageIndex++; //changes the src attribute of the particular image index, then moves up the image once more
//   if (imageIndex >= imagesArray.length) {
//     imageIndex = 0; //resets the image array index
//   }
// }

// setInterval(rotate, 5000);

//Get + Reset attributes
// var hipsterIpsum = document.getElementById('hipster-ipsum');
//
// hipsterIpsum.setAttribute('align', 'right');
//
// var mainTitle = document.getElementById('main-title');
// console.log(mainTitle.innerHTML);


//Code for Dynamic Pony Content
//create elements
// var ponyHeader = document.createElement('h1');
// var ponyText = document.createElement('p');
//
// //insert text
// var newHead = document.createTextNode("Details About My Little Pony");
// var newText = document.createTextNode("Pegasus Discord Flash Sentry Shining Armor Maud Pie. Princess Luna Shining Armor cloud Twist.")

//append text nodes to the content nodes
// ponyHeader.appendChild(newHead);
// ponyText.appendChild(newText);

//insert text-filled elements on page
// document.getElementById('dynamic-pony-content').appendChild(ponyHeader);
// document.getElementById('dynamic-pony-content').appendChild(ponyText);

//Code for timer and an alert
// var fiveMinAlert = function() {
//   alert('You have been on this page for five minutes without refreshing.');
// }
// setTimeout(fiveMinAlert, 300000);
//set timeout happens just once. setInterval() allows the function to happen multiple times, at the set interval. For example, you can switch an image every 5 seconds by looping through an array.

//Interests checkbox show/hide
var hider = $('#cb-inner');
var revealer = $('#revealer');
console.log(hider, revealer);

var mainChecked = function() {
  console.log('working');
}
