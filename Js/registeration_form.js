
  function showLoader() {
    document.getElementById("loader-wrapper").style.display = "flex";
  }

  window.addEventListener("load", () => {
    const loader = document.getElementById("loader-wrapper");
    loader.style.opacity = "0";
    setTimeout(() => loader.style.display = "none", 700);
  });

  function revealOnScroll() {
    const elements = document.querySelectorAll('.animate-left, .animate-right');
    const windowHeight = window.innerHeight;

    elements.forEach(el => {
      const top = el.getBoundingClientRect().top;
      if (top < windowHeight - 100) {
        el.classList.add('visible');
      }
    });
  }

  window.addEventListener('scroll', revealOnScroll);
  window.addEventListener('load', revealOnScroll);



  window.addEventListener("load", () => {
  const loader = document.getElementById("loader-wrapper");
  setTimeout(() => {
    loader.style.opacity = "0";
    setTimeout(() => loader.style.display = "none", 700);
  }, 1000); // 1-second artificial delay
});
