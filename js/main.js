const langEl = document.querySelector(".lang");
langEl.addEventListener("click", function () {
  if (langEl.classList.contains("clicked")) {
    langEl.classList.remove("clicked");
  } else {
    langEl.classList.add("clicked");
  }
});

const menuEl = document.querySelector(".main_menu");
const allbtnEl = document.querySelector(".all_menu_btn");
const allEl = document.querySelector(".all_menu");
allbtnEl.addEventListener("click", function () {
  if (allbtnEl.classList.contains("on")) {
    allbtnEl.classList.remove("on");
    menuEl.classList.add("on");
    allEl.style.display = "none";
  } else {
    allbtnEl.classList.add("on");
    menuEl.classList.remove("on");
    allEl.style.display = "block";
  }
});

const popcloseEl = document.querySelector(".popup_close");
const popEl = document.querySelector(".popup");
popcloseEl.addEventListener("click", function () {
  popEl.style.visibility = "hidden";
});

const swiper = new Swiper(".product .swiper", {
  slidesPerView: "auto",
  // touchRatio: 0.3,
  freeMode: true,
  resistance: true,
});

const pronameEl = document.querySelectorAll(".pro_category__name");
const swipnumEl = document.querySelectorAll(".swiper");
for (let i = 0; i < pronameEl.length; i++) {
  pronameEl[i].addEventListener("click", function () {
    for (let j = 0; j < pronameEl.length; j++) {
      pronameEl[j].classList.remove("on");
      swipnumEl[j].classList.remove("on");
    }
    pronameEl[i].classList.add("on");
    swipnumEl[i].classList.add("on");
  });
}

const videoscrEl = document.querySelector(".video_content");
console.log(videoscrEl);
const scane = new ScrollMagic.Scene({
  triggerElement: videoscrEl,
  triggerHook: 0.5,
})
  .addTo(new ScrollMagic.Controller())
  .on("enter", function () {
    videoscrEl.play();
  })
  .on("leave", function () {
    videoscrEl.pause();
  });

const sitecateEl = document.querySelector(".sitecate");
const sitelistEl = document.querySelector(".sitelist");
sitecateEl.addEventListener("click", function () {
  if (sitelistEl.classList.contains("clicked")) {
    sitelistEl.classList.remove("clicked");
  } else {
    sitelistEl.classList.add("clicked");
  }
});
