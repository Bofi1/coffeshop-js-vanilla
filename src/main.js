window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.getElementById("preload").style.display = "none";
  }, 1500); // 2 segundos

  setTimeout(() => {
    document.getElementById("content").style.display = "block";
  }, 1500); // 2 segundos
});
