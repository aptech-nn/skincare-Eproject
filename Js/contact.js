document.getElementById("contactForm").addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const contactMethod = document.querySelector('input[name="contactMethod"]:checked');

      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      const phonePattern = /^[0-9]{10,15}$/;

      if (!name || !email || !phone || !contactMethod) {
        alert("Please complete all fields.");
        return;
      }

      if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
      }

      if (!phonePattern.test(phone)) {
        alert("Please enter a valid phone number (10–15 digits).");
        return;
      }

      alert("Message sent successfully!");
      this.reset();
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
