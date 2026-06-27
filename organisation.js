document.addEventListener("DOMContentLoaded", function(){
  const loginPanel=document.getElementById("loginPanel");
  const orgaHome=document.getElementById("orgaHome");
  function showHome(){ loginPanel.classList.add("hidden"); orgaHome.classList.remove("hidden"); }
  if(orgaIsUnlocked()) showHome();
  document.getElementById("loginBtn").addEventListener("click", function(){
    const v=document.getElementById("passwordInput").value.trim();
    if(v===ORGA_PASSWORD){ orgaUnlock(); showHome(); } else { document.getElementById("loginError").textContent="Mot de passe incorrect."; }
  });
  document.getElementById("passwordInput").addEventListener("keydown", e=>{ if(e.key==="Enter") document.getElementById("loginBtn").click(); });
});
