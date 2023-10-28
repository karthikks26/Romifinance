let a = document.getElementById("mk");
console.log(a);
let x = document.getElementById("x");
console.log(x);
a.addEventListener("click", hi);
let ul = document.getElementById("ul");
console.log(ul);
function hi() {
  console.log("k");
  ul.classList.toggle("none");
}
x.addEventListener("click", () => {
  console.log("j");
  ul.classList.toggle("none");
});
