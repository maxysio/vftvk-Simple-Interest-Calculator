function compute()
{
    document.getElementById("result").innerText= "Result is here";

    p = document.getElementById("principal").value;
    r = document.getElementById("rate").value;
    t = document.getElementById("years").value;

    si = p + (p * t * (r/100));
}
        