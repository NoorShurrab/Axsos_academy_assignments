let like1 = document.querySelector(".like1");
let numOfLike = document.querySelector(".numOfLike");

let n = 3;
like1.onclick = () => {
    n++;
    numOfLike.innerText = n + " like(s)";
}
