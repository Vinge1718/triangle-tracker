$(document).ready(function(){
  $("#submitButton").click(function(event){
    var firstNumber = parseInt($("#firstNumber").val());
    var secondNumber = parseInt($("#secondNumber").val());
    var thirdNumber = parseInt($("#thirdNumber").val());
    var equilateral = "form an equilateral traingle";
    var isosceles = "form an Isosceles triangle";
    var scalene = "form a Scalene triangle";
    var noTriangle = "not be enough to form a triangle";
    var naught = "do nothing else";
    if (firstNumber === "" || secondNumber === "" || thirdNumber === ""){
      alert("Please enter a number in all three fields")
    } else if (firstNumber === secondNumber && secondNumber === thirdNumber){
      $("p#output").empty().append(equilateral);
    }else if (firstNumber === secondNumber || firstNumber === thirdNumber || secondNumber === thirdNumber) {
      $("p#output").empty().append(isosceles);
    }else if (firstNumber !== secondNumber && secondNumber!== thirdNumber || firstNumber !==thirdNumber) {
      $("p#output").empty().append(scalene);
    }else if ((firstNumber+secondNumber <= thirdNumber) || (secondNumber+thirdNumber <= firstNumber)) {
      $("p#output").empty().append(noTriangle);
    } else {
      $("p#output").empty().append(naught);
    }

    $("p#output").show();
    event.preventDefault();
  });
});
