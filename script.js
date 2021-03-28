function compute()
{
    let principal = document.getElementById("principal");
	if (principal.value <= 0){
    alert("Please enter a valid amount positive number for example 1000.");
    principal.focus();
    return;
  }
	r = document.getElementById("rate").value;
	var rate = r;
	y = document.getElementById("years").value;
	var years = y;
	var nowyear = 2020;
	var interest = principal.value * years * rate / 100;
	var DaYear = nowyear + parseInt(years);
	
	var DaString="If you deposit <mark>" + principal.value +"</mark><br>" +
					"at an interest rate of <mark>" + rate + "%</mark><br>" + 
					"You will receive an amount of <mark>" + interest + "</mark><br>" + 
					"in the year <mark>" + DaYear + "</mark>";
	
	document.getElementById("result").innerHTML = DaString;

}
function displayRate(){
  let rate = document.getElementById("rate").value;
  document.getElementById("displayRate").innerHTML = rate;
}

        