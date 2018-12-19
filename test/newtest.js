var operandLeft, operator, operandRight;
isFirstOperatorCalculation = true;
var evalStringArray = [];
$(".number").click(function () {
    var previousValue = $("#output").val();
    var currentValue = $(this).val();
    if (isFirstOperatorCalculation === true) {

        operandLeft = previousValue + currentValue;
        $('#output').val(operandLeft);
    }
    else
    {
        operandRight = previousValue + currentValue;
        $('#output').val(operandRight);
    }
});

$(".operator").click(function () {
    var operatorClicked = $(this).val();
    $('#output').val(operatorClicked);
    isFirstOperatorCalculation = false;
    if (operandRight != null){
        calculateValue(operatorClicked);
    }
})

function calculateValue(latestOperator) {
    if (isFirstOperatorCalculation === true){
        operator = latestOperator;
    }
    else
    {

        evalStringArray.push(operandLeft , operandRight);
        evalStringArray = evalStringArray.join('');
        operandLeft = eval(evalStringArray);
        evalStringArray=[];
        $('#output').val(operandLeft);
        operandRight = null;
    }
}