// // Get DOM Elements
// const outputEl = document.querySelector("output");
// const mario = document.body.children[0].firstElementChild.textContent;
// const gta = document.body.children[0].lastElementChild.textContent;
// const zelda =
//   document.body.children[0].firstElementChild.nextElementSibling.textContent;
// const red =
//   document.body.children[0].lastElementChild.previousElementSibling.textContent;
// const firstBtn = document.querySelector("div").children[0];
// const secondBtn = document.querySelector("div").children[2];
// const thirdBtn = document.querySelector("div").children[4];
// const fourthBtn = document.querySelector("div").children[6];

// // Event Handler
// const calculateOutput = (event) => {
//   const btn = event.target;
//   let message = "";

//   if (btn === firstBtn) {
//     message = mario;
//   } else if (btn === secondBtn) {
//     message = gta;
//   } else if (btn === thirdBtn) {
//     message = zelda;
//   } else if (btn === fourthBtn) {
//     message = red;
//   }

//   renderOutput(message);
// };

// // Render Output
// const renderOutput = (message) => {
//   outputEl.textContent = message;
// };

// // Event Listener
// firstBtn.addEventListener("click", calculateOutput);
// secondBtn.addEventListener("click", calculateOutput);
// thirdBtn.addEventListener("click", calculateOutput);
// fourthBtn.addEventListener("click", calculateOutput);
