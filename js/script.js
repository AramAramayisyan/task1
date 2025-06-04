var input = document.getElementById('newItem');
var oldItem = null;
countItems();
function countItems() {
    let count = document.querySelectorAll('.item').length;
    let textInfo = document.querySelector('.textInfo');
    if (count > 1) {
        textInfo.innerText = 'You have ' + count + ' pending tasks';
    } else if (count == 1) {
        textInfo.innerText = 'You have ' + count + ' pending task';
    } else {
        textInfo.innerText = 'You have no pending task';
    }
}

function newItem() {
    let data = input.value;
    if (data != '') {
        let body = document.querySelector('.body');
        let newTag = '<div class="item">\n' +
            '                <div class="itemText">\n' +
            '                    <p>' + data + '</p>\n' +
            '                </div>\n' +
            '                <div class="changeBody">\n' +
            '                    <div class="editItem">\n' +
            '                        <button onclick="changeItem(this)" ><i class="fa-solid fa-pen-to-square"></i></button>\n' +
            '                    </div>\n' +
            '                    <div class="removeItem">\n' +
            '                        <button onclick="removeItem(this)" ><i class="fa-solid fa-trash"></i></button>\n' +
            '                    </div>\n' +
            '                </div>\n' +
            '            </div>';
        body.innerHTML += newTag;
        input.value = null;
        countItems();
    }
}

function removeItem(button) {
    let item = button.closest('.item');
    item.remove();
    countItems();
}

function clearAll() {
    let body = document.querySelector('.body');
    body.remove();
    countItems();
}

function changeItem(button) {
    let addItem = document.querySelector('.addItem');
    addItem.querySelector('button').remove();
    const btnInnerHTML = '<i class="fa-solid fa-pen-to-square"></i>';
    createAndAppendItem("button", addItem, 'edit', btnInnerHTML, {
        onclick: 'edit()',
    })
    input.value = button.closest('.item').querySelector(    'p').textContent;
    oldItem = button.closest('.item');
}

function edit() {
    oldItem.querySelector('p').innerText = input.value;
}