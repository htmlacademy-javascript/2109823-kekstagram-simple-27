function getRandomIntInclusive(min, max) {
  if(min<0 || max<0 || max<min){
return NaN
  }
 min = Math.ceil(min);
  max = Math.floor(max);
   return Math.floor(Math.random() * (max - min + 1)) + min;

}

//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

function truncate(str, maxlength) {
  return (str.length <=maxlength) ;
}

//https://learn.javascript.ru/task/truncate
