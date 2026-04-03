function qs(name){
  const url = new URL(window.location.href);
  return url.searchParams.get(name);
}

const fileInput = document.getElementById('file');
const loadBtn = document.getElementById('load');
const viewer = document.getElementById('viewer');
const rawChk = document.getElementById('raw');

async function loadFile(path){
  if(!path) return;
  try{
    const res = await fetch(path);
    if(!res.ok) throw new Error(res.statusText);
    const md = await res.text();
    if(rawChk.checked){
      viewer.innerHTML = '<pre style="white-space:pre-wrap">'+escapeHtml(md)+'</pre>';
      return;
    }
    const html = marked.parse(md, {headerIds:true});
    viewer.innerHTML = html;
    document.querySelectorAll('pre code').forEach((el)=>{
      try{hljs.highlightElement(el)}catch(e){}
    });
  }catch(err){
    viewer.innerHTML = '<div style="color:crimson">Error loading file: '+escapeHtml(String(err))+'</div>';
  }
}

function escapeHtml(s){return s.replace(/[&<>]/g, c=>({"&":"&amp;","<":"&lt;",">":"&gt;"}[c]))}

loadBtn.addEventListener('click', ()=>{
  const p = fileInput.value.trim();
  loadFile(p);
});

const initial = qs('file') || 'qa-cheat-sheet.md' || 'prompt-showcase.md';
fileInput.value = initial;
loadFile(initial);
