/* =========================
   MOBILE NAV TOGGLE
   ========================= */
function toggleNav() {
  const nav = document.getElementById('navLinks');
  if (nav) {
    nav.classList.toggle('open');
  }
}

/* =========================
   CONTACT FORM (FORMSPREE)
   ========================= */
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.contact-form');
  const success = document.querySelector('.form-success');

  if (!form) return; // safely exit if no form on page

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        form.reset();
        if (success) success.hidden = false;
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      alert('Network error. Please try again later.');
    }
  });
});
