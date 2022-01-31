// ADD AN ELEMENT
// 1. Create the new element

let newAnchorElement = document.createElement('a');
newAnchorElement.href = 'https://google.com';
newAnchorElement.textContent = 'This leads to Google';

// 2. Get access to the parent elemtn that should hold the new element

let firstParagraph = document.querySelector('p');


// 3. Insert the new element into the parent element content

firstParagraph.append(newAnchorElement);

// REMOVE ELEMENTS
// 1. Select the element that should be removed

let firstH1Element = document.querySelector('h1');

// 2. Remove it!

firstH1Element.remove();
// firstH1Element.parentElement.removeChild(firstH1Element); // for older browsers

// MOVE ELEMENTS

firstParagraph.parentElement.append(firstParagraph);

// innerHTML

console.log(firstParagraph.innerHTML);

firstParagraph.innerHTML = 'Hi! This is <strong>important!</strong>'  + ' ' + 'another value';

// Event Listener

let paragraphElement = document.getElementById('click-btn');

function changeParagraphText() {
    paragraphElement.textContent = 'Clicked!';
}

paragraphElement.addEventListener('click', changeParagraphText);


let inputElement = document.querySelector('input');

function retrieveUserInput(event) {
    // let enteredTExt = inputElement.value;
    let enteredTExt = event.target.value;
    // let enteredTExt = event.data; => This is different!
    console.log(enteredTExt);
    // console.log(event);
}

inputElement.addEventListener('input', retrieveUserInput)