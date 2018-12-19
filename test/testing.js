var operandLeft,operator,operandRight;
var isFirstOperatorCalculation = true;
var evalString = [];
$(".number").click(function() {
    var previousValue=$("#output").val();
    var currentValue=$(this).val();
    if (isFirstOperatorCalculation === true){
        operandLeft = previousValue + currentValue;
        $("#output").val(operandLeft);
    }
    else
    {
        operandRight= previousValue+ currentValue;
        $("#output").val(operandRight);
    }

});

$(".operator").click(function () {
    var operatorClicked=$(this).val();
    $("#output").val(operatorClicked);
    refreshValue(operatorClicked);
    isFirstOperatorCalculation = false;
    if (operandRight != null){
        var afterResult = (operandLeft  +  operandRight);
        operandLeft = eval(afterResult);
        $('#output').val(operandLeft);
        operandRight = null;
    }
});

function refreshValue(latestOperator) {
    if (isFirstOperatorCalculation === true) {
        operator = latestOperator;
    }
    else {
        debugger;
        evalString = operandLeft + operandRight;
        operandLeft = eval(evalString);
        operator = latestOperator;
        // operandRight = null;
    }
}
$("#result").click(function () {
    $('#output').val(operandLeft);
});