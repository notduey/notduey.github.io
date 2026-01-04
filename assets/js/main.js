/*==================== MENU SHOW Y HIDDEN ====================*/
const  navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('show-menu');
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu');
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
    const navMenu = document.getElementById('nav-menu');
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*==================== ACCORDION SKILLS ====================*/
const skillsHeader = document.querySelectorAll('.skills__header');

function toggleSkills() {
    // Toggle between adding and removing the "skills__open" and "skills__close" class
    if(this.parentNode.classList.contains('skills__open')){
        this.parentNode.classList.remove('skills__open');
        this.parentNode.classList.add('skills__close');
    } else {
        this.parentNode.classList.remove('skills__close');
        this.parentNode.classList.add('skills__open');
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills);
});

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
    tab.addEventListener('click', ()=>{
        const target = document.querySelector(tab.dataset.target);

        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('qualification__active');
        });

        target.classList.add('qualification__active');

        tabs.forEach(tab =>{
            tab.classList.remove('qualification__active');
        })
        tab.classList.add('qualification__active');
    })
})

/*==================== Expertise MODAL ====================*/
const modalViews = document.querySelectorAll('.Expertise__modal'),
    modalBtns = document.querySelectorAll('.Expertise__button'),
    modalCloses = document.querySelectorAll('.Expertise__modal-close');

let modal = function (modalClick){
    modalViews[modalClick].classList.add('active-modal');
};

modalBtns.forEach((modalBtn, i)=>{
    modalBtn.addEventListener('click', ()=>{
        modal(i);
    })
});

modalCloses.forEach(modalClose => {
    modalClose.addEventListener('click', () =>{
        modalViews.forEach((modalView) =>{
            modalView.classList.remove('active-modal');
        });
    });
});

/*==================== EXPERTISE SWIPER ====================*/
let swiperExpertise = new Swiper(".Expertise__container", {
    cssMode: true,
    spaceBetween: 24,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
/*==================== PORTFOLIO SWIPER  ====================*/
let swiper = new Swiper(".portfolio__container", {
    cssMode: true,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        pauseonMouseEnter: true,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
});
/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset;

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    })
}
window.addEventListener('scroll', scrollActive);

window.addEventListener('scroll', function() {
    const scrollUp = document.getElementById('scroll-up');
    let footer = document.getElementById('footer');
    let rect = footer.getBoundingClientRect(); // Gets the current position of the footer

    // Check if the top of the footer is visible
    if (rect.top <= window.innerHeight) {
        // If the footer is visible, change the button's color
        scrollUp.classList.add("scrollup--footer");
    } else {
        // Otherwise, remove the class
        scrollUp.classList.remove("scrollup--footer");
    }
});

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader(){
    const nav = document.getElementById('header');
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);

/*==================== SHOW SCROLL UP ====================*/
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);

/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*==================== COPY TO CLIPBOARD ====================*/
const icon = document.getElementById("copy-email-icon");
const email = document.getElementById("copy-email").textContent.trim();

icon.addEventListener("click", async () => { // wait for icon to be clicked
    await navigator.clipboard.writeText(email); // copy email to clipboard

    icon.classList.replace("fa-envelope", "fa-envelope-circle-check") // change icon

    setTimeout(() => {
        icon.classList.replace("fa-envelope-circle-check", "fa-envelope"); // revert icon in 3 seconds
    }, 3000);
});

/*===================== FORM SUBMIT/NO REDIRECT =====================*/
//CHATGPT HELPED A BUNCH WITH THIS BOTTOM SECTION (BUT I ALSO UNDERSTOOD AND WROTE MOST OF IT)
// When the user clicks "Send", the form submits data to the server in the background
// (AJAX) so the page does NOT refresh or redirect to new page.

/*===================== DOCUMENT OBJECT MODEL (DOM) ELEMENTS =====================*/
// Get the contact form from the HTML
const form = document.getElementById("submit_form"); // Looks for: <form id="submit_form">

// Element where we show status messages
const statusEl = document.getElementById("form-status"); // Example: <p id="form-status"></p>

// Button
const submitBtn = document.getElementById("check"); // Example: <button type="submit" id="check">

// inputs
const nameInput = document.getElementById("name"); // Example: <input type="text" id="name">
const emailInput = document.getElementById("email"); // Example: <input type="email" id="email">
const subjectInput = document.getElementById("subject"); // Example: <input type="text" id="subject">
const messageInput = document.getElementById("message"); // Example: <textarea id="message"></textarea>

/*===================== FORM SUBMIT LOGIC =====================*/
// Only run this code if the form exists on the page
if (form) { // prevents JS errors if this script runs on a page without the form

  // This runs when the user clicks "Send" or presses Enter
  form.addEventListener("submit", async (e) => {
    e.preventDefault(); // Prevent the browser’s default form behavior (no page refresh, no redirect)

    /*===================== INPUT VALIDATION =====================*/
    function validateInputs(fields) { // checks if input fields are empty
      for (const field of fields) {
        if (!field.el.value.trim()) {
          statusEl.textContent = `Please enter a${field.input}.`;
          field.el.focus();
          return false;
        }
      }
      return true;
    }

    const info = [
      { el: nameInput, input: " name" },
      { el: emailInput, input: "n email address" },
    ];
    const body = [
      { el: subjectInput, input: " subject" },
      { el: messageInput, input: " message" },
    ];

    if (!validateInputs(info)) return; // checks if name and email fields are empty

    const email = emailInput.value.trim(); // remove whitespace
    const hasAt = email.includes("@"); //false if there's no "@" in email
    const hasDotAfterAt = email.split("@")[1]?.includes("."); //false if there's no "." after the "@"
    // email = "example@email.com"
    // email.split("@") = ["example", "email.com"]
    // email.split("@")[1] = "email.com"
    // ?. is optional chaining, meaning if [1] exists, check if it includes a "."
    const hasTextBeforeAt = email.split("@")[0].length > 0; //false if there's no text before the "@"

    if (!hasAt || !hasDotAfterAt || !hasTextBeforeAt) { // checks if any of the conditions are false
        statusEl.textContent = "Please enter a valid email address.";
        emailInput.focus();
        return;
    }

    if (!validateInputs(body)) return; // checks if subject and message fields are empty

    /*===================== SUBMIT FORM =====================*/
    submitBtn.disabled = true; // Disables button to prevent multiple submissions
    statusEl.textContent = "Sending..."; // Shows a loading message

    try {
      // Create a FormData object from the form, automatically gathers all inputs with name="..."
      const formData = new FormData(form);

      // Send the form data to the URL in form.action using fetch (AJAX)
      const res = await fetch(form.action, {
        method: "POST", // send data to the server
        body: formData, // form values (name, email, message, etc.)
        headers: {
            Accept: "application/json", // ask the server for a JSON response
        },
      });

      if (res.ok) { // if the server responded with a success status
        statusEl.textContent = "Thanks! Your message has been sent."; // success message
        form.reset(); // clear all form fields
      } 
      else { // server responded but with an error status
        statusEl.textContent = "Error sending message. Please try again.";
      }
    }
    catch { // Runs if: network fails, user is offline, or fetch throws an error
      statusEl.textContent = "Network error. Please try again.";
    }
    finally {
      submitBtn.disabled = false; // Re-enable the button
    }
  });
}
