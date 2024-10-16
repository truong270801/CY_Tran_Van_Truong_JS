// Hàm xử lý chuỗi
function processString(input) {
  const specialChars = /[@#!{}\[\]()]/g;
  let processed = input.replace(specialChars, '');
  processed = processed.replace(/\s+/g, ' ').trim();

  return processed;
}
function wordsArray(input) {
  const processedStr = processString(input);
  const words = processedStr.split(' ').map(word => {
  
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });

  return words.reverse();
}

function averageOfNumbers(input) {
  const processedStr = processString(input);
  const numbers = processedStr.match(/\b\d+\b/g); 

  if (!numbers) return 0; 

  const sum = numbers.reduce((acc, num) => acc + parseFloat(num), 0);
  const average = sum / numbers.length;

  return Math.round(average * 10) / 10;
}

const testStringA = " Xin c{h}ào #Tech@!Cy(VN)   ";
const testStringB = " Xin 20 c{h}ào 60  #Cy30@!Tech(VN)  100 ";

console.log(wordsArray(testStringA)); 
console.log(averageOfNumbers(testStringB)); 
