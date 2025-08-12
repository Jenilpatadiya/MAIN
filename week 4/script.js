let rate = 83.5;

document.getElementById("convertBtn").onclick = function () {
    let inr = document.getElementById("inr").value;
    let usd = document.getElementById("usd").value;

    if (inr && !usd) {
        document.getElementById("usd").value = (inr / rate).toFixed(2);
    } 
    else (usd && !inr) 
    {
        document.getElementById("inr").value = (usd * rate).toFixed(2);
    } 
    
}
