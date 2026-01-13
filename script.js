// Basic portfolio data
const portfolio = {
  name: "Melvin A. Reyes",
  role: "BSIT Student | Web Developer",
  about: "I am a student learning web development using HTML, CSS, JavaScript, Ionic React, and Supabase.",
  projects: [
    "MotorCycle Parts System",
    "Task Management System",
    "Social Media Feed App",
    "Computer Reservation System"
    
  ],
  contact: "Email: 20201041@nbsc.edu.ph"
};

// Load data to HTML
document.getElementById("name").textContent = portfolio.name;
document.getElementById("role").textContent = portfolio.role;
document.getElementById("about").textContent = portfolio.about;

// Display projects
const projectList = document.getElementById("projectList");
portfolio.projects.forEach(project => {
  const li = document.createElement("li");
  li.textContent = project;
  projectList.appendChild(li);
});

// Show contact info
function showContact() {
  document.getElementById("contactInfo").textContent = portfolio.contact;
}
