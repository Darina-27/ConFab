
//--------------------CARDS

var closeBtn = document.querySelectorAll(".close"),
    card = document.querySelectorAll(".community_card"),
    btnActions = document.querySelectorAll(".btn");

closeBtn.forEach(function(el) {
  el.addEventListener("click", closeCard);
});

card.forEach(function(el) {
  el.addEventListener("click", openCard);
});

btnActions.forEach(function(el) {
  el.addEventListener("click", clickBtn);
});

function closeCard(event) {
  event.stopPropagation();
  event.target.closest(".community_card").classList.add("closed");

}

function openCard(event) {
  if (event.currentTarget.classList.contains("closed")) {
    event.currentTarget.classList.remove("closed");
  } 
}

function clickBtn(event) {
  if (event.currentTarget.classList.contains("clicked")) {
    event.currentTarget.classList.remove("clicked");
  } else {
    event.currentTarget.classList.add("clicked");
  }
}
