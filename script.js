
const portfolio = {
  name: "Melvin A. Reyes",
  role: "BSIT Student | Web Developer",
  about:
    "I am a BSIT student passionate about web development. I build modern applications using HTML, CSS, JavaScript, Ionic React, and Supabase.",
  projects: [
    "Motorcycle Parts Management System",
    "Task Management System",
    "Social Media Feed Application",
    "Computer Reservation System"
  ],
  contact: "📧 20201041@nbsc.edu.ph"
};

document.getElementById("name").textContent = portfolio.name;
document.getElementById("role").textContent = portfolio.role;
document.getElementById("about").textContent = portfolio.about;
document.getElementById("contactInfo").textContent = portfolio.contact;

const projectList = document.getElementById("projectList");

portfolio.projects.forEach(project => {
  const card = document.createElement("div");
  card.className = "project-card";
  card.textContent = project;
  projectList.appendChild(card);
});
