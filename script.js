

const generateBtn = document.getElementById("generateBtn");
const downloadBtn = document.getElementById("downloadBtn");
const planContainer = document.getElementById("plan");


function generatePlan(projectType, days, skill) {
  const tasks = [
    "Requirement Analysis & Wireframing",
    "HTML Structure Setup",
    "CSS Styling & Responsive Design",
    "JavaScript Functionality",
    "Backend Setup / APIs",
    "Testing & Debugging",
    "Deployment & Documentation"
  ];

  const plan = [];
  for (let i = 0; i < days; i++) {
    let task = tasks[i] || "Documentation / Extra features / Review";
    if (skill === "Beginner" && i === 4)
      task += " — use simple static backend or Firebase";
    if (skill === "Expert" && i === 2)
      task += " — apply advanced CSS or frameworks";

    plan.push({ day: i + 1, task });
  }
  return plan;
}


function renderPlan(plan, projectType) {
  planContainer.innerHTML = "";
  plan.forEach((p) => {
    const div = document.createElement("div");
    div.className = "day";
    div.innerHTML = `<h3>Day ${p.day}</h3><p><strong>${projectType}</strong>: ${p.task}</p>`;
    planContainer.appendChild(div);
  });
}


generateBtn.addEventListener("click", () => {
  const project = document.getElementById("project").value || "Website";
  const days = parseInt(document.getElementById("days").value) || 7;
  const skill = document.getElementById("skill").value || "Beginner";

  const plan = generatePlan(project, days, skill);
  renderPlan(plan, project);
});


downloadBtn.addEventListener("click", () => {
  window.print();
});
