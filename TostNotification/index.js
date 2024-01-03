const sucessBtn = document.getElementById("sucess");
const errorBtn = document.getElementById("error");
const invalidBtn = document.getElementById("invalid");
const toastBox = document.getElementById("toastBox");

const sucessMsge = "Successfully sumitted";
const errorMsge = "Error, something went wrong";
const invalidMsge = "Invalid input";

const allBtn = document.querySelectorAll("button");
allBtn.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    let msge
    if(e.target.innerHTML ==='Success') {
        msge = sucessMsge
    } else if (e.target.innerHTML ==='Error') {
        msge = errorMsge
    } else if(e.target.innerHTML ==='Invalid') {
        msge = invalidMsge
    }
    showToast(msge);
  })
);


function showToast(msge) {
  const div = document.createElement("div");
  div.classList.add("toast");
  div.innerHTML = msge;
  toastBox.appendChild(div);

  if(msge.includes('Successfully')) {
    div.classList.add('sucess')
  } 
  if(msge.includes('Error')) {
    div.classList.add('error')
  } 
  if(msge.includes('Invalid')) {
    div.classList.add('invalid')
  }

  setTimeout(() => {
    div.remove()
  }, 3000)
}
