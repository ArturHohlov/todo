// // // input title start
// // const titleInput = document.querySelector('.title__input--line');
// // const titleButton = document.querySelector('.title__input--button');
// // // input title end

// // const task = document.querySelector('.task');
// // let taskTitle = document.querySelector('.task__title');

// // let taskList = document.querySelector('.taskList');
// // let newTask = document.createDocumentFragment(task);

// // newTask.innerHTML = task;

// // function pushTask () {

// //         if (titleInput.value == '') {
// //             alert('Вы не ввели задачу...');
// //         }
// //         else {
// //             let titleInputValue = titleInput.value;
// //             console.log(titleInputValue);
            
// //             taskTitle.value = titleInputValue;
            
// //             taskList.prepend(newTask.innerHTML);
// //             console.log(`Новая задача: ${newTaskЫЫ}`);
            
// //             titleInput.value = '';
// //         };


// // }


// const inputTitle = document.querySelector('.title__input--line');
// const btnTitle = document.querySelector('.title__input--button');

// // const titleVlu = inputTitle.value;

// const taskArr = [];

// // function pushTask () {
// //     if (inputTitle.value !== '') {
// //         // taskArr.push = `${inputTitle.value}`;
// //         taskArr[taskArr.length] = `${inputTitle.value}`;
// //         if (taskArr.length > 0) {
// //             for (task of [taskArr.length]) {
// //                 inputTitle.value = '';
// //                 if (task !== inputTitle.value) {
// //                     console.log(taskArr);
// //                 }
// //                 else {
// //                     console.log('Эта задача уже есть');
// //                 };
// //                 break;
// //             };
// //         }
// //         else {
// //             console.log('Ничего не добавлено');
// //         };
// //         // return inputTitle.value = '';
// //     }
// //     else {
// //         console.log('Задача не задана');
// //     };
// // };



// const listTask = document.querySelector('.taskList');
// const taskBlock = document.querySelector('.task');
// let taskOutput = document.querySelector('.task__title');

// let task = taskArr[taskArr.length];


// // function searchTask (taskArr, task) {
// //     for (let i = 0; i < taskArr.length; i++) {
// //         if (taskArr[i] === task) {
// //             return Boolean(false);
// //         } else {
// //             console.log(task);
// //         }
// //     };
// // };
// // taskArr[taskArr.length] = `${inputTitle.value}`;

// function pushTask () {
//     for (let i = 0; i < taskArr.length; i++) {
//         if (taskArr[i] === task) {
//             console.log('array have element');
//         } else {
//             inputTitle.value = '';
//             console.log(taskArr);
//         }
//         break;
//     };
    
// };




// // function pushTask () {
// //     taskOutput.value = inputTitle.value;
// //     console.log(taskOutput.value);
// // };


// const pressEnter = document.addEventListener('keydown', function (e) {
//     if (e.code === 'Enter') {
//         pushTask();
//     };
// });

// const btnPush = btnTitle.addEventListener('click', pushTask);

///////////////////////////////////////////////////////////////////


// const inputTitle = document.querySelector('.title__input--line');
// const inputButton = document.querySelector('.title__input--button');
// const keyX = 'Keyx';
// const keyEnter = 'Enter';
// const keyDel = 'Delete';
// const keyNumDel = 'NumpadDecimal';
// let taskList = document.querySelector('.taskList');
// let taskLine = document.querySelector('.task');
// let taskTitle = document.querySelector('.task__title');

// let taskArr = [];

// const pushTaskInListPress = (e) => {
//     if (e.code === keyEnter) {
//         pushTaskInList();
//     };
// };

// else if (e.code === keyX) {
//     console.log(e);
// } else if (e.code === keyDel || e.code === keyNumDel) {
//     console.log(e);
// };

// const pushTaskInList = () => {
//     if (inputTitle.value !== '') {
//         let textTask = inputTitle.value;
//         inputTitle.value = '';
//         console.log(textTask);
//     } else {
//         alert('Задача не задана');
//     };
// };

// const buttonPush = inputButton.addEventListener('click', pushTaskInList);

// let pushTaskPress = document.addEventListener('keydown', pushTaskInListPress);


// //////////////////////////////////////////////////////////

// ок, тогда теперь тебе нужно отрисовывать таски при добавлении - у тебя должен быть ul в html файле, в js нужно в функции добавления таски вызывать другую функцию render, в ней проходиться по массиву тасок ( с помощью метода массива) и на каждой итерации создавать шаблонную строку с <>, складывать все li в одну строку с помощью конкатенации и потом эту строку вставлять в ul

// const titleInput = document.querySelector('.title__input--line');
// const titleButton = document.querySelector('.title__input--button');
// // let newTask = document.querySelector('.task');
// let titleNewTask = document.querySelector('.task__title');
// let taskList = document.querySelector('.taskList');
// // let blockList = document.createElement('li');
// const Enter = 'Enter';


// const enterPressPush = (e) => {
//     if (e.code === Enter) {
//         pushTaskInArray();
//     }
// };

// // make render function for push new task in ul list



// let taskArray = [];

// const pushTaskInArray = () => {
//     if (titleInput.value !== '') {
//         let taskObject = {
//             id: Date.now(),
//             text: titleInput.value,
//             isChecked: false,
//         };
//         taskArray.push(taskObject);
//         console.log(taskArray);
//         if (buttonPush !== false || keyEnterForPush !== false) {
//             // titleNewTask.value = taskObject.text;
//             // taskList.prepend(blockList);
//             // taskBackground();
//             render();
//         };
        
//         // render();
//     } else {
//         alert('Задача не задана');  
//     };
// };

// // const taskBackground = () => {
// //     // let getLi = taskList.prepend(blockList);
// //     // let getTaskInLi = blockList.prepend(newTask);
// //     //  ???? .innerHTML()?????? ////!!!!!!!!!!!!!!!!!!!!!!!!
// //     render();
// //     titleInput.value = '';
// //     console.log('11111');
    
    
// // }; 

// const render = () => {
//     let newElement = '';
//     taskArray.forEach( (taskObject) => {
//         // titleNewTask = taskObject.text;
//         newElement += `
//         <li class="task" id="${taskObject.id}">
//             <input type="checkbox" class="task__checkout" checked="${taskObject.isChecked}">
//             <span class="task__title">${taskObject.text}</span>
//             <div class="task__btn">
//                 <button class="task__btn--done">Готово</button>
//                 <button class="task__btn--todo">В процессе</button>
//             </div>
//         </li>`;
//         console.log(newElement);
//         // taskList.append(blockList);
//         // blockList.append(newTask);
//         console.log(taskObject);
//     });
//     taskList.innerHTML = newElement;
//     titleInput.value = '';
// };

// const buttonPush = titleButton.addEventListener('click', pushTaskInArray);
// const keyEnterForPush = document.addEventListener('keydown', enterPressPush);



// 1- зачем там див?
// 2- ты на каждой итерации для каждой таски создаешь span с id= task__title, а id должен быть уникальным, поменяй на класс
// 3- как ты в массиве li будешь находить нужную? у нее должен быть id
// 4- состояние isChecked нужно привязать к инпут чекбокс

const titleInput = document.querySelector('.title__input--line');
const titleButton = document.querySelector('.title__input--button');
let titleNewTask = document.querySelector('.task__title');
let taskList = document.querySelector('.taskList');
let taskId = taskList.querySelector('.task');
const removeAll = document.querySelector('.allCheck');
const removeAllCheckTask = document.querySelector('.removeFull');

const keyDel = 'Delete';
const keyNumDel = 'NumpadDecimal';



const enter = 'Enter';
const removeKey = 'KeyX';

const deleteAllCheck = () => {
    console.log('fasfaf');
    taskArray = taskArray.filter(elem => elem.isChecked = 'false');
    console.log('asas');
        removeAll.checked = false;
    };


const removeAllCheck = () => {
    console.log('dgdg');
    if (taskArray.length <= 0) {
        removeAll.checked = false;
        alert('Задача не задана')
    } else {
        taskArray.forEach( elem => {
            elem.isChecked = removeAll.checked;
            console.log(removeAll.checked);
            console.log(elem);
        });
        // removeAll.checked = false;
        render();
        console.log('eyyeyye');
        console.log(taskArray.length);
    };
};






const pressRemoveAll = (e) => {
    if (e.code === keyDel || e.code === keyNumDel) {
        console.log('del');
    };
};

const pressRemoveX = (e) => {
    if (e.code === removeKey) {
        convertCheckbox();
    };
};

const enterPressPush = (e) => {
    if (e.code === enter) {
        pushTaskInArray();
    };
};
let taskArray = [];
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
    let newElement = '';
    taskArray.forEach( (taskObject) => {
        newElement += `
        <li class="task" id="${taskObject.id}">
            <input type="checkbox" class="task__checkout" ${taskObject.isChecked ? 'checked' : ''}>
            <span class="task__title">${taskObject.text}</span>
            <button class="task__btn">&#10006;</button>
        </li>
        `;
        // console.log(newElement);
        // console.log(taskObject);
    });
    taskList.innerHTML = newElement;
    titleInput.value = '';
};

// let checkCheckbox = document.querySelector('.task__checkout');
// let checkbox = {
//     id: 0, 
//     isChecked: true,
// };

const convertCheckbox = (event) => {
    const eventId = event.target.parentElement;
    console.log(eventId.id);
    if (event.target.type === 'checkbox') {
        event.target.isChecked = !event.target.isChecked;
        
        // if (event.target.parentElement.id === event.target.parentElement.id) {

        //     taskArray.forEach( elemen => elemen.isChecked = event.target.isChecked)
        // };
        taskArray.forEach( (elemen) => {
            if (elemen.id === Number(event.target.parentElement.id)) {
                elemen.isChecked = event.target.checked;
                console.log(elemen.isChecked);
                console.log('gfdfd');
            } else {
                console.log('1111');
            };
        });
            console.log(taskArray);
        
        console.log(event.target.parentElement.id);
        
        
        // taskArray = taskArray;
        // event.target.isChecked 

        // taskArray = taskArray.filter( () => event.isChecked = !event.isChecked);
        console.log(event.target.isChecked);
        console.log(event);
        console.log(taskArray);

        
    } else if (event.target.type === 'submit') {
        // taskArray.forEach( elem => {
        //     console.log(elem);
        //     let stringElem = String(elem.id);
        //     if (stringElem === eventId.id) {
        //         console.log(taskArray);
        //     } else {
        //         console.log('bad');
        //     };
            
        // });
        console.log(event);

        taskArray = taskArray.filter( elem => String(elem.id) !== eventId.id);
        console.log(taskArray);
        render();
        
    };
    return;
};



const searchTask = (event) => {
    console.log(event.srcElement);
    let taskInTaskList = taskList.querySelector('.task');
    console.log(taskInTaskList);
};


// требуется определить в глобальном объекте значение свойства id объекта для их последующего сравнения, таким образом при проведении данной операции, при возвращении true, можно сделать удаление обратившись к определенной функции(remove) 


const keyEnterForPush = document.addEventListener('keydown', enterPressPush);
const keyRemoveDel = document.addEventListener('keydown', pressRemoveAll);
const keyRemoveX = document.addEventListener('keydown', pressRemoveX)
const buttonPush = titleButton.addEventListener('click', pushTaskInArray);
const pressOnTask = taskList.addEventListener('click', searchTask);
const buttonCheckbox = taskList.addEventListener('click', convertCheckbox);
const buttonAllCheck = removeAll.addEventListener('click', removeAllCheck);
const buttonAllRemove = removeAllCheckTask.addEventListener('click', deleteAllCheck)


// Таска визуально состоит из чекбокса, текста и кнопки удаления, больше там ничего нет

// Тебе нужно повесить клик на весь ul, при клике выяснять куда кликнуто и если кликнуто по кнопке, выяснять по кнопке какой li кликнуто (по id) и фильтровать массив, убирая id этой таски

// Почитай про глобальный объект event

// Законсоль его и потыкай содержимое

// 15:25
// Через него можно найти куда кликнуто