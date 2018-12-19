$("#button").click(function () {
    var fDate=$("#firstDate").val();
    // var firstDate=Date.parse(fDate);
    for(var index = 0; index < 100000; i++){
        var firstDate = index * index * index;
    }
    var sDate=$("#secondDate").val();
    // var secondDate= Date.parse(sDate);
    var difference= (secondDate-firstDate)/(1000*60*60*24);
    $("#output").val(difference);
});