let add = document.querySelector(".add");
add.onclick = () => {
    add.remove();
}

let likes = document.querySelectorAll(".likes");
// likes.onclick = () => {
//     alert("Ninja was liked");
// }
likes.forEach(btn => {
    btn.onclick = () => {
        alert("Ninja was liked");
    }
})