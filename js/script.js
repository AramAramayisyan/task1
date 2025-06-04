var input = document.getElementById('newItem');
var oldItem = null;
countItems();

function countItems() {
    let count = document.querySelectorAll('.todo-app__item').length;
    document.querySelector('.todo-app__text-info').innerText =
        count > 1 ? `You have ${count} pending tasks` :
            count === 1 ? `You have ${count} pending task` :
                'You have no pending task';
}

function newItem() {
    if (validate(input.value)) {
        let body = document.querySelector('.todo-app__body');
        body.innerHTML += createElements(input.value);
        input.value = null;
        countItems();
    }
}

function removeItem(button) {
    button.closest('.todo-app__item').remove();
    countItems();
}

function clearAll() {
    document.querySelector('.todo-app__body').innerHTML = '';
    countItems();
}

function changeItem(button) {
    let addItem = document.querySelector('.todo-app__add-item');
    addItem.querySelector('button').remove();
    updateButton(addItem, 'edit');
    input.value = button.closest('.todo-app__item').querySelector('p').textContent;
    oldItem = button.closest('.todo-app__item');
}

function edit() {
    if (validate(input.value)) {
        oldItem.querySelector('p').innerText = input.value;
        input.value = '';
        let addItem = document.querySelector('.todo-app__add-item');
        addItem.querySelector('button').remove();
        updateButton(addItem, 'newItem');
    }
}