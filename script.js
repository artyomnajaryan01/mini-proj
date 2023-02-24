const input = document.querySelector(".typeInput");
const count = document.querySelector('.info');

input.addEventListener("input", counter)
function counter() {
  const text = input.value;

  const letterCount = text.split('').filter(char => char).length;
  const wordCount = text.split(' ').filter(word => word !== '').length;
  const sentenceCount = text.split(/[.?!]/g).filter(sentence => sentence !== '')
  let startsWithUppercase = /^[A-Z]/.test(sentenceCount);
  console.log(startsWithUppercase);
  if (startsWithUppercase == false) {
    return alert("try again")
  }
  // if (text.charAt(0).toUpperCase()) {
  //   alert()
  // }
  count.innerHTML = `Letters: ${letterCount} | Words: ${wordCount} | Sentences: ${sentenceCount}`;
  // count.innerHTML = `Letters: ${wordCount} | Letters: ${sentenceCount}`
}

let letters = ""
for (let i = 65; i <= 90; i++) {
  // Convert the ASCII code to a letter and append it to the string
  letters += String.fromCharCode(i);
  count.innerHTML = letters.length
}




// const typeInput = document.querySelector(".typeInput");

// typeInput.addEventListener('input', typeing)
// function typeing() {

//   const inputValue = typeInput.value;
//   const info = document.querySelector(".info");
//   const sentence = inputValue;
//   const words = sentence.split(" ");
//   const wordCount = words.length;
//   info.innerHTML = wordCount;
//   info.innerHTML = wordCount;

// }


// let arr = [5, 15, 26, 128]
// let myarr = arr.reduce(
//   function (prev, curr) {
//     prev.push(curr)
//     console.log(prev)
//     return prev
//   }, [3, 4, 5]
// )
// console.log(myarr)




// Changeing background color 


const button = document.querySelector(".colorBtn");

// Add a click event listener to the button
button.addEventListener("click", () => {
  // Generate a random color
  const randomColor = Math.floor(Math.random() * 16777216).toString(16);

  // Set the background color of the button to the random color
  document.querySelector(".main").style.backgroundColor = "#" + randomColor
});






button.addEventListener('click', function () {

  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  const a = 0.5;

  document.querySelector(".main").style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${a})`;
});