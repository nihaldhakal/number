// function fibonacci(num) {
// var fib=[0,1];
// if (num<=2)
//     return 1;
// for (var count = 2; count <= num; count++){
//     fib[count] = fib[count -1]+fib[count-2];
//     console.log(fib[count]);
// }
//
// }
// fibonacci(10);
//
//
function fibonacci(num) {

    // if(num == 0){
    //     return 0;
    // }else if(num == 1){
    //     return 1;
    // }else
    fibonacci=[0,1]
        for (var count=2; count<=num; count++){
        fibonacci[count]=(fibonacci[count-1] + fibonacci[count-2]);
        console.log(fibonacci[count]);
        }

}
fibonacci(10);


