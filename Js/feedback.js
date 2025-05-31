const stars = document.querySelectorAll(".fa-star");
    const ratingInput = document.getElementById("ratingValue");

    stars.forEach((star) => {
      star.addEventListener("click", function () {
        const rating = this.getAttribute("data-rating");
        ratingInput.value = rating;

        stars.forEach((s) => s.classList.remove("checked"));
        for (let i = 0; i < rating; i++) {
          stars[i].classList.add("checked");
        }
      });
    });

   
    document.getElementById("feedbackForm").addEventListener("submit", function (event) {
      event.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const rating = document.getElementById("ratingValue").value;
      const message = document.getElementById("message").value.trim();

      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

      if (!name || !email || !rating || !message) {
        alert("Please fill in all fields.");
        return;
      }

      if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
      }

      alert("Thank you for your feedback!");

      this.reset();
      stars.forEach((s) => s.classList.remove("checked"));
      ratingInput.value = "";
    });


    
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

   
