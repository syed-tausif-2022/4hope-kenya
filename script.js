/* ===================================================================
   4Hope Kenya — script.js
   No frameworks, no build step, no third-party JS, no trackers here
   (Google Analytics is loaded separately via <script> tags in each
   HTML file's <head> — see README.md).
   =================================================================== */

/* -------------------------------------------------------------
   EDIT OPEN ROLES HERE.
   Add or remove objects from this array to change what shows up
   in the "Get Involved" section. Leave the array empty ( [] ) if
   there are no open roles right now — the page will show a
   friendly "check back soon" message instead of a blank list.
   Example:
   { title: "CAD Volunteer", commitment: "3 hrs/week, remote" }
   ------------------------------------------------------------- */
const OPEN_ROLES = [
  // TODO: add real open roles here, e.g.
  // { title: "CAD Volunteer", commitment: "3 hrs/week, remote" },
];

function renderRoles() {
  const list = document.getElementById('roles-list');
  const empty = document.getElementById('roles-empty');
  if (!list || !empty) return;

  if (!OPEN_ROLES.length) {
    list.hidden = true;
    empty.hidden = false;
    return;
  }

  empty.hidden = true;
  list.hidden = false;
  list.innerHTML = OPEN_ROLES.map(role => `
    <li>
      <span><strong>${role.title}</strong> — ${role.commitment}</span>
    </li>
  `).join('');
}

function setupNavToggle() {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (!toggle || !links) return;

  toggle.addEventListener('click', () => {
    const isOpen = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  links.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  setupNavToggle();
  renderRoles();
});
