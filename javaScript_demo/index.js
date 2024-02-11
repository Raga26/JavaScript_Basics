// let userInput = "task 1";

// const container = document.getElementById("taskContainer");

// const taskDiv = document.createElement("div");
// taskDiv.textContent = userInput;
// container.append(taskDiv);

// function mouseFunction(event){
//     console.log("double click");
// }
// function mouseFunction2(event){
//     console.log("double click 2");
// }

// const addButton = document.getElementById("inputBox");
// //addButton.ondblclick = mouseFunction; //only reference is given not method call

// addButton.addEventListener("dblclick" , mouseFunction);
// addButton.addEventListener("dblclick" , mouseFunction2);

const inputBox = document.getElementById("inputBox");
const userInputBtn = document.getElementById("addBtn");
const taskContainer = document.getElementById("taskContainer");

function addTask(){
    const userInput = inputBox.value;

    if(userInput.length <= 3){
        return;
    }

    const newElement = document.createElement("div");
    newElement.innerText = userInput;
    newElement.setAttribute("class" , "task");

    taskContainer.append(newElement);
    taskContainer.addEventListener("dblclick" , taskClkEvent);
} 
function taskClkEvent(){
    console.log(this); // that element
    this.setAttribute("class","completed");
}

userInputBtn.addEventListener("click" , addTask);


