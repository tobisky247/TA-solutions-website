function toggleNav() {
  const nav = document.getElementById('navLinks');
  if (nav) nav.classList.toggle('open');
}


<script>
  const form = document.querySelector('.contact-form');
  const success = document.querySelector('.form-success');

  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const data = new FormData(form);

      const res = await fetch(form.action, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      });

      if (res.ok) {
        form.reset();
        success.hidden = false;
      } else {
        alert('Something went wrong. Please try again.');
      }
    });
  }
</script>
