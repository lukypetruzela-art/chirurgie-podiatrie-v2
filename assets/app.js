(function(){
  var menu=document.getElementById('menu'), burger=document.getElementById('burger'),
      drop=document.getElementById('drop'), dropToggle=document.getElementById('dropToggle');

  // active nav state by current path
  var here=location.pathname;
  if(here.endsWith('index.html')) here=here.slice(0,-10);
  if(!here.endsWith('/')) here+='/';
  document.querySelectorAll('.menu a').forEach(function(a){
    if(a.getAttribute('href')===here) a.classList.add('active');
  });
  var subs=['/vlozky-formthotics/','/ostatni-vlozky/','/tejpovani/','/silikonove-korektory/','/zarustajici-nehet/','/sluzby/'];
  if(dropToggle && subs.indexOf(here)>-1) dropToggle.classList.add('active');

  if(burger){ burger.addEventListener('click',function(){ menu.classList.toggle('open'); burger.classList.toggle('open'); }); }

  if(dropToggle){
    dropToggle.addEventListener('click',function(e){ e.preventDefault(); e.stopPropagation(); drop.classList.toggle('open'); });
    document.addEventListener('click',function(e){ if(!drop.contains(e.target)) drop.classList.remove('open'); });
  }

  var y=document.getElementById('year'); if(y) y.textContent=new Date().getFullYear();
  document.querySelectorAll('.totop').forEach(function(a){
    a.addEventListener('click',function(e){ e.preventDefault(); window.scrollTo({top:0,behavior:'smooth'}); });
  });

})();

// Generic lightbox gallery for figure images (works across all pages)
(function(){
  document.addEventListener('DOMContentLoaded', function(){
    var imgs = Array.prototype.slice.call(document.querySelectorAll('.figure-img, .fmt-slide img'));
    if(!imgs.length) return;

    var lb = document.createElement('div');
    lb.className = 'lightbox';
    lb.id = 'siteLightbox';
    lb.innerHTML =
      '<button class="lightbox-close" aria-label="Zavřít">✕</button>' +
      '<button class="lightbox-nav lightbox-prev" aria-label="Předchozí fotka">‹</button>' +
      '<div class="lightbox-img-wrap"><img alt=""><div class="lightbox-caption"></div></div>' +
      '<button class="lightbox-nav lightbox-next" aria-label="Další fotka">›</button>';
    document.body.appendChild(lb);

    var lbImg = lb.querySelector('.lightbox-img-wrap img');
    var lbCaption = lb.querySelector('.lightbox-caption');
    var idx = 0;

    function show(i){
      idx = (i + imgs.length) % imgs.length;
      var img = imgs[idx];
      var fig = img.closest('figure');
      var cap = fig ? fig.querySelector('figcaption') : null;
      lbImg.src = img.currentSrc || img.src;
      lbImg.alt = img.alt || '';
      lbCaption.textContent = cap ? cap.textContent : (img.alt || '');
    }

    imgs.forEach(function(img, i){
      img.style.cursor = 'zoom-in';
      img.addEventListener('click', function(){
        show(i);
        lb.classList.add('open');
      });
    });

    lb.querySelector('.lightbox-close').addEventListener('click', function(){ lb.classList.remove('open'); });
    lb.querySelector('.lightbox-prev').addEventListener('click', function(){ show(idx - 1); });
    lb.querySelector('.lightbox-next').addEventListener('click', function(){ show(idx + 1); });
    lb.addEventListener('click', function(e){ if(e.target === lb) lb.classList.remove('open'); });
    document.addEventListener('keydown', function(e){
      if(!lb.classList.contains('open')) return;
      if(e.key === 'Escape') lb.classList.remove('open');
      if(e.key === 'ArrowLeft') show(idx - 1);
      if(e.key === 'ArrowRight') show(idx + 1);
    });
  });
})();
