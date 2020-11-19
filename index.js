let dodger = document.getElementById("dodger");

function moveDodgerLeft() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
   
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
}

function moveDodgerRight() {
    // let rightNumbers = dodger.style.left.replace("px", "")
    // let right = parseInt(rightNumbers, 10)

    // console.log(right)
    // console.log(rightNumbers)

    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);

    console.log(left)
    console.log(leftNumbers)

    if (left < 360) {
        console.log('fuck you')
        dodger.style.left = `${left + 1}px`
    }
}

document.addEventListener("keydown", function(e) {
    console.log(e.key)
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    } else if (e.key === "ArrowRight"){
        moveDodgerRight()
    }
});