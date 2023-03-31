const disappear = document.getElementById("disappear")
const mask = document.getElementById("mask")

// WORKAROUND for a "feature" ON Firefox, where the value of
// an input field is maintained when the page is refreshed
// using either Ctrl-R or clicking on the ⟳ refresh button.
// (To reset the input field in Firefox, you must click in
// the address bar and then press Enter.)
mask.value = ""

const rect = disappear.getBoundingClientRect()
console.log("rect:", rect);

for (key in rect ) {
  console.log("key:", key, rect[key]);
  if (key !== "toJSON") {
    mask.style[key] = rect[key] + "px"
  }
}


const goButton = document.getElementById("go")
goButton.addEventListener("click", fadeAway)

const checkButton = document.getElementById("check")
checkButton.addEventListener("click", check)

function fadeAway() {
  mask.classList.add("fade")
}

function check() {
  const expected = disappear.textContent
  const given = mask.value

  if (given === expected) {
    mask.classList.remove("fade")
  }
}