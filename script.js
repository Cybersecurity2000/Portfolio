const portfolio = {
  name: "Melvin A. Reyes",
  role: "BSIT Student | Web Developer",
  about: "I am a BSIT student passionate about web development. I build modern applications using HTML, CSS, JavaScript, Ionic React, and Supabase.",
  projects: [
    { title: "Ionic React App", image: "project1.jpg", link: "https://cybersecurity2000.github.io/it35-lab/" },
    { title: "Task Management System", image: "project2.jpg", link: "https://example.com/task" },
    { title: "Social Media Feed Application", image: "project3.jpg", link: "https://example.com/social" },
    { title: "Computer Reservation System", image: "project4.jpg", link: "https://example.com/reservation" }
  ],
  contact: `
    <a href="mailto:20201041@nbsc.edu.ph"><i class="fa-solid fa-envelope"></i></a>
    <a href="https://github.com/yourusername" target="_blank"><i class="fa-brands fa-github"></i></a>
    <a href="https://instagram.com/yourusername" target="_blank"><i class="fa-brands fa-instagram"></i></a>
    <a href="https://youtube.com/@yourchannel" target="_blank"><i class="fa-brands fa-youtube"></i></a>
  `
};

// Populate profile info
document.getElementById("name").textContent = portfolio.name;
document.getElementById("role").textContent = portfolio.role;
document.getElementById("about").textContent = portfolio.about;
document.getElementById("contactInfo").innerHTML = portfolio.contact;

// PROJECTS + MODAL
const projectList = document.getElementById("projectList");
portfolio.projects.forEach(p => {
  const card = document.createElement("div");
  card.className = "project-card";
  
  // Image opens modal, title opens link
  card.innerHTML = `
    <img src="${p.image}" alt="${p.title}" class="proj-img">
    <p><a href="${p.link}" target="_blank">${p.title}</a></p>
  `;

  projectList.appendChild(card);

  // Modal on image click
  card.querySelector(".proj-img").addEventListener("click", () => {
    document.getElementById("modal-img").src = p.image;
    document.getElementById("modal").style.display = "flex";
  });
});

// CLOSE MODAL
document.getElementById("closeModal").onclick = () => {
  document.getElementById("modal").style.display = "none";
};

// PAGE TRANSITION
const links = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll(".page-section");
links.forEach(link => {
  link.addEventListener("click", () => {
    links.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
    sections.forEach(sec => sec.classList.remove("show"));
    document.querySelector(link.getAttribute("href")).classList.add("show");
    document.getElementById("navMenu").classList.remove("open");
  });
});

// MOBILE MENU
document.getElementById("menuToggle").onclick = () => {
  document.getElementById("navMenu").classList.toggle("open");
};

// DARK / LIGHT MODE
document.getElementById("modeToggle").onclick = () => {
  document.body.classList.toggle("dark-mode");
  document.body.classList.toggle("light-mode");
};

// SEARCH FUNCTIONALITY
const searchBar = document.getElementById("searchBar");
searchBar.addEventListener("keyup", () => {
  const searchValue = searchBar.value.toLowerCase().trim();

  // Projects
  document.querySelectorAll(".project-card").forEach(card => {
    const text = card.textContent.toLowerCase();
    card.style.display = text.includes(searchValue) ? "block" : "none";
  });

  // Sections
  sections.forEach(section => {
    const sectionText = section.textContent.toLowerCase();
    const visibleProjects = section.querySelectorAll(".project-card:not([style*='display: none'])");
    const matchesSection = sectionText.includes(searchValue) || visibleProjects.length > 0;
    section.style.display = matchesSection ? "block" : "none";
  });
});
