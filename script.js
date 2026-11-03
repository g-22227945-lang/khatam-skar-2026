const m=document.querySelector('#menu'),n=document.querySelector('#nav');m?.addEventListener('click',()=>{n.classList.toggle('open');m.textContent=n.classList.contains('open')?'×':'☰'});document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>{n.classList.remove('open');m.textContent='☰'}));const u=document.querySelector('.up');window.addEventListener('scroll',()=>u.classList.toggle('show',scrollY>450));u.addEventListener('click',()=>scrollTo({top:0,behavior:'smooth'}));
function openPoster(imageSrc) {
  const lightbox = document.getElementById("posterLightbox");
  const largeImage = document.getElementById("posterLarge");

  largeImage.src = imageSrc;
  lightbox.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closePoster(event) {
  if (event) event.stopPropagation();

  const lightbox = document.getElementById("posterLightbox");

  lightbox.classList.remove("active");
  document.body.style.overflow = "";
}

document.addEventListener("keydown", function(event) {
  if (event.key === "Escape") {
    closePoster();
  }
});
