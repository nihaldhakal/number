function isPrime(num) {
    for (var index = 2; index <= (num-1); index++) {
        if (num % index === 0)
            return false;
        }
        return true;
}


function showPrime(num) {
        if (isPrime(num) == true)
            console.log(num);
}


showPrime(100)
// console.log(isPrime(5) === true ? "true": "false");