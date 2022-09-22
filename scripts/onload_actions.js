let addButton = document.querySelector("#doAdd")
let num1 = document.querySelector("num1")
let num2 = document.querySelector("#num1")
let result = document.querySelector("#result")

window.onload = function(){
    addButton.addEventListener("click", () => {
        var val1 = Number(num1.innerHTML);
        var val2 = Number(num2.innerHTML);
        result.innerHTML = `Result is: ${add(Val1,vaal2)}`        
    })
}