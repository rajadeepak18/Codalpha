let display = document.querySelector("input");
function append(element) {
  display.value += element;
}
function appendmultiply() {
  display.value += "×";
}
function appenddivide() {
  display.value += "÷";
}

function calculate() {
  const expression = display.value.replace(/×/g, "*").replace(/÷/g, "/");
  try {
    display.value = eval(expression);
  } catch {
    display.value = "Error";

  }
}
function clearall() {
  display.value = "";
}
function clearone(){
  display.value=display.value.slice(0,-1)
}
display.addEventListener("keydown",function(event){
  if (event.key=="Enter"){
    event.preventDefault()
    calculate()
  }
})
