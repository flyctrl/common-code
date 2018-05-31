addEventListener('resize', setRemUnit);
addEventListener('pageshow', function (e) {
  e.persisted && setRemUnit();
});
setRemUnit();

function setRemUnit() {
  var docEle = document.documentElement;
  var rootValue = docEle.clientWidth / 3.75;
  docEle.style.fontSize = rootValue + 'px';
}