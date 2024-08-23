$(document).ready(function(){
    // Move forward
    $("#button1").click(function(){
        $("#img1").closest(".div_container").next(".div_container").append($("#img1"));
    });

    // Move backward
    $("#button2").click(function(){
        $("#img1").closest(".div_container").prev(".div_container").append($("#img1"));
    });
});
