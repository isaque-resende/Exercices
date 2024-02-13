const inputBox = document.getElementById('text-input');
const result = document.getElementById('result');

function check(){
    let word = inputBox.value;
    if (word === "") {
     alert('Please input a value')
    } else {
        let wordBeingChecked = word.toUpperCase().replaceAll(/[^a-zA-Z0-9]/g, "")
        let wordReversed = wordBeingChecked.split("").reverse().join("");
        
        if (wordBeingChecked === wordReversed) {
            result.innerHTML = `<strong>${word}</strong> is a palindrome`
        } else {
            result.innerHTML = `<strong>${word}</strong> is not a palindrome`
        }
    }
 }