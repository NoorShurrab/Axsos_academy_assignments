let addLike = document.querySelectorAll(".allLike");
let numOfLike1 = document.querySelectorAll(".numOfLike1");

addLike.forEach((btn, index) => {
    btn.onclick = () => {
    let CurrentNum = numOfLike1[index];
    let text = CurrentNum.innerText;
    let num = parseInt(text);
    num++;
    CurrentNum.innerText = num + " like(s)";
};
});
