// elements and variables
let title = document.getElementById("title");
let create = document.getElementById("create");
let content = document.getElementById("content");
let outputsContent = document.getElementById("outputsContent");
let inputs = document.getElementById("inputs");
let btnDelAll = document.getElementById("delAll");
let backDelAlert = document.getElementById("backDelAlert");
let yes = document.getElementById("yes");
let no = document.getElementById("no");
let finishedOutputs = document.getElementById("finishedOutputs");
let boxContainer = document.getElementById("boxContainer");



// create dataArray
let dataArray;
if (localStorage.task != null) {
    dataArray = JSON.parse(localStorage.task);
} else {
    dataArray = [];
}



// create function

function createTask() {
    let taskTitle = title.value;
    if (title.value != "") {
        dataArray.push(taskTitle);
        localStorage.setItem('task', JSON.stringify(dataArray));
    }
    clear()
    showTasks()
    showOrHidden()
}



// showTasks funtion


function showTasks() {
    let x = '';
    for (let i = 0; i < dataArray.length; i++) {
        if (dataArray[i]) {
            let data = `<div id="outputs" class="outputs">
            <div  class="task">
            <p>
                ${dataArray[i]}
            </p>
            </div>
            <button onclick="doneTask(${i})" id="done" class="done"><i class="fa-solid fa-square-check"></i></button>
            <button onclick="delTask(${i})" id="del" class="del"><i class="fa-solid fa-trash-can"></i></button>
            </div>`
            x += data
        }
    }
    outputsContent.innerHTML = x;
}
showTasks()


// doneTask function

function doneTask() {

}

// delete function

function delTask(i) {
    backDelAlert.style.display = "block";
    yes.onclick = function() {
        dataArray.splice(i, 1);
        localStorage.task = JSON.stringify(dataArray);
        backDelAlert.style.display = "none";
        showTasks();
        showOrHidden();
        clear();
    }
    no.onclick = function() {
        backDelAlert.style.display = "none";
    }

}

// delete all function

function showOrHidden() {
    if (dataArray != "") {
        btnDelAll.style.display = "flex";
    } else {
        btnDelAll.style.display = "none";
    }
}
showOrHidden()

function delAll() {
    backDelAlert.style.display = "block";
    yes.onclick = function() {
        dataArray.splice(0, dataArray.length);
        localStorage.task = JSON.stringify(dataArray);
        btnDelAll.style.display = "none";
        backDelAlert.style.display = "none";
        showTasks()
        clear();
    }
    no.onclick = function() {
        backDelAlert.style.display = "none";
    }
}

// clear function

function clear() {
    title.value = "";
}
clear()

// ____________________________________________________________________________________________


let dataArray2;
if (localStorage.finishedTasks != null) {
    dataArray2 = JSON.parse(localStorage.finishedTasks);
} else {
    dataArray2 = [];
}

// doneTask function





function doneTask(i) {
    let finishedData = dataArray[i];
    dataArray2.push(finishedData);
    localStorage.setItem('finishedTasks', JSON.stringify(dataArray2));
    dataArray.splice(i, 1);
    localStorage.task = JSON.stringify(dataArray);
    showTasks()
    showOrHidden();
    showFinishedData();
    showBoxFinishedTasks()
}


// show Finished Data function

function showFinishedData() {
    let x = "";
    for (let i = 0; i < dataArray2.length; i++) {
        let finishedData = `<div id="outputs" class="outputs">
        <div class="task">
            <p>
                ${dataArray2[i]}
            </p>
        </div>
        <button onclick="delFinishedTask(${i})" id="del" class="del"><i class="fa-solid fa-trash-can"></i></button>
    </div>`
        x += finishedData;
    }
    finishedOutputs.innerHTML = x;
}
showFinishedData();


function delFinishedTask(i) {
    dataArray2.splice(i, 1);
    localStorage.finishedTasks = JSON.stringify(dataArray2);
    showFinishedData();
    showBoxFinishedTasks()
}

function showBoxFinishedTasks() {
    if (dataArray2 != "") {
        boxContainer.style.display = "block";
    } else {
        boxContainer.style.display = "none";
    }
}
showBoxFinishedTasks()