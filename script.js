const portfolio = {
  name: "Melvin A. Reyes",
  role: "BSIT Student | Web Developer",
  about:
    "I am a BSIT student passionate about web development. I build modern applications using HTML, CSS, JavaScript, Ionic React, and Supabase.",
  projects: [
    { title: "Motorcycle Parts Management System", image: "project1.jpg" },
    { title: "Task Management System", image: "project2.jpg" },
    { title: "Social Media Feed Application", image: "project3.jpg" },
    { title: "Computer Reservation System", image: "project4.jpg" }
  ],
  contact: `
    <a href="mailto:20201041@nbsc.edu.ph"><i class="fa-solid fa-envelope"></i></a>
    <a href="https://github.com/Cybersecurity2000" target="_blank"><i class="fa-brands fa-github"></i></a>
    <a href="https://instagram.com/_melvinreyes_" target="_blank"><i class="fa-brands fa-instagram"></i></a>
    <a href="https://youtube.com/@melvinreyes6100" target="_blank"><i class="fa-brands fa-youtube"></i></a>
  `
};

document.getElementById("name").textContent = portfolio.name;
document.getElementById("role").textContent = portfolio.role;
document.getElementById("about").textContent = portfolio.about;
document.getElementById("contactInfo").innerHTML = portfolio.contact;

/* PROJECTS + MODAL */
const projectList = document.getElementById("projectList");
portfolio.projects.forEach(p => {
  const card = document.createElement("div");
  card.className = "project-card";
  card.innerHTML = `<img src="${p.image}" alt="${p.title}" class="proj-img"><p>${p.title}</p>`;
  projectList.appendChild(card);

  card.onclick = () => {
    document.getElementById("modal-img").src = p.image;
    document.getElementById("modal").style.display = "flex";
  };
});

/* CLOSE MODAL */
document.getElementById("closeModal").onclick = () => {
  document.getElementById("modal").style.display = "none";
};

/* PAGE TRANSITION */
const links = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll(".page-section");

links.forEach(link => {
  link.addEventListener("click", () => {
    links.forEach(l => l.classList.remove("active"));
    link.classList.add("active");

    sections.forEach(sec => sec.classList.remove("show"));
    document.querySelector(link.getAttribute("href")).classList.add("show");

    // close mobile menu if open
    document.getElementById("navMenu").classList.remove("open");
  });
});

/* MOBILE MENU */
document.getElementById("menuToggle").onclick = () => {
  document.getElementById("navMenu").classList.toggle("open");
};

/* DARK / LIGHT MODE TOGGLE */
document.getElementById("modeToggle").onclick = () => {
  document.body.classList.toggle("dark-mode");
  document.body.classList.toggle("light-mode");
};

/* SEARCH BAR */
const searchBar = document.getElementById("searchBar");
searchBar.addEventListener("keyup", () => {
  const searchValue = searchBar.value.toLowerCase();

  document.querySelectorAll(".project-card").forEach(card => {
    card.style.display = card.textContent.toLowerCase().includes(searchValue) ? "block" : "none";
  });

  document.querySelectorAll(".page-section").forEach(section => {
    section.style.display = section.textContent.toLowerCase().includes(searchValue) ? "block" : "none";
  });
});
