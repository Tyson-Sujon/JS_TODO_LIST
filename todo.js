let taskInput = document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");
let taskList = document.getElementById("taskList");

let tasks= [];
lett taskIdCounter=1;

function render() {
    taskList.innerHTML='';
    array.forEach(task => {
        let  li=document.createElement('li');
        li.classList.add('task-item');

        let spen=document.createElement('spen')
        spen.classList.add('task-text');
        spen.textContent=task.text;    

        let div=document.createElement('div');
        buttonWrapper.classList.add('task-button');
        
        let cmpltBtn = document.createElement('button');
        cmpltBtn.textContent= '✅'

        let deleteBtn=document.createElement('button');
        deleteBtn.cmpltBtn.textContent= '❌'
    });
}

// 6:43