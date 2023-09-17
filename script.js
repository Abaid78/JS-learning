// let main = document.getElementsByClassName("main");
// let content = document.getElementsByClassName(".content");
// let content2 = document.querySelectorAll(".content");
// console.log(content);
// console.log(content2);
// var final_str;
// var input=document.getElementById("userInput")
// input.addEventListener("keyup",()=>{
// })

var str = `<button onclick="alert('Button Clicked!')">Click Me</button>
`;
var newStr = str.replace(/[<]/g, "&lt;");
final_str = newStr.replace(/[>]/g, "&gt;");

console.log(final_str);
