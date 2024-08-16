
// FizzBuzz Check
function fizzBuzz() {

    let number = document.getElementById('value').value;
    if (number === "") {
        document.getElementById('output').innerHTML = "Enter a number to check";
        document.getElementById("output").style.color = "green"
        return true;
    }

    
    let input = number;
    if (input % 5 === 0 && input % 3 === 0) {
        document.getElementById('output').innerHTML = 'FizzBuzz';
        document.getElementById('output').style.color = '#11B5F9';
        return;
    } else if (input % 5 === 0) {
        document.getElementById('output').innerHTML = 'Fizz';
        document.getElementById('output').style.color = '#11B591';
        return;
    } else if (input % 3 === 0) {
        document.getElementById('output').innerHTML = 'buzz';
        document.getElementById('output').style.color = 'blue';
        return;
    } else {
        document.getElementById('output').innerHTML = 'not a FizzBuzz❌';
        document.getElementById('output').style.color = 'red';
        return input;
    }
}

// Another Method, using console
function fizzBuzzCheck(n) {
    if (n % 5 === 0) {
        return "Fizz";
    } else if (n % 3 === 0) {
        return "Buzz";
    } else if (n % 5 === 0 && n % 3 === 0) {
        return "FizzBuzz";
    } else return n;
} console.log(fizzBuzzCheck(15));




// collect Even Odd Numbers

// A function to collect Even Numbers
function evenNumber() {
    let evenNumbers = [];
    for (i = 0; i <= 100; i++) {
        if (i % 2 === 0) {
            evenNumbers.push(i);
        }
    } document.getElementById('display').innerHTML = 'Even numbers: ' + evenNumbers;
    return evenNumbers;
}
// A function to collect Odd Numbers
function oddNumber() {
    let oddNumbers = [];
    for (i = 0; i <= 100; i++) {
        if (i % 2 !== 0) {
            oddNumbers.push(i);
        }
    } document.getElementById('display').innerHTML = "Odd Numbers: " + oddNumbers;
    return oddNumbers;
}


// testing if a word is a palindrome

function palindromeWords() {
    let inputWord = document.getElementById('palindromeWords').value.trim();

    if (inputWord === "") {
        document.getElementById('testWord').innerHTML = "Enter a Word to check";
        document.getElementById('testWord').style.color = "green";
        return true;
    }
    let input = inputWord.toLowerCase();
    let inputConvert = input.split("");
    let inputReverse = inputConvert.reverse();
    let reversedWord = inputReverse.join("");


    if (input === reversedWord) {
        document.getElementById('testWord').innerHTML = inputWord + " is a Palindrome";
    } else {
        document.getElementById('testWord').innerHTML = inputWord + " is not a Palindrome";
    }
}


