$(document).ready(function() {
  $('#millas').on('keyup', function(event) {
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if (keycode === 13) {
      calcularMillas();
      window.location.href = "#slide02";
      $(this).addClass('highlight'); // Agregar clase CSS al input
    }
  });

  $('#millas').on('input', function() {
    $(this).removeClass('highlight'); // Remover clase CSS del input al ingresar un nuevo número
  });
});

/*
$(document).ready(function() {
  $('#millas').keypress(function(event) {
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if (keycode === 13) {
      calcularMillas();
      window.location.href = "#slide02";
      $(this).addClass('highlight'); // Agregar clase CSS al input
    }
  });

  $('#millas').on('input', function() {
    $(this).removeClass('highlight'); // Remover clase CSS del input al ingresar un nuevo número
  });
});
*/

/*
function validarEnter(event) {
  if (event.key === "Enter" || event.key === "Return" || event.keyCode === 13 || event.which === 13) {
    calcularMillas();
    document.getElementById("millas").classList.add('highlight'); // Agregar clase CSS al input
  }
}
*/



function validarNumero(input) {
    input.value = input.value.replace(/\D/g, ''); // Remover todo lo que no sea un número
}


function calcularMillas() {
    var inputMillas = document.getElementById("millas");
    var millas = parseInt(inputMillas.value);
    
    // Calcular la cantidad de millas en euros
    
    var cashMiles = Math.round((millas / 1500) * 5);

    // Calcular alquiler vehículo Europcar 

    let europcar
    if (millas>=10000){europcar = Math.round(0.00533*millas) }
    else {europcar = "<strong>No tienes suficientes millas en</strong>";
    }
    

    // Calcular la cantidad de millas en dinero bono

    let cheque60 = 0;
    let cheque40 = 0;
    let cheque20 = 0;

    let num=millas;

    while (num >= 13200) {
    cheque60++;
    num -= 13200;
    }

    while (num >= 8800) {
    cheque40++;
    num -= 8800;
    }

    while (num >= 4400) {
    cheque20++;
    num -= 4400;
    }

    let bono = cheque60 * 60 + cheque40 * 40 + cheque20 * 20;

    // Calcular noches de Hotel en la NH en sus diferentes tarifas 

    let NH1=millas;
    let collectionBasica=0;
    
    while (NH1 >= 35000) 
    {
        collectionBasica++;
        NH1 -= 35000;
    }
    
    //

    let NH2=millas;
    let collectionPromocional=0;
    
    while (NH2 >= 25000) 
    {
        collectionPromocional++;
        NH2 -= 25000;
    }

    //
    
    let NH3=millas;
    let hotel4Basica=0;
    
    while (NH3 >= 26000) 
    {
        hotel4Basica++;
        NH3 -= 26000;
    }

    //

    let NH4=millas;
    let hotel4Promocional=0;
    
    while (NH4 >= 17000) 
    {
        hotel4Promocional++;
        NH4 -= 17000;
    }


    //
    
    let NH5=millas;
    let hotel3Basica=0;
    
    while (NH5 >= 15000) 
    {
        hotel3Basica++;
        NH5 -= 15000;
    }

    //

    let NH6=millas;
    let hotel3Promocional=0;
    
    while (NH6 >= 11500) 
    {
        hotel3Promocional++;
        NH6 -= 11500;
    }



    
    // Muestra el resultado


    document.getElementById("cashmiles").innerHTML = "Dispones de aproximadamente "+cashMiles+" EUR";
    document.getElementById("amazon").innerHTML = "Tus millas equivalen a "+bono+" EUR en tarjetas regalo";
    document.getElementById("europcar").innerHTML = europcar+" EUR para alquiler en Europcar. Para mas informacion consulta www.aireuropa.com";
    document.getElementById("bono").innerHTML = "Tus millas equivalen a "+bono+" EUR en tarjetas regalo";
    


    document.getElementById("collectionBasica").innerHTML = collectionBasica + " Noche" + (collectionBasica !== 1 ? "s" : "");
    document.getElementById("collectionPromocional").innerHTML = collectionPromocional + " Noche"+ (collectionPromocional !== 1 ? "s" : "");
    document.getElementById("hotel4Basica").innerHTML = hotel4Basica + " Noche"+ (hotel4Basica !== 1 ? "s" : "");
    document.getElementById("hotel4Promocional").innerHTML = hotel4Promocional + " Noche"+ (hotel4Promocional !== 1 ? "s" : "");
    document.getElementById("hotel3Basica").innerHTML = hotel3Basica + " Noche"+ (hotel3Basica !== 1 ? "s" : "");
    document.getElementById("hotel3Promocional").innerHTML = hotel3Promocional + " Noche"+ (hotel3Promocional !== 1 ? "s" : "");
    

}


  