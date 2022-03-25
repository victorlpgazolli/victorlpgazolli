import animatedScroll from "./animation.js";

const hamburguer = document.querySelector("#menu__toggle");

const menu = document.querySelector(".container-menu-mobile");

const menuItems = document.querySelectorAll(".menu-mobile li");

const optionsState = {
  opened: false
}

function triggerHeader() {
  const isClosed = !optionsState.opened
  if (isClosed) return menu.classList.add("loading-page-transition");

  menu.classList.remove("loading-page-transition");
  document.querySelector("#menu__toggle").checked = false;
}

const toggleHeaderVisibility = () => {
  triggerHeader();
  optionsState.opened = !optionsState.opened;
}

hamburguer.addEventListener("click", toggleHeaderVisibility);

menuItems.forEach((item) => {
  item.addEventListener("click", toggleHeaderVisibility);
});

animatedScroll("[data-anime='scroll']");
