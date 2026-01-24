document.addEventListener("DOMContentLoaded", () => {

  // NAME SEQUENCE (ON LOAD)
  const name1 = document.querySelector(".name1");
  const amp = document.querySelector(".amp-anim");
  const name2 = document.querySelector(".name2");

  if (name1 && amp && name2) {
    setTimeout(() => name1.classList.add("show"), 300);
    setTimeout(() => amp.classList.add("show"), 1200);
    setTimeout(() => name2.classList.add("show"), 2100);
  }

  // SCROLL ANIMATIONS
  const onScroll = () => {
    document.querySelectorAll(".quote, .wedding-details")
      .forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
          el.classList.add("show");
        }
      });
  };

  window.addEventListener("scroll", onScroll);
  onScroll();
});

