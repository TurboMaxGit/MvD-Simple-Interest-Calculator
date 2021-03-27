function compute()
{
    p = document.getElementById("principal").value;
    var principal = p;
	r = document.getElementById("rate").value;
	var rate = r;
	y = document.getElementById("years").value;
	var years = y;
	var nowyear = 2020;
	var interest = principal * years * rate / 100;
	var DaYear = nowyear + parseInt(years);
	
	var DaString="If you deposit <mark>" + principal +"</mark><br>" +
					"at an interest rate of <mark>" + rate + "%</mark><br>" + 
					"You will receive an amount of <mark>" + interest + "</mark><br>" + 
					"in the year <mark>" + DaYear + "</mark>";
	
	document.getElementById("result").innerHTML = DaString;

}
function CheckNum() {
  var x, text;

  x = document.getElementById("principal").value;

  if (x < 0) {
    text = "Enter a positive number";
  } else {
    text = "";
  }
  document.getElementById("demo").innerHTML = text;
}
        