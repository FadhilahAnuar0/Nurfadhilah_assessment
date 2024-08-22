const originalString = "Hello, World!";
const reversedString = reverseString(originalString);
console.log(reversedString); 

function reverseString(str) {
    return str.split('').reverse().join('');
}