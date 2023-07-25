let bodyBackgroundColor = document.body.style.backgroundColor;
let container = document.getElementsByClassName("container");
let len = container[0].childElementCount;

function asd() {
  console.log(Math.floor(window.scrollY) / window.innerHeight);
  console.log(window.innerHeight);
}
window.addEventListener("scroll", () => {
  let issueNumber = 7 - Math.floor(window.scrollY / window.innerHeight);
  let qq = document.getElementById(`issue${issueNumber}`);
  console.log(qq.dataset.color);
  document.body.style.backgroundColor = qq.dataset.color;
});

asd();
