$(document).ready(function(){
  $("#submitButton").click(function(event){
    var firstNumber = parseInt($("#firstNumber").val());
    var secondNumber = parseInt($("#secondNumber").val());
    var thirdNumber = parseInt($("#thirdNumber").val());
    var equilateral = "The measurements will form <br>An equilateral traingle";
    var isosceles = "The measurements will form <br> An Isosceles triangle";
    var scalene = "The measurements will form <br> A Scalene triangle";
    var noTriangle = "The measurements will not be enough to form a triangle";
    var naught = "The measurements will not do much else";

  if (isNaN(firstNumber)||isNaN(secondNumber)||isNaN(thirdNumber)){
    alert("Enter a number bigger than zero in all fields!");
  }else if ((firstNumber=== 0) || (secondNumber === 0) || (thirdNumber=== 0)) {
      alert("Please enter a number bigger than Zero")
    } else if((firstNumber === secondNumber) && (secondNumber === thirdNumber)){
        $("p#output").empty().append(equilateral);
      }else if ((firstNumber === secondNumber) || (firstNumber === thirdNumber) || (secondNumber === thirdNumber)) {
        $("p#output").empty().append(isosceles);
      }else if ((firstNumber !== secondNumber) && (secondNumber!== thirdNumber) || (firstNumber !==thirdNumber)) {
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
