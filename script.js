const titleInput = document.querySelector('.title__input--line');
const titleButton = document.querySelector('.title__input--button');
let titleNewTask = document.querySelector('.task__title');
let taskList = document.querySelector('.taskList');
let taskId = taskList.querySelector('.task');
const removeAll = document.querySelector('.allCheck');
const removeAllCheckTask = document.querySelector('.removeFull');
const keyDel = 'Delete';
const enter = 'Enter';
let taskArray = [];

const deleteAllCheck = () => {
    taskArray = taskArray.filter(elem => !elem.isChecked);
    if (taskArray.length <= 0) {
        removeAll.checked = false;
    };
    render();
};

const removeAllCheck = () => {
    if (taskArray.length <= 0) {
        removeAll.checked = false;
        alert('Задача не задана')
    } else {
        taskArray.forEach( elem => {
            elem.isChecked = removeAll.checked;
        });
        render();
    };
};

const pressRemoveAll = (e) => {
    if (e.code === keyDel) {
        deleteAllCheck();
    };
};

const enterPressPush = (e) => {
    if (e.code === enter) {
        pushTaskInArray();
    };
};

const pushTaskInArray = () => {
    if (titleInput.value !== '') {
        let taskObject = {
            id: Date.now(),
            text: titleInput.value,
            isChecked: false,
        };
        taskArray.push(taskObject);
        if (buttonPush !== false || keyEnterForPush !== false) {
            render();
        };
    } else {
        alert('Задача не задана');  
    };
};

const render = () => {
    removeAll.checked = false;
    checkAllCheckbox();
    let newElement = '';
    taskArray.forEach( (taskObject) => {
        newElement += `
        <li class="task" id="${taskObject.id}">
            <input type="checkbox" class="task__checkout" ${taskObject.isChecked ? 'checked' : ''}>
            <span class="task__title">${taskObject.text}</span>
            <button class="task__btn">&#10006;</button>
        </li>
        `;
    });
    taskList.innerHTML = newElement;
    titleInput.value = '';
};

let checkAllCheckbox = () => {
    if (taskArray.length > 0) {
        let allChecked = taskArray.every(elem => elem.isChecked);
        if (allChecked === true) {
            removeAll.checked = true;
            console.log(allChecked);
        } else {
            removeAll.checked = false;
        };
    } else {
        console.log('dd');
    };
};

const convertCheckbox = (event) => {
    const eventId = event.target.parentElement;
    if (event.target.type === 'checkbox') {
        event.target.isChecked = !event.target.isChecked;
        taskArray.forEach( (elemen) => {
            if (elemen.id === Number(event.target.parentElement.id)) {
                elemen.isChecked = event.target.checked;
                checkAllCheckbox();
            } else {
                console.log('asqqwqwqw');
            };
        });
    } else if (event.target.type === 'submit') {
        taskArray = taskArray.filter( elem => String(elem.id) !== eventId.id);
        render();
    };
    return;
    
};

const searchTask = (event) => {
    console.log(event.srcElement);
    let taskInTaskList = taskList.querySelector('.task');
    //вызов функции двойного слика
    console.log(taskInTaskList);
};


const clickTitleTask = (e) => {
    if (e.target.className === 'task__title') {
        console.log(e.target.className);
        e.innerHTML = `<input type="text" class="">`
    };
};

const keyEnterForPush = document.addEventListener('keydown', enterPressPush);
const keyRemoveDel = document.addEventListener('keydown', pressRemoveAll);
const buttonPush = titleButton.addEventListener('click', pushTaskInArray);
const pressOnTask = taskList.addEventListener('click', searchTask);
const buttonCheckbox = taskList.addEventListener('click', convertCheckbox);
const buttonAllCheck = removeAll.addEventListener('click', removeAllCheck);
const buttonAllRemove = removeAllCheckTask.addEventListener('click', deleteAllCheck);
const dblClickTitle = taskList.addEventListener('click', clickTitleTask);