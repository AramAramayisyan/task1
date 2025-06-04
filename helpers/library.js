const createAndAppendItem = (what, where, className, inner, attributes) => {
    const elem = document.createElement(what);
    if (Array.isArray(className)) {
        className.forEach((name) => {
            elem.classList.add(name);
        })
    } else {
        elem.classList.add(className);
    }
    elem.innerHTML = inner;
    if (Object.keys(attributes).length) {
        for (let attribute in attributes) {
            elem.setAttribute(attribute, attributes[attribute]);
        }
    }
    where.appendChild(elem);

    return elem;
}

function validate(data) {
    return data.length > 50 || data.length == '' ? false : true;
}

function createElements(data) {
    return '<div class="todo-app__item">\n' +
        '       <div class="todo-app__item-text">\n' +
        '           <p>' + data + '</p>\n' +
        '       </div>\n' +
        '       <div class="todo-app__item-actions">\n' +
        '           <div class="todo-app__edit-item">\n' +
        '               <button onclick="changeItem(this)" class="todo-app__button todo-app__button--edit"><i class="fa-solid fa-pen-to-square"></i></button>\n' +
        '           </div>\n' +
        '           <div class="todo-app__remove-item">\n' +
        '               <button onclick="removeItem(this)" class="todo-app__button todo-app__button--remove"><i class="fa-solid fa-trash"></i></button>\n' +
        '           </div>\n' +
        '       </div>\n' +
        '   </div>';
}

function updateButton(addItem, action) {
    addItem.querySelector('button')?.remove();
    const buttonHtml = action === 'edit' ?
        '<i class="fa-solid fa-pen-to-square"></i>' :
        '<i class="fa-solid fa-plus"></i>';
    const buttonClass = action === 'edit' ?
        ['todo-app__button', 'todo-app__button--edit'] :
        ['todo-app__button', 'todo-app__button--add'];
    const onclickAction = action === 'edit' ? 'edit()' : 'newItem()';
    createAndAppendItem("button", addItem, buttonClass, buttonHtml, {
        onclick: onclickAction
    });
}