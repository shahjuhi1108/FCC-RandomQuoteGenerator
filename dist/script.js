// Quotes

let quotes = [
"'When the going gets tough, the tough use JavaScript'",
"'To code or not to code, that is the question'",
"'There is more than one type of coder, but they all started at zero'",
"'Give me your kisses, and your pull requests'",
"'Gitter done!'",
"'How many functions does it take to change the world?'",
"'You had me at Hello World'",
"'Take me to your GitHub profile'",
"'Every error is a chance to learn'",
"'I owe it all to @freeCodeCamp'",
"'Stop repeating yourself! Stop repeating yourself! Stop repeating yourself!'",
"'Mmmmm, Vanilla JavaScript'",
"'Hold me close and make me responsive'",
"'Tell me your secret function'",
"'There is more than one way to write a function'",
"'You're an array of sunshine'",
"'Whisper sweet functions in my ear'",
"'Don't tell anyone, but I really hate IE6'",
"'!false === it's funny because it's true'",
"'It was love at first byte'",
"'@ossia made me do it!'",
"'I function better at night'"];


function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getRandomQuote() {
  let index = getRandomInt(quotes.length);console.log(quotes[index]);
  document.getElementById("text").innerHTML = quotes[index];
  document.getElementById("author").innerHTML = "@Juhi" + index;
}

window.onload = getRandomQuote;














// !! IMPORTANT README:

// You may add additional external JS and CSS as needed to complete the project, however the current external resource MUST remain in place for the tests to work. BABEL must also be left in place. 

/***********
INSTRUCTIONS:
  - Select the project you would 
    like to complete from the dropdown 
    menu.
  - Click the "RUN TESTS" button to
    run the tests against the blank 
    pen.
  - Click the "TESTS" button to see 
    the individual test cases. 
    (should all be failing at first)
  - Start coding! As you fulfill each
    test case, you will see them go   
    from red to green.
  - As you start to build out your 
    project, when tests are failing, 
    you should get helpful errors 
    along the way!
    ************/

// PLEASE NOTE: Adding global style rules using the * selector, or by adding rules to body {..} or html {..}, or to all elements within body or html, i.e. h1 {..}, has the potential to pollute the test suite's CSS. Try adding: * { color: red }, for a quick example!

// Once you have read the above messages, you can delete all comments.