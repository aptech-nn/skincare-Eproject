document.querySelector("form").addEventListener("submit", function(event) {
        event.preventDefault();

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        if (email === "" || !email.includes("@") || !email.includes(".")) {
            alert("Please enter a valid Email Address.");
            return;
        }

        if (password.length < 6) {
            alert("Password must be at least 6 characters.");
            return;
        }

        // Redirect to homepage or dashboard after successful login
        window.location.href = "index2.html";
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

