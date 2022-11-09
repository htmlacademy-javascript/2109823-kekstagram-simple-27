function getRandomIntInclusive(min, max) {
  if(min<0 || max<0 || max<min){
return NaN
  }
 min = Math.ceil(min);
  max = Math.floor(max);
   return Math.floor(Math.random() * (max - min + 1)) + min;

}

//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

function checkStringLength(str, maxlength) {
  return (str.length <=maxlength) ;
}

//https://learn.javascript.ru/task/truncate

getRandomIntInclusive(1, 0);
checkStringLength('', 140);

//Home work 07.11//

const createFotoData = (id) => {
return {
 id: id,
 url: `photos/${id}.jpg`,
 description: 'Foto',
 likes: getRandomIntInclusive(15,200),
 comments: getRandomIntInclusive(0,200)

}

}

 const data = [];

for (let i = 1; i <= 25; i++){

  data.push (createFotoData(i));
}
