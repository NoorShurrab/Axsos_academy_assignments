let setting = document.querySelector(".setting");
let nameChange = document.querySelector(".nameChange");
setting.onclick = () => {
    nameChange.textContent = "Noor Shurrab";
}

let deleteIt = document.querySelectorAll(".deleteIt");
let acceptIt = document.querySelectorAll(".acceptIt");
let countRequest = document.querySelector(".countRequest");
let addToMyConnection = document.querySelector(".addToMyConnection");

deleteIt.forEach((btn) => {
    btn.onclick = () => {
        btn.parentElement.parentElement.remove();
        countRequest.textContent = countRequest.textContent - 1;
    }
})
acceptIt.forEach((btn) => {
    btn.onclick = () => {
        btn.parentElement.parentElement.remove();
        countRequest.textContent = countRequest.textContent - 1;
        addToMyConnection.textContent = (parseInt(addToMyConnection.textContent) + 1) + "+";
    }
})