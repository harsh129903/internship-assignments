const text = "This is a string with more than twenty characters for testing";
let vowels = 0;
let consonants = 0;
const vowelsList = ['a', 'e', 'i', 'o', 'u'];

for (let char of text.toLowerCase()) {
    if (char >= 'a' && char <= 'z') {
        if (vowelsList.includes(char)) {
            vowels++;
        } else {
            consonants++;
        }
    }
}

console.log("Vowels:", vowels);
console.log("Consonants:", consonants);