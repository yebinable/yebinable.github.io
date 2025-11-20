// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  
  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', function(e) {
      e.stopPropagation();
      navMenu.classList.toggle('active');
      menuToggle.classList.toggle('active');
    });
    
    // 메뉴 링크 클릭시 메뉴 닫기
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', function() {
        navMenu.classList.remove('active');
        menuToggle.classList.remove('active');
      });
    });
    
    // 메뉴 외부 클릭시 메뉴 닫기
    document.addEventListener('click', function(e) {
      if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
        navMenu.classList.remove('active');
        menuToggle.classList.remove('active');
      }
    });
  }

  // Smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Reading progress bar for post pages
  const progressBar = document.createElement('div');
  progressBar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    height: 3px;
    background: var(--primary-color);
    width: 0%;
    z-index: 1000;
    transition: width 0.1s ease;
  `;
  
  if (document.querySelector('.post')) {
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', function() {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      const progress = (scrolled / documentHeight) * 100;
      progressBar.style.width = progress + '%';
    });
  }

  // Add fade-in animation on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  document.querySelectorAll('.post-item, .post-card-small').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
});
