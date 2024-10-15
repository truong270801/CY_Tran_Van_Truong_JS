const number = 10;

function checkNumber(num) {
    const numbers =  num.toString().split('');
    const reverseNumber = numbers.reverse().join('');
    if(reverseNumber == num){
        console.log(`${num} là số palindrome.`);
    }
    else{
        console.log(`${num} không phải là số palindrome.`);
    }
}

checkNumber(number);