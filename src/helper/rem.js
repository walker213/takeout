window.addEventListener("DOMContentLoaded", () => {
  const html = document.documentElement;
  function setRemUnit() {
    html.style.fontSize = html.clientWidth / 10 + "px";
  }
  setRemUnit();
  window.onresize = setRemUnit;
});
