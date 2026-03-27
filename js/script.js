// =========================
// SCRIPT.JS
// =========================

function openLeadForm() {
  document.getElementById('leadModal').style.display = 'flex';
}

function closeLeadForm() {
  document.getElementById('leadModal').style.display = 'none';
}

function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}