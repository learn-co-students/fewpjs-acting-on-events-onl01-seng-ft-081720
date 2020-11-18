// // Your code here
// let dodger = document.getElementById("dodger");
// dodger.style.backgroundColor = "pink";
// "pink"
// dodger.style.bottom = "100px";
// "100px"
// dodger.style.bottom = "0px";
// "0px"
// document.addEventListener("keydown", function(e) {
//   console.log(e.key);
// });

let dodger = document.getElementById('dodger');

function moveDodgerLeft() {
    let leftNumbers = dodger.style.left.replace('px', '');
    let left = parseInt(leftNumbers, 10)
    if (left > 0) {
      dodger.style.left = `${left - 1}px`
    }
  }

  function moveDodgerRight() {
    let leftNumbers = dodger.style.left.replace('px', '');
    let left = parseInt(leftNumbers, 10)
    if (left > 0) {
      dodger.style.left = `${left + 1}px`
    }
  }



// document.addEventListener("keydown", function(e) {
//     if (e.key === "ArrowLeft") {
//       moveDodgerLeft();
//     }
//   });