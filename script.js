const ENTER = 'Enter';
const DELETE = 'Delete';
const ESCAPE = 'Escape';
const TASK_ON_PAGE = 5;

const titleInput = document.querySelector('.title__input--line');
const titlePush = document.querySelector('.title__input--button');
const taskList = document.querySelector('.task__list');
const task = taskList.querySelector('.task');
const taskTitle = document.querySelector('.task__title');
const pageList = document.querySelector('#pages');
const checkboxAll = document.querySelector('.all__сheck');
const taskState = document.querySelector('.state');
const removeCompleted = document.querySelector('.remove__completed');
const buttonAllInState = document.querySelector('.state__all');
const buttonActiveState = document.querySelector('.state__active');
const buttonCompletedState = document.querySelector('.state__completed');
const pages = document.querySelector('#pages');


let taskArray = [];
let typeFilter = 'all';
let numberPage = 1;

const clickPushTask = () => {
  if (titleInput.value !== '') {
    let replaceTitle = titleInput.value.replace(/<\\?[^>]+(>|$)/g, '')
    
    let objectTask = {
      text: replaceTitle,
      id: Date.now(),
      isCheck: false,
    };

    let lengthArray = taskArray.push(objectTask);

    numberPage = Math.ceil(lengthArray / TASK_ON_PAGE);

    typeFilter = 'all';
  

    console.log(taskArray);
    titleInput.value = '';
  } else {
    console.log('not task');
  };
  render();
};





const enterPushTask = (event) => {
  if (event.code === ENTER) {
    clickPushTask();
  };
};


const buttonTitleTask = (event) => {
  if (event.code === ENTER) {
    taskArray.forEach( element => {
      if (element.id === Number(event.target.parentElement.id)) {
        if (event.target.value !== '') {
          element.text = event.target.value;
        } else {
          render()
        };
      };
    });
  };

  if (event.code === ESCAPE) {
    render();
  };

};


const pressDelete = (event) => {
  if (event.code === DELETE) {
    deleteAllCompleted();
  };
};



const clickOnTask = (event) => {
  if (event.target.className === 'task__checkbox') {
    taskArray.forEach( element => {
      if (element.id === Number(event.target.parentElement.id)) {
        element.isCheck = event.target.checked;
        render();
      };
    });
  };

  if (event.detail === 2) { // global
    event.target.hidden = true;
    event.target.previousElementSibling.hidden = false;
    event.target.previousElementSibling.focus();
  };

  if (event.target.className === 'task__remove') { // global
    taskArray = taskArray.filter( element => element.id !== Number(event.target.parentElement.id));
    render();
  };
};


const clickCheckAll = () => {
  if (taskArray.length <= 0) {
    checkboxAll.checked = false;
  } else {
    taskArray.forEach( element => {
      element.isCheck = checkboxAll.checked;
    });
    render();
  };
};


const checkAllCheckbox = () => {
  checkboxAll.checked = taskArray.length > 0 ? taskArray.every( element => element.isCheck) : false;
};


const deleteAllCompleted = () => {
  taskArray = taskArray.filter( element => !element.isCheck);
  render();
};


const arrayFilter = () => {

  if (typeFilter === 'all') {
    return taskArray;
  };

  if (typeFilter === 'active') {
    let taskActive = taskArray.filter( element => !element.isCheck);
    return taskActive;
  };

  if (typeFilter === 'completed') {
    let taskCompeted = taskArray.filter( element => element.isCheck);
    return taskCompeted;
  };

  sliceList();
  
};


const checkElementState = (event) => {
  typeFilter = event.target.id;
  console.log(1);
  render();
}; 



const taskStatus = (event) => {
  if (event.target.id === 'all') {
    event.target.classList.add('button__check');
    event.target.nextElementSibling.classList.remove('button__check');
    event.target.nextElementSibling.nextElementSibling.classList.remove('button__check');
    
  };

  if (event.target.id === 'active') {
    event.target.classList.add('button__check');
    event.target.previousElementSibling.classList.remove('button__check')
    event.target.nextElementSibling.classList.remove('button__check');

  };

  if (event.target.id === 'completed') {
    event.target.classList.add('button__check');
    event.target.previousElementSibling.classList.remove('button__check')
    event.target.previousElementSibling.previousElementSibling.classList.remove('button__check')
  };
};


const allLength = () => {
  let lengthAll = taskArray.length;
  taskState.childNodes[1].innerText = 'All' + ` (${lengthAll})`;// !
  return lengthAll;
};


const activeLength = () => {
  let lengthActive = 0;
  taskArray.filter( element => {
    if (element.isCheck === false) {
      lengthActive += 1;
    };
  }).length;
  taskState.childNodes[3].innerText = 'Active' + ` (${lengthActive})`; // !
  return lengthActive;
};


const completedLength = () => {
  let lengthCompleted = allLength() - activeLength();
  taskState.childNodes[5].innerText = 'Completed' + ` (${lengthCompleted})`;// !
  return lengthCompleted;
};




const blurElement = (event) => {
  console.log(event);
  render();
};







const sliceList = () => {
  const endElement = TASK_ON_PAGE * numberPage;
  const startElement = endElement - TASK_ON_PAGE;
  const paginationTasks = arrayFilter().slice(startElement, endElement);
 
  paginationTasks.forEach( element => {
    paginationView();
    
  });
  return paginationTasks;
};

const paginationView = () => {
  
  let pageCounter = Math.ceil(taskArray.length / TASK_ON_PAGE);

  pages.innerHTML = '';

  for (let i = 0; i < pageCounter; i++) {
 
    let pageList = `<button class="pages__button" id = "${i + 1}">${i + 1}</button>`;
    pages.innerHTML = pages.innerHTML + pageList;
    if (i < 2) {
      
    };
  };
};



const pressPageButton = (event) => {
  if (event.target.className === 'pages__button') {
    numberPage = event.target.id
  };
  console.log(event);
  render();
};


const focusLastPage = () => {
  
  // pages.target.lastChild.classList.add('pages__status');
};

const render = () => { 
  
  if (taskArray.length > 0) {
    buttonAllInState.classList.add('button__check');
    buttonActiveState.classList.remove('button__check');
    buttonCompletedState.classList.remove('button__check');
  } else {
    buttonAllInState.classList.remove('button__check');
  };

  if (taskArray.length === 0) {
    pages.innerHTML = '';
  };

  console.log(arrayFilter());

  let filterState = arrayFilter();
  filterState.forEach( (element) => {
    return element;
  });
  let newElement = '';
  let paginationPage = sliceList();

  paginationPage.forEach( objectTask => {

    newElement += `
      <li class="task" id="${objectTask.id}">
        <input type="checkbox" class="task__checkbox" ${objectTask.isCheck ? 'checked' : ''} maxlength="255">
        <input value="${objectTask.text}" class="task__input" hidden>
        <span class="task__title">${objectTask.text}</span>
        <button class="task__remove">&#10006;</button>
      </li>`
  });
  taskList.innerHTML = newElement;

  // if (pages > 0) {

  // };

  // pages
  focusLastPage();
  checkAllCheckbox();
  allLength();
  activeLength();
  completedLength();
  

};




const stateCheck = taskState.addEventListener('click', checkElementState);
const buttonPush = titlePush.addEventListener('click', clickPushTask);
const buttonRemove = taskList.addEventListener('click', clickOnTask);
const checkedAll = checkboxAll.addEventListener('click', clickCheckAll);
const statusTask = taskState.addEventListener('click', taskStatus);
const deleteCompleted = removeCompleted.addEventListener('click', deleteAllCompleted);
const pressPage = pages.addEventListener('click', pressPageButton);
const pressPush = document.addEventListener('keydown', enterPushTask);
const pressSave = taskList.addEventListener('keydown', buttonTitleTask);
const pressDeleteCompleted = document.addEventListener('keydown', pressDelete);
const blurTitle = taskList.addEventListener('blur', blurElement, true);




