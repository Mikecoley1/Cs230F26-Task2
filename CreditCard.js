

function CheckCard(){
    var cardNumber = document.getElementById("cardNumber").value; var count = 0; var total = 0;
    for (var i = cardNumber.length -1; i >= 0; i--;){
        var digit = parseInt(cardNumber[i]);
        if (count % 2 == 1){
            digit = digit * 2;
        }
        if (digit > 9){
            digit = digit - 9;
        }
        total += digit;
        count += 1;
        }
    if (total % 10 == 0) {
        document.getElementById("result").innerHTML = "valid";
        }
        else{
        document.getElementById("result").innerHTML = "invalid";
        }
}