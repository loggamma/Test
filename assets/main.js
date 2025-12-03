<script>
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const el = entry.target;
      if (entry.isIntersecting) {
        el.classList.add("visible");
      } else {
        el.classList.remove("visible");
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll(".animate-on-scroll").forEach(el => observer.observe(el));

  document.querySelectorAll('.drop > button').forEach(btn=>{
    btn.addEventListener('click', ()=> {
      const li = btn.parentElement;
      const open = li.classList.toggle('open');
      btn.setAttribute('aria-expanded', open);
    });
  });
  // close when clicking outside
  document.addEventListener('click', e=>{
    if(!e.target.closest('.drop')) document.querySelectorAll('.drop.open').forEach(d=>{ d.classList.remove('open'); d.querySelector('button').setAttribute('aria-expanded', false); });
  });
</script>
