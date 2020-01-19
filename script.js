
initial();

async function initial() {
    const list = await getList();
    createHtml(list);
    document.getElementById('ul-elem').addEventListener('click', deleteItem);
    document.getElementById('butt-elem').addEventListener('click', addText);
}

async function getList() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const list = await response.json();
    console.log(list);
    return list; 
}

function createHtml(arrList) {
    const divEl = document.body.appendChild(document.createElement('div'));
    const inputEl = divEl.appendChild(document.createElement('input'));
    inputEl.setAttribute('id', 'input-elem');
    const buttonEl = divEl.appendChild(document.createElement('button'));
    buttonEl.setAttribute('id', 'butt-elem');
    buttonEl.innerText = 'add';
    const ulEl = divEl.appendChild(document.createElement('ul'));
    ulEl.setAttribute('id', 'ul-elem');

    arrList.forEach(item => {
        const liEl = ulEl.appendChild(document.createElement('li'));
        const spanEl = liEl.appendChild(document.createElement('span'));
        spanEl.innerText = item.title;
    });
}

function deleteItem() {
    if (event.target.tagName === 'SPAN') {
        const span = event.target.parentNode;
        span.parentNode.removeChild(span);
    }
}

function addText() {
    const inputEl = document.getElementById('input-elem');
    if (inputEl.value.length === 0) {
        alert('Please fill in the field');
    };
    const ulEl = document.getElementById('ul-elem');
    const liEl = ulEl.appendChild(document.createElement('li'));
    liEl.innerText = inputEl.value; 
    inputEl.value = '';
}