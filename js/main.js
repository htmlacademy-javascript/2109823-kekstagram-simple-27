function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

function truncate(str, maxlength) {
  return (str.length > maxlength) ?
    str.slice(0, maxlength - 1) + '…' : str;
}
//https://learn.javascript.ru/task/truncate
