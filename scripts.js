const menu=document.getElementById('menu');const nav=document.getElementById('nav');menu.addEventListener('click',()=>{const opened=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(opened));menu.setAttribute('aria-label',opened?'Fechar menu':'Abrir menu')});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Abrir menu')}));document.getElementById('year').textContent=new Date().getFullYear();

// Mostra o player apenas quando o arquivo de vídeo estiver disponível.
const goatVideo=document.getElementById('goatVideo');
if(goatVideo){const source=goatVideo.querySelector('source');fetch(source.src,{method:'HEAD'}).then(r=>{if(r.ok){goatVideo.style.display='block';goatVideo.nextElementSibling.style.display='none';}}).catch(()=>{});}
