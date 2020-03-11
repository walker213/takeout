window.onload = e => {
  console.log(e);
  const html = document.documentElement;
  function setRemUnit() {
    html.style.fontSize = html.clientWidth / 10 + "px";
  }
  setRemUnit();
  window.onresize = setRemUnit;
};
