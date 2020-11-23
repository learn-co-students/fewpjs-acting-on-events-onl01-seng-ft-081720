// Your code here
let dodger = document.getElementById("dodger");
// change its color 
// dodger.style.backgroundColor = "#000000";
dodger.style.backgroundColor = "#FF69B4";

// get its position
// console.log(dodger.style.left); // "180px"
// console.log(dodger.style.bottom); // "0px"

// move its position 
// dodger.style.bottom = "100px";
// dodger.style.left = "360px";

// Add event listener keydown
// document.addEventListener("keydown", function(e) {
  // console.log(e.key);
// });

// Move it left with following code
// document.addEventListener("keydown", function(e) {
//   if (e.key === "ArrowLeft") {
//     let leftNumbers = dodger.style.left.replace("px", "");
//     let left = parseInt(leftNumbers, 10);
//     dodger.style.left = `${left - 1}px`;
//   }
// });

// change above to this if you dont want the object to go past a certain point
function moveDodgerLeft() {
  let leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);
  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

// move the dodger right
function moveDodgerRight() {
  let rightNumbers = dodger.style.left.replace("px", "");
  let right = parseInt(rightNumbers, 10);
  if (right < 360) {
    dodger.style.left = `${right + 1}px`;
  }
}
// then add the eventlistener on the object
document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
  if (e.key === "ArrowRight"){
    moveDodgerRight();
  }
});
