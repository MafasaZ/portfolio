/* -------------------- Tabs -------------------- */
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tablink of tablinks) { tablink.classList.remove("active-link"); }
  for (tabcontent of tabcontents) { tabcontent.classList.remove("active-tab"); }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

/* -------------------- Mobile Menu -------------------- */
function openmenu() {
  document.getElementById("sidemenu").classList.add("show");
}
function closemenu() {
  document.getElementById("sidemenu").classList.remove("show");
}

/* -------------------- Highlight Active Nav -------------------- */
document.querySelectorAll('#sidemenu li a').forEach(link => {
  link.addEventListener('click', function() {
    document.querySelectorAll('#sidemenu li a').forEach(l => l.classList.remove('active'));
    this.classList.add('active');
  });
});

/* -------------------- Certifications Toggle -------------------- */
function toggleDescription(button) {
  document.querySelectorAll('.certification-card .layer').forEach(function(layer) {
    layer.style.display = 'none';
    if(layer.previousElementSibling && layer.previousElementSibling.tagName === "BUTTON") {
      layer.previousElementSibling.textContent = "View";
    }
  });
  const layer = button.nextElementSibling;
  layer.style.display = "block";
  button.textContent = "Hide";
  layer.style.opacity = 0;
  setTimeout(() => { layer.style.opacity = 1; }, 10);
  setTimeout(() => {
    layer.style.opacity = 0;
    setTimeout(() => {
      layer.style.display = 'none';
      button.textContent = "View";
    }, 300);
  }, 1000);
}

/* -------------------- Scroll Animations -------------------- */
function scrollAppear() {
  var projectCards = document.querySelectorAll('.project-card');
  var certCards = document.querySelectorAll('.certification-card');
  var windowBottom = window.innerHeight;
  
  projectCards.forEach(card => {
    var cardTop = card.getBoundingClientRect().top;
    if (cardTop < windowBottom - 50) card.classList.add('appear');
  });
  
  certCards.forEach(card => {
    var cardTop = card.getBoundingClientRect().top;
    if (cardTop < windowBottom - 50) card.classList.add('appear');
  });
}
window.addEventListener('scroll', scrollAppear);
window.addEventListener('load', scrollAppear);

/* -------------------- Dark / Light Mode -------------------- */
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  if(document.body.classList.contains('dark-mode')) {
    themeToggle.classList.remove('fa-moon');
    themeToggle.classList.add('fa-sun');
  } else {
    themeToggle.classList.remove('fa-sun');
    themeToggle.classList.add('fa-moon');
  }
});
