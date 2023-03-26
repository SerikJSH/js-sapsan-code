const form = document.querySelector('#newDevice');
let devices = [];
form.addEventListener('submit', function(event) {
    event.preventDefault();
    const input = document.querySelector('.device-input');
    if (input.value.trim().length == 0) {
        console.log("Sorry, can't add empty item")
    } else {
        const deviceName = input.value.trim(); // вырезает пробельные значения
        addDevice(deviceName);
        console.log(deviceName);
        input.value = "";
    }
})

function renderDevice(newDevice) { // только работа с тегом "ui"
    localStorage.setItem('devices', JSON.stringify(devices)); // сохранение задач в LocalStorage браузера
    const item = document.querySelector(`[data-key='${newTodoItem.id}']`);
    if (newTodoItem.isDeleted) {
        item.remove();
        return;
    }

    let isDone = "";
    if (newTodoItem.done) {
        isDone = "todo-item-done";
    }

    const todoList = document.querySelector('.todo-list');
    const li = document.createElement('li');
    li.setAttribute('class', 'todo-item'); // создание аттрибута "class" тегу "li"
    li.setAttribute('data-key', newTodoItem.id); // создание аттрибута "class" тегу "li"
    li.innerHTML = `
    <input type="checkbox" id="${newTodoItem.id}" onclick="toggleTodoItem()"/>
    <span class="${isDone}">${newTodoItem.taskText}</span>
    <button onclick="deleteTodoItem(event)">Delete</button>
    `
    if (item) {
        todoList.replaceChild(li, item); // заменяет элемент li если он уже существует
    } else {
        todoList.append(li);
    }
}

function addDevice() {
    const device = {
        id: Date.now(),
        deviceName: deviceName,
        deviceType: deviceType,
        inStock: true,
        isDeleted: false
    }
    devices.push(device);
}