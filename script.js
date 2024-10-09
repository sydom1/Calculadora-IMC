function calcImc(peso, altura) {

    let imc = peso / Math.pow(altura, 2)

    if(imc < 18.5) {
   return ("Magreza, seu IMC é: " + imc.toFixed(2))
} else 
    
    if(imc >= 18.5 && imc <= 24.9) {
   return("Normal, seu IMC é: " + imc.toFixed(2))
} else 

    if(imc >= 25 && imc <= 29.9) {
   return("Sobrepeso, seu IMC é: " + imc.toFixed(2))
}  else

    if(imc >= 30 && imc <= 39.9) {
   return("Obesidade, seu IMC é: " + imc.toFixed(2))
        
}  else{
   return("Obesidade grave, seu IMC é: " + imc.toFixed(2))
} 
   
}

calcImc(prompt('Digite seu Peso '), prompt('Digite seu Altura '))
