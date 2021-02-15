function compute()
{
    p = document.getElementById("principal").value;
    r = document.getElementById("rate").value;
    t = document.getElementById("years").value;

    si = p + (p * t * (r/100));

    document.getElementById("result").textContent= "Result is here";
}
        