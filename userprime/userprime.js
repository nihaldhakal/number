function isPrime(num) {
    for (var index = 2; index <= (num-1); index++) {
        if (num % index === 0)
            return false;
        }
        return true;
}

function showPrime(num) {
   var primeNum=[]
   for(var index=1; (index<num);index++) {
       if (isPrime(index) == true){
           primeNum.push(index);
       }
       conti();
   }
   console.log(primeNum);

}

showPrime(100);

function conti() {
    console.log("Do you want to continue?");

    var userInput =;
    if ( userInput == "y")
        return true;
}


// function number ( firstNum, secondNum ) {
//     var n=[];
//     for(var i = firstNum; i < secondNum; i++){
//         n.push(i);
//     }
//     for (var index = 2; index <= n-1; index++) {
//         for(var i = 2; i < n-1; i++){
//             if (index % i == 0)
//                 return false;
//         }
//     }
//     return true;
// }
// number(1,10);


