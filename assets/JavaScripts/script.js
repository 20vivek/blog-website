'use strict'

// navbar

const nav = document.querySelector('.mobile-nav');
const navMenuBtn = document.querySelector('.nav-menu-btn');
const navCloseBtn = document.querySelector('.nav-close-btn');

// nav toggle

const navToggleFunc = function () {nav.classList.toggle('active');}

navMenuBtn.addEventListener('click',navToggleFunc);
navCloseBtn.addEventListener('click',navToggleFunc);


// dark theme


const themeBtn = document.querySelectorAll('.theme-btn');

// first Check local storage when the page loads
const savedTheme = localStorage.getItem('blog-theme');

if (savedTheme) {
  // If a theme was saved, apply it
  document.body.classList.remove('light-theme', 'dark-theme');
  document.body.classList.add(savedTheme);

  // Update all buttons 
  const isDark = savedTheme === 'dark-theme';
  themeBtn.forEach(btn => {
    if (isDark) {
      btn.classList.remove('light');
      btn.classList.add('dark');
    } else {
      btn.classList.remove('dark');
      btn.classList.add('light');
    }
  });
}

// for Handle the click event
for (let i = 0; i < themeBtn.length; i++) {
  themeBtn[i].addEventListener('click', function() {
    
    // Toggle body classes
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    // Toggle button classes
    // Used 'j' here instead of 'i' to avoid variable shadowing bugs
    for (let j = 0; j < themeBtn.length; j++) {
      themeBtn[j].classList.toggle('light');
      themeBtn[j].classList.toggle('dark');
    }

    //  Save the new preference to local storage
    if (document.body.classList.contains('dark-theme')) {
      localStorage.setItem('blog-theme', 'dark-theme');
    } else {
      localStorage.setItem('blog-theme', 'light-theme');
    }
    
  });
}

