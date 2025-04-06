
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const section = document.querySelector(this.getAttribute('href'));
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });
  
  document.querySelectorAll('.fade-in').forEach(section => {
    observer.observe(section);
  });
  
  const style = document.createElement('style');
  style.innerHTML = `
    .fade-in.visible {
      opacity: 1 !important;
      transform: translateY(0) !important;
    }
  `;
  document.head.appendChild(style);
  
  document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = this.name.value.trim();
    const email = this.email.value.trim();
    const message = this.message.value.trim();
  
    if (!name || !email || !message) {
      alert("Please fill out all fields.");
      return;
    }
  
    if (!/^[^@]+@[^@]+\.[^@]+$/.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
  
    alert("Message sent successfully! (This is a demo — form not connected to backend)");
    this.reset();
  });
  