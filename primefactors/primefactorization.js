function prime(num){
    var factor=[];
    for(var count=2; count<num;count++){
        if (num%count==0)
            factor.push(count);
    }
    console.log("All factors:");
    console.log(factor);

    //looping over the array
    var primeFactor=[];
    for(var index=0; index < factor.length; index++)
    {
        var current_number = factor[index];
        if (isPrime(current_number) == true) {
            primeFactor.push(current_number);
        }
    }
    console.log("Prime factors:");
    console.log(primeFactor);
}

function isPrime(num){
for(var index=2; index<num; index++) {
    if (num % index == 0)
        return false;
}
        return true;
}
prime(27)