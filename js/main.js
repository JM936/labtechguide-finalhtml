// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function(){
  const burger = document.getElementById('burger');
  const mobileMenu = document.getElementById('mobileMenu');
  const openIcon = document.getElementById('burgerOpen');
  const closeIcon = document.getElementById('burgerClose');
  if(!burger) return;
  burger.addEventListener('click', () => {
    const open = mobileMenu.classList.toggle('hidden');
    mobileMenu.classList.toggle('block');
    openIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
  });
});