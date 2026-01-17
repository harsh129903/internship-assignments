function correctfn(str, wrong, correct) {
    return str.replace(wrong, correct);
}

let sentence = "I love Javascript";
console.log(correctfn(sentence, "Javascript", "Coding"));