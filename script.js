const projectData = {
  "heat-exchanger": {
    kicker: "P-01 // ACADEMIC EXPERIMENT",
    title: "Flat Plate Heat Exchanger Enhanced Using Nanofluids",
    intro: "An experimental thermal-engineering project investigating how Al₂O₃ nanofluid concentration and flow rate affect heat-transfer performance.",
    details: [
      ["WHAT WAS IT?", "An experimental study of a compact flat plate heat exchanger using reported Al₂O₃ nanofluid concentrations of 0.5%, 1.0%, 1.5% and 2.0% across 1–6 LPM flow rates."],
      ["WHY / OBJECTIVE", "To investigate whether changing nanofluid concentration and flow rate changes heat-transfer performance and to quantify the effect using Q, LMTD and U₀."],
      ["WHAT I DID", "Studied the heat-exchanger setup, temperature measurement concept and experimental variables; interpreted the reported result tables and reconstructed the project graphs for portfolio presentation."],
      ["TOOLS / METHODS", "Flat plate heat exchanger · Al₂O₃ nanofluid · LM35 temperature sensor concept · flow-rate variation · thermal calculations · Q · LMTD · overall heat-transfer coefficient."],
      ["SKILLS DEVELOPED", "Experimental planning, heat-transfer fundamentals, data interpretation, quantitative comparison, technical reporting and engineering presentation."],
      ["OUTCOME", "At 6 LPM, the reported Q increased from 3479.83 W at 0.5% to 4396.67 W at 2.0%; U₀ increased from 678.08 to 987.31 W/m²·K."],
      ["REAL-WORLD RELEVANCE", "The work demonstrates how an engineering variable can be changed systematically, measured and evaluated using quantitative performance indicators."],
      ["EVIDENCE", "The supplied portfolio contains the project report basis, numerical result tables and reconstructed chart interpretations. Add the original report or project photos below."]
    ],
    evidence: ["Original project report — ADD LINK", "Project photos — ADD LINK", "Data / spreadsheet — ADD LINK", "Technical write-up — ADD LINK"]
  },
  "prince-pipes": {
    kicker: "P-02 // INDUSTRIAL EXPERIENCE",
    title: "Extrusion Production Engineering & Quality Support",
    intro: "Industrial exposure at Prince Pipes & Fittings focused on PVC pipe extrusion, production data, quality documentation and process-improvement support.",
    details: [
      ["WHAT WAS IT?", "Graduate Engineer Trainee exposure within PED / Extrusion & Production Engineering from March to June 2026."],
      ["WHY / OBJECTIVE", "Support production engineering and quality activities while understanding how process stability, documentation and improvement interact on a high-volume line."],
      ["WHAT I DID", "Worked with production data; supported NCR clearance and corrective actions; prepared SOPs, engineering reports and revision-controlled records; applied 5 Why and Fishbone; supported CAPA, Kaizen and calibration/inspection documentation."],
      ["TOOLS / METHODS", "PVC extrusion process · 5 Why · Fishbone · CAPA · Lean Manufacturing · Kaizen · SMED-oriented changeover thinking · QMS documentation."],
      ["SKILLS DEVELOPED", "Production-process understanding, quality problem solving, documentation discipline, cross-functional coordination and continuous-improvement thinking."],
      ["OUTCOME", "Developed a practical understanding of how production, quality, tooling, documentation and improvement activities connect on a manufacturing line."],
      ["REAL-WORLD RELEVANCE", "Shows exposure to the operating environment of production engineering rather than only academic process knowledge."],
      ["EVIDENCE", "No external evidence URL was supplied in the portfolio. Add permitted photos, process diagrams, presentation slides or a redacted work sample if available."]
    ],
    evidence: ["Work/project presentation — ADD LINK", "Redacted process document — ADD LINK", "Approved plant photos — ADD LINK"]
  },
  "bhel": {
    kicker: "P-03 // INDUSTRIAL INTERNSHIP",
    title: "BHEL Heavy Engineering Exposure",
    intro: "A 14-day industrial internship at Bharat Heavy Electricals Limited, Tiruchirappalli, with exposure to heavy-engineering manufacturing and quality practices.",
    details: [
      ["WHAT WAS IT?", "Quality / Production internship at BHEL, Tiruchirappalli, July 2024."],
      ["OBJECTIVE", "Understand heavy-engineering manufacturing operations and observe how process control and quality assurance are applied."],
      ["WHAT I OBSERVED", "Waterwall panel production, boiler manufacturing activities, cleaning and regeneration-valve production, quality documentation, calibration and inspection records."],
      ["SKILLS DEVELOPED", "Manufacturing-process awareness, quality documentation, inspection-record understanding and audit-oriented thinking."],
      ["OUTCOME", "Built exposure to the scale and process discipline of heavy engineering manufacturing."],
      ["REAL-WORLD RELEVANCE", "Connects mechanical-engineering theory with large-scale industrial production and quality systems."],
      ["EVIDENCE", "No public URL was supplied. Add internship certificate, permitted photos or report excerpts if available."]
    ],
    evidence: ["Internship certificate — ADD LINK", "Internship report — ADD LINK", "Permitted photos — ADD LINK"]
  },
  "nlc": {
    kicker: "P-04 // INDUSTRIAL INTERNSHIP",
    title: "NLC Mining & Material-Inspection Exposure",
    intro: "A 14-day internship at NLC India, Neyveli, providing exposure to lignite mining equipment and material-inspection practices.",
    details: [
      ["WHAT WAS IT?", "Mechanical / Quality internship (SME – RC) at NLC India, July 2023."],
      ["OBJECTIVE", "Gain exposure to mining equipment, associated mechanical systems and quality/material-inspection practices."],
      ["WHAT I OBSERVED", "Bucket-wheel excavator operations, lignite conveyor systems, metallographic sample preparation, material inspection, calibration and technical documentation."],
      ["SKILLS DEVELOPED", "Industrial equipment awareness, material-inspection exposure, documentation and audit/maintenance-quality understanding."],
      ["OUTCOME", "Developed exposure to a different industrial environment where large mechanical systems and material quality intersect."],
      ["REAL-WORLD RELEVANCE", "Demonstrates adaptability across manufacturing and mining environments and exposure to heavy mechanical systems."],
      ["EVIDENCE", "No public URL was supplied. Add internship certificate, report or permitted photographs if available."]
    ],
    evidence: ["Internship certificate — ADD LINK", "Internship report — ADD LINK", "Permitted photos — ADD LINK"]
  }
};

const modal = document.getElementById("projectModal");
const modalContent = document.getElementById("modalContent");
const toast = document.getElementById("toast");

function openProject(id) {
  const p = projectData[id];
  if (!p) return;
  modalContent.innerHTML = `
    <div class="modal-kicker">${p.kicker}</div>
    <h2>${p.title}</h2>
    <p class="modal-intro">${p.intro}</p>
    <div class="detail-grid">
      ${p.details.map(d => `<div class="detail"><b>${d[0]}</b><p>${d[1]}</p></div>`).join("")}
    </div>
    <div class="evidence-actions">
      ${p.evidence.map(e => `<a href="#" class="placeholder-link" data-placeholder="${e}">${e}</a>`).join("")}
    </div>`;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}
function closeProject() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}
document.querySelectorAll(".project-card").forEach(card => {
  card.addEventListener("click", e => {
    if (e.target.closest(".project-open") || !e.target.closest("button")) openProject(card.dataset.project);
  });
});
document.querySelectorAll("[data-close-modal]").forEach(el => el.addEventListener("click", closeProject));
document.addEventListener("keydown", e => { if (e.key === "Escape") closeProject(); });

document.addEventListener("click", e => {
  const link = e.target.closest(".placeholder-link");
  if (!link) return;
  e.preventDefault();
  showToast(`Placeholder: ${link.dataset.placeholder || "add your real URL"}`);
});

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => toast.classList.remove("show"), 2800);
}

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.getElementById("nav");
menuToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", open);
});
nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, {threshold:.12});
document.querySelectorAll(".section-head,.project-card,.evidence-card,.credential,.achievement-empty,.contact-box").forEach(el => {
  el.classList.add("reveal");
  observer.observe(el);
});
