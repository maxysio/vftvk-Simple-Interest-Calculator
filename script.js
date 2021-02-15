for(var i=1; i<=100; i++){
    var select = document.getElementById("years");
    var option = document.createElement("OPTION");
	select.options.add(option);
	option.text = i;
	option.value = i;
}


function compute()
{
    p = Number(document.getElementById("principal").value);
    r = Number(document.getElementById("rate").value);
    t = Number(document.getElementById("years").value);
    intFor  = Number(new Date().getFullYear()) + Number(t);

    si = p * (1 + ((r/100) * t));
    
    res = "If you deposit " + p + "<br>";
    res += "at an interest rate of " + r + "%.<br>"
    res += "You will rceive an amount of " + si + ",<br>"
    res += "in the year " + intFor
    document.getElementById("result").innerHTML= res;

}
        