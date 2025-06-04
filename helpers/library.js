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