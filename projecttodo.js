const textInput = document.querySelector("input")
const btn = document.querySelector(".btn")
const displayText = document.querySelector(".taskList")
const themeChange =document.querySelector("#theme")
themeChange.addEventListener("click",()=>{
    document.body.classList.toggle("dark");  
    if(themeChange.textContent =="Light"){
        themeChange.textContent ="Dark";
    }
    else{
        themeChange.textContent = "Light"
    }      
})
function addTask(){
    // textInput.value.toString().toUpperCase()
const inputText = textInput.value;
textInput.value = "";
const addCont = document.createElement("div")
const addUl =document.createElement("ul")
const addLi =document.createElement("li")
const addSpan = document.createElement("span")
const btnImg = document.createElement("img")
const btnCon = document.createElement("div")
const addBtn = document.createElement("button")
addCont.setAttribute("class", "appndCont")
addUl.setAttribute("class","appndUl")
addLi.setAttribute("class","appndLi")
addSpan.setAttribute("class","appndSpan")
btnImg.setAttribute("class","btnImg")
btnImg.setAttribute("src","./icons8-x-button-128.png")
addBtn.setAttribute("class","appndBtn")
btnCon.setAttribute("class","appndBtnCon")
displayText.append(addCont);
addCont.append(addUl);
// addCont.style.display = "flex";
// addCont.style.justifyContent = "center"
addUl.append(addLi);
addLi.append(addSpan ,btnCon)
btnCon.append(addBtn)
addBtn.append(btnImg)
addSpan.textContent = ` ${inputText} `;
// addBtn.textContent = `Clear`;

addBtn.addEventListener('click',()=>{
    displayText.removeChild(addCont)
})



}

btn.addEventListener('click',()=>{
    if(textInput.value != "")
    addTask()
else{
    alert("No Input given")
}
}
)
textInput.addEventListener('keydown',(e)=>{
    if(e.key === "Enter"){
    if(textInput.value != "")
    addTask()
else{
    alert("No Input given")
}
}}
)