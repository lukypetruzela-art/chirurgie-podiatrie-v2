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

  // ---- booking form (Web3Forms + mailto fallback) ----
  var form=document.getElementById('booking-form');
  if(form){
    form.addEventListener('submit',function(e){
      e.preventDefault();
      var err=document.getElementById('cf-err'), ok=document.getElementById('cf-ok');
      function showErr(t){ err.textContent=t; err.style.display='block'; }
      err.style.display='none';
      var name=form.querySelector('[name=name]').value.trim();
      var phone=form.querySelector('[name=phone]').value.trim();
      var mail=form.querySelector('[name=email]').value.trim();
      var consent=document.getElementById('cf-consent').checked;
      if(!name||!phone||!mail){ showErr('Vyplňte prosím jméno, telefon a e-mail.'); return; }
      if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail)){ showErr('Zadejte prosím platný e-mail.'); return; }
      if(!consent){ showErr('Potvrďte prosím souhlas se zpracováním údajů.'); return; }
      var key=form.querySelector('[name=access_key]').value;
      if(!key || key.indexOf('YOUR-')===0){
        var body='Žádost o objednání\n\nJméno: '+name+'\nTelefon: '+phone+'\nE-mail: '+mail
          +'\nPreferovaný termín: '+(form.querySelector('[name=termin]').value.trim()||'—')
          +'\n\nZpráva:\n'+(form.querySelector('[name=message]').value.trim()||'—');
        window.location.href='mailto:chirurgiepodiatrie@gmail.com?subject='
          +encodeURIComponent('Žádost o objednání – '+name)+'&body='+encodeURIComponent(body);
        return;
      }
      var btn=document.getElementById('cf-send'); var old=btn.innerHTML; btn.disabled=true; btn.textContent='Odesílám…';
      fetch('https://api.web3forms.com/submit',{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},
        body:JSON.stringify(Object.fromEntries(new FormData(form)))})
        .then(function(r){return r.json();})
        .then(function(d){
          if(d.success){ form.style.display='none'; ok.style.display='block'; }
          else { showErr('Odeslání se nezdařilo. Zkuste to prosím znovu, nebo zavolejte.'); btn.disabled=false; btn.innerHTML=old; }
        })
        .catch(function(){ showErr('Odeslání se nezdařilo. Zkontrolujte připojení, nebo zavolejte.'); btn.disabled=false; btn.innerHTML=old; });
    });
  }
})();
