;const KEYDEL = 'Delete';
const ENTER = 'Enter';
const ESC = 'Escape'

const titleInput = document.querySelector('.title__input--line');
const titleButton = document.querySelector('.title__input--button');
const titleNewTask = document.querySelector('.task__title');
const taskList = document.querySelector('.taskList');
const taskId = taskList.querySelector('.task');
const checkboxCheckAll = document.querySelector('.allCheck');
const removeAllCheckTask = document.querySelector('.removeFull');
const states = document.querySelector('.state');
const page = document.querySelector('#page');


let taskArray = [];
let filterType = 'all';
const taskOnPage = 5;

const deleteAllCheck = () => {
    taskArray = taskArray.filter(elem => !elem.isChecked);
    render();
};

const removeAllCheck = () => {
    if (taskArray.length <= 0) {
        checkboxCheckAll.checked = false;
        alert('Задача не задана')
    } else {
        taskArray.forEach( elem => {
            console.log('ddddd');
            elem.isChecked = checkboxCheckAll.checked;
        });
        render();
    };
};

const pressRemoveAll = (e) => {
    if (e.code === KEYDEL) {
        deleteAllCheck();
    };
};

const enterPressPush = (e) => {
    if (e.code === ENTER) {
        pushTaskInArray();
    };
};

////////

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
    };
};

////////


const render = () => {
    checkboxCheckAll.checked = false;
    let filterAllTask = filterArray();
    console.log(filterAllTask);
    console.log(filterType)
    checkAllCheckbox();
    let newElement = '';
    filterAllTask.forEach( (taskObject) => {
        newElement += `
        <li class="task" id="${taskObject.id}">
            <input type="checkbox" class="task__checkout" ${taskObject.isChecked ? 'checked' : ''} maxlength="255">
            <input value="${taskObject.text}" class="inputInTask" hidden>
            <span class="task__title">${taskObject.text}</span>
            <button class="task__btn">&#10006;</button>
        </li>
        `;
    });
    ////////
    taskList.innerHTML = newElement;
    titleInput.value = '';
    lengthTask();
    activeTask();
    completedTask();
    ////////
};
////////

let checkAllCheckbox = () => {
    checkboxCheckAll.checked = taskArray.length > 0 ? taskArray.every(elem => elem.isChecked): false;
};

////////

const convertCheckbox = (event) => {
    const eventId = event.target.parentElement.id;
    if (event.target.type === 'checkbox') {
        taskArray.forEach( (task) => {
            if (task.id === Number(eventId)) {
                task.isChecked = event.target.checked;
                render();
            } else {
                console.log('asqqwqwqw');
            };
        });
    };
    if (event.target.type === 'submit') {
        taskArray = taskArray.filter( elem => elem.id !== Number(eventId));
        render();
    };
    // /////////////////////////////////////////////

    if (event.detail === 2) {
        console.log(event);
        event.target.hidden = true;
        event.target.previousElementSibling.hidden = false;
        event.target.previousElementSibling.focus();
        // event.target.previousElementSibling.addEventListener('blur', () => {
        //     render();
        // });
    };
    ///////////////////////////////////////////////////
};

const saveTitleTask = (e) => {
    ////////
    if (e.code === ENTER) {
        console.log(e);
        taskArray.forEach(task => {
            if (task.id === Number(e.target.parentElement.id)) {
                task.text = e.target.value;
                /////////////////////////////
                
                ////////////////////////////
            };
        });
        render();
    };
    if (e.code === ESC) {
        console.log('esc');
        render();
    };
};


const lengthTask = () => {
    let allTask = taskArray.length;
    states.childNodes[1].innerText = 'All' + ` (${allTask})`
};



const activeTask = () => {
    let noCheckTask = 0;
    taskArray.filter( task => {
        if (task.isChecked === false) {
            noCheckTask += 1;
        };
    }).length;
    states.childNodes[3].innerText = 'Active' + ` (${noCheckTask})`;
    console.log(states.childNodes);
};


const completedTask = () => {
    let allCheckTask = taskArray.length;
    let noCheckTask = 0;
    taskArray.filter( task => {
        if (task.isChecked === false) {
            noCheckTask += 1;
        };
    }).length;
    console.log(states.childNodes);
    let checkTask = allCheckTask - noCheckTask;
    states.childNodes[5].innerText = 'Completed' + ` (${checkTask})`;
};


// let filterTaskArray = () => {
//     console.log('filtertask');
//     let filterTasks = taskArray;
//     console.log(filterTasks);
//     render();
// };
const filterArray = () => {
    if (filterType === 'all') {
        console.log(taskArray);
        return taskArray;
    };
    if (filterType === 'active') {
        console.log('active')
        let activeTasks = taskArray.filter(task => !task.isChecked);
        console.log(activeTasks);
        return activeTasks;
    };
    if (filterType === 'completed') {
        console.log('completed')
        let completedTasks = taskArray.filter(task => task.isChecked);
        console.log(completedTasks);
        return completedTasks;
    };
};

const checkElementState = (event) => {
    filterType = event.target.id;
    console.log(filterType);
    render();

}; 

const blurElement = (event) => {
    console.log(event);
    event.target.nextElementSibling.innerText = event.target.value;
    render();
    
};


////////////////////////////////////


let currentPage = 1;

const pageForTask = (taskArray) => {
    taskArray.forEach()
};

const stateCheck = states.addEventListener('click', checkElementState);
const keyEnterForPush = titleInput.addEventListener('keydown', enterPressPush);
const saveRenameTask = taskList.addEventListener('keydown', saveTitleTask);
const keyRemoveDel = document.addEventListener('keydown', pressRemoveAll);
const buttonPush = titleButton.addEventListener('click', pushTaskInArray);
const buttonCheckbox = taskList.addEventListener('click', convertCheckbox);
const buttonAllCheck = checkboxCheckAll.addEventListener('click', removeAllCheck);
const buttonAllRemove = removeAllCheckTask.addEventListener('click', deleteAllCheck);
const blurInput = taskList.addEventListener('blur', blurElement, true);
