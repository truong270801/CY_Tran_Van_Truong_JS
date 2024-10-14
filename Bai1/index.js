const numberToCheck = 6;
function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i < Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function isPerfect(num) {
    if (num <= 1) {
        return false;
    }
    let sum = 0;

    for (let i = 1; i < num; i++){
        if (num % i === 0) {
            sum += i;
        }
    }
    return sum === num;
}
function checkNumber(num) {
    if (isPrime(num)) {
        console.log(`${num} là số nguyên tố.`);
    } else {
        console.log(`${num} không phải là số nguyên tố.`);
    }

    if (isPerfect(num)) {
        console.log(`${num} là số hoàn hảo.`);
    } else {
        console.log(`${num} không phải là số hoàn hảo.`);
    }
}
checkNumber(numberToCheck);