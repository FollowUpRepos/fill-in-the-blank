const disappear = document.getElementById("disappear")
const mask = document.getElementById("mask")

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