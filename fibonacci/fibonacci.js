function fibonacci(num) {
var fib=[0,1];

for (var count = 2; count <= num; count++){
    fib[count] = fib[count -1]+fib[count-2];
    console.log(fib[count]);
}

}
fibonacci(10);


