// Your code here
const dodger = document.getElementById('dodger')

function moveDodgerLeft() {
    var leftNumbers = dodger.style.left.replace('px', '')
    var left = parseInt(leftNumbers, 10)
    if (left > 0) {
        dodger.style.left = `${left - 1}px`
    }
}

function moveDodgerRight() {
    var leftNumbers = dodger.style.left.replace('px', '')
    var left = parseInt(leftNumbers, 10)
    if (left > 0) {
        dodger.style.left = `${left + 1}px`
    }
}

// The above code passes all the tests
// While the code below implements it on the index page

document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowLeft') {
        moveDodgerLeft()
    }
})

document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowRight') {
        moveDodgerRight()
    }
})