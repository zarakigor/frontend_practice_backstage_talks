let bodyBackgroundColor = document.body.style.backgroundColor;
let container = document.getElementsByClassName("container");
let len = container[0].childElementCount;
let height = window.innerHeight;

window.addEventListener("scroll", () => {
  // background color changes at the middle of section instead of beginning
  let issueNumber = 7 - Math.ceil((window.scrollY - height / 2) / height);
  let issue = document.getElementById(`issue${issueNumber}`);
  document.body.style.backgroundColor = issue.dataset.color;
});
