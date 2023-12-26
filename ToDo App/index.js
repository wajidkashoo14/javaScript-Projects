const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');
const addBtn = document.getElementById('add-btn');

addBtn.addEventListener('click', () => {
    if (inputBox.value === "") {
        alert('Please enter the value');
    }else {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    inputBox.value = ''
    saveData()
})

listContainer.addEventListener('click', (e) => {
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked')
        saveData()
    } else if(e.target.tagName === 'SPAN') {
        e.target.parentElement.remove()
        saveData()
    }
}, false)

function saveData() {
    localStorage.setItem('data', listContainer.innerHTML)
}

function getData() {
    listContainer.innerHTML = localStorage.getItem('data')
}

getData()