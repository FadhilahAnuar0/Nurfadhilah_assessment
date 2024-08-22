function removeSpaces(str) {
    // Use the replace method with a regular expression to remove all spaces
    return str.replace(/\s+/g, '');
}

const inputString = "This is a test string";
const result = removeSpaces(inputString);
console.log(result);