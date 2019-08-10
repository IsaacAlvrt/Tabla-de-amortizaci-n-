var tab = document.getElementById("tab");
var boton = tab.addEventListener("click", tabular);
var texto = document.getElementById("result");

function tabular (boton) 
{ 
    //variables: tiempo, tasa de interes y capital.
    var meses = document.getElementById("t");
    var t = parseFloat(meses.value);
    var tasa = document.getElementById("i");
    var i = parseFloat(tasa.value);
    i = i/1200; //convierte tasa anual a mensual
    var capital = document.getElementById("c");
    var c = parseFloat(capital.value);
    
    //Pago mensual -> R
    var R = (c * i) / (1 - (1 + i)**-t);
    
    //Datos de la deuda
    var deuda = R * t
    document.write("Tu pago mensual es de: $" + R.toFixed(2) + "</br>");
    document.write("El capital es de: $" + c + "</br>");
    document.write("Tu deuda total es de: $"+ deuda.toFixed(2) + "</br>"+ "</br>");
    
    
    for (var x = 1; x <= t; x++) {
        var m = c - ( R - (c * i) );
       document.write("El saldo de tu deuda para el " + x + " Mes es de: $"+ m.toFixed(2) + "</br>");
        c = m;
    }
}