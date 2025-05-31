
function showLoader() {
    document.getElementById("loader-wrapper").style.display = "flex";
  }

  window.addEventListener("load", () => {
    const loader = document.getElementById("loader-wrapper");
    loader.style.opacity = "0";
    setTimeout(() => loader.style.display = "none", 700);
  });

  window.addEventListener("load", () => {
  const loader = document.getElementById("loader-wrapper");
  setTimeout(() => {
    loader.style.opacity = "0";
    setTimeout(() => loader.style.display = "none", 700);
  }, 1000); // 1-second artificial delay
});


