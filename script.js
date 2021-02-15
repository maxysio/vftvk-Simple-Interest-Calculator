function populateNumberOptions(){
    alert("here")
    t = document.getElementById("years");
    for(i=1;i<=100;i++){
        addhtml += "<option value=\"" + i + "\">" + i + "</option><br>"
    }
    t.innerHTML = addhtml;
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
        