function compute()
{
    p = document.getElementById("principal").value;
    r = document.getElementById("rate").value;
    t = document.getElementById("years").value;
    intFor  = Number(new Date().getFullYear()) + Number(t);

    si = p + (p * t * (r/100));

    res = "If you deposit " + p + "<br>";
    res += "at an interest rate of " + r + "%.<br>"
    res += "You will rceive an amount of " + si + ",<br>"
    res += "in the year " + intFor
    document.getElementById("result").innerHTML= res;

}
        