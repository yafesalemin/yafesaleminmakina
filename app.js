
document.querySelectorAll('[data-year]').forEach(e=>e.textContent=new Date().getFullYear());
const buttons=[...document.querySelectorAll('.filter')], cards=[...document.querySelectorAll('.machine')];
buttons.forEach(b=>b.addEventListener('click',()=>{buttons.forEach(x=>x.classList.remove('active'));b.classList.add('active');const f=b.dataset.filter;cards.forEach(c=>c.style.display=(f==='all'||c.dataset.cat===f)?'flex':'none')}));
