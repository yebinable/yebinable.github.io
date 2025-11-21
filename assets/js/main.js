// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  
  if (!menuToggle || !navMenu) return;
  
  let isMenuOpen = false;
  
  // 햄버거 버튼 클릭
  menuToggle.addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    
    isMenuOpen = !isMenuOpen;
    
    if (isMenuOpen) {
      navMenu.classList.add('active');
      menuToggle.classList.add('active');
    } else {
      navMenu.classList.remove('active');
      menuToggle.classList.remove('active');
    }
  });
  
  // 메뉴 링크 클릭시 메뉴 닫기
  const menuLinks = navMenu.querySelectorAll('a');
  menuLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      isMenuOpen = false;
      navMenu.classList.remove('active');
      menuToggle.classList.remove('active');
    });
  });
  
  // 메뉴 외부 클릭시 메뉴 닫기
  document.addEventListener('click', function(e) {
    const target = e.target;
    const isClickInsideMenu = navMenu.contains(target);
    const isClickOnToggle = menuToggle.contains(target);
    
    if (!isClickInsideMenu && !isClickOnToggle && isMenuOpen) {
      isMenuOpen = false;
      navMenu.classList.remove('active');
      menuToggle.classList.remove('active');
    }
  });

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

  // Floating TOC (Table of Contents)
  const postContent = document.querySelector('.post-content');
  const tocContainer = document.getElementById('toc');
  
  if (postContent && tocContainer) {
    // H1, H2, H3, H4 헤딩 수집
    const headings = postContent.querySelectorAll('h1, h2, h3, h4');
    
    if (headings.length > 0) {
      const tocList = document.createElement('ul');
      tocList.className = 'toc-list';
      
      headings.forEach(function(heading, index) {
        // 헤딩에 ID 추가
        if (!heading.id) {
          heading.id = 'heading-' + index;
        }
        
        const li = document.createElement('li');
        li.className = 'toc-item toc-' + heading.tagName.toLowerCase();
        
        const a = document.createElement('a');
        a.href = '#' + heading.id;
        a.textContent = heading.textContent;
        a.className = 'toc-link';
        
        li.appendChild(a);
        tocList.appendChild(li);
      });
      
      tocContainer.appendChild(tocList);
      
      // 스크롤시 현재 섹션 하이라이트
      const tocLinks = tocContainer.querySelectorAll('.toc-link');
      let isUserClicking = false;
      
      function updateTocHighlight() {
        // 사용자가 클릭 중이면 업데이트 건너뛰기
        if (isUserClicking) return;
        
        let current = headings[0].id;
        const headerHeight = 100; // 헤더 높이 (sticky header)
        
        // 헤더 아래에 실제로 보이는 첫 번째 헤딩 찾기
        let foundVisible = false;
        for (let i = 0; i < headings.length; i++) {
          const heading = headings[i];
          const rect = heading.getBoundingClientRect();
          
          // 헤딩이 헤더 아래에 보이면 (헤더에 가려지지 않음)
          if (rect.top >= headerHeight && !foundVisible) {
            current = heading.id;
            foundVisible = true;
            break;
          }
        }
        
        // 모든 헤딩이 헤더 위로 지나갔으면, 가장 마지막에 지나간 것 선택
        if (!foundVisible) {
          for (let i = headings.length - 1; i >= 0; i--) {
            const heading = headings[i];
            const rect = heading.getBoundingClientRect();
            
            if (rect.top < headerHeight) {
              current = heading.id;
              break;
            }
          }
        }
        
        // 하이라이트 업데이트
        tocLinks.forEach(function(link) {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
          }
        });
      }
      
      // TOC 링크 클릭 이벤트
      tocLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
          // 모든 링크에서 active 제거
          tocLinks.forEach(function(l) {
            l.classList.remove('active');
          });
          // 클릭한 링크에 active 추가
          this.classList.add('active');
          
          // 클릭 후 1초간 스크롤 업데이트 중지
          isUserClicking = true;
          setTimeout(function() {
            isUserClicking = false;
          }, 1000);
        });
      });
      
      // 초기 하이라이트 설정
      updateTocHighlight();
      
      // 스크롤시 업데이트
      window.addEventListener('scroll', updateTocHighlight);
    } else {
      // 헤딩이 없으면 TOC 숨기기
      const tocWrapper = document.querySelector('.toc-wrapper');
      if (tocWrapper) {
        tocWrapper.style.display = 'none';
      }
    }
  }

  // --- Dark Mode Toggle ---
  const themeToggleButton = document.getElementById('theme-toggle');
  const body = document.body;

  if (themeToggleButton) {
    // 다크 모드 활성화 함수
    const enableDarkMode = () => {
      body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
      themeToggleButton.textContent = '☀️'; // 아이콘 변경
    };

    // 다크 모드 비활성화 함수
    const disableDarkMode = () => {
      body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
      themeToggleButton.textContent = '🌙'; // 아이콘 변경
    };

    // 토글 버튼 클릭 이벤트
    themeToggleButton.addEventListener('click', () => {
      if (body.classList.contains('dark-mode')) {
        disableDarkMode();
      } else {
        enableDarkMode();
      }
    });

    // 페이지 로드 시 사용자 설정 확인
    const savedTheme = localStorage.getItem('theme');
    // 사용자의 시스템 설정이 다크 모드인지 확인
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      enableDarkMode();
    } else {
      disableDarkMode(); // 기본은 라이트 모드
    }
  }
});
