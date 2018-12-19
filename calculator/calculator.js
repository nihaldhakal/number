// $("input:not('#result')").click(function () {
//     // var idValue = $('#output').val()
//     var previousValue = $('#output').val();
//     var currentKeyPress = $(this).val();
//     $('#output').val(previousValue + currentKeyPress);
// });
//
// $("#result").click(function () {
//     var strToEval = $('#output').val();
//     var result  = eval(strToEval);
//     $('#output').val(result);
// })
//
// function myFunction() {
//     document.getElementById("myForm").reset();
// }


var operandLeft,  operandRight, operator; // these are strings
var isFirstOperatorCalculation = true;

$("number").click(function(){
    if(isFirstOperatorCalculation  === true){
        operandLeft = $("input").val(); // concat previous value to account for numbers with multiple digits
    }else {
        operandRight = $("input").val(); // concat previous value to account for numbers with multiple digits
    }
});

$("operator").click(function(){
    var operatorClicked = $("operator").val();
    refreshValue(operatorClicked);
    isFirstOperatorCalculation = false;
});

function refreshValue(latestOperator){
    if (isFirstOperatorCalculation === true){
        operator = latestOperator;
    } else {
        var evalString = operandLeft + operator + operandRight; // string concatenation going on
        operandLeft = eval(evalString);
        operator = latestOperator;
        operandRight = null;
    }
}
