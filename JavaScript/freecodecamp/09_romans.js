const convertBtn = document.getElementById("convert-btn");
const input = document.getElementById("number");
const output = document.getElementById("output");

function calc(number, index) {

    const map = [
        ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
        ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
        ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
        ["", "M", "MM", "MMM"],
    ]

    if(number === 0) return '';

    const value = number % 10;
    const roman = map[index][value]

    return calc(Math.floor(number / 10), index + 1) + roman
 
};

const convert = () => {
  const inputNumber = parseInt(input.value);
  input.value = "";
  
  if (isNaN(inputNumber) || inputNumber <= 0 || inputNumber >= 4000) {
    const message =
    isNaN(inputNumber) ? "Please enter a valid number" :
    inputNumber <= 0 ? "Please enter a number greater than or equal to 1" :
    "Please enter a number less than or equal to 3999";
    output.innerHTML = `<p style="font-size: 1.5rem;">${message}</p>`;
  } else {
    output.textContent = calc(inputNumber, 0);
  }
};
