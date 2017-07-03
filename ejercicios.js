//EJERCICIO1

var num1=prompt("Ingrese primer numero");
var num2=prompt("Ingrese segundo numero");
var num3=prompt("Ingrese tercer numero");

    if(num1>num3){
      document.write("Numero 1 es mayor y vale" + num1+"");
    }
  }
}

else{
  if(num1<num2){
    if(num2>num3){
      doument.write("Numero 2 es mayor y vale:" + num2+"");
    }
    else{
      document.write("Numero 3 es mayor y vale:"+num3+"")
    }
  }
}

document.write("[br /][br /]Numero 1 = "+numero1+"[br /]"+"Numero 2 = "+numero2+"[br /]"+"Numero 3 = "+numero3);


//EJERCICIO 2
var arr=[20,10,30,50,120,15];

function parImpar(arr){
par ="";
impar="";

  for(i=0;i<arr.length;i++){
    if(i%2 ==0){

      par+= arr[i] + ""
    }
    else{
      impar+= arr[i] + ""
    }

  }
}
parImpar(arr);
document.write("Los elementos de posicion par son: " + par);
document.write("Los elementos de posicion impar son:" + impar);

//EJERCICIO3

var arr=[10,20,23,12,16,34];
var aux;
var n = arr.length;

 for (int i = 0; i < n; i++){
  System.out.print(ar[i] + " ");//imprime  el array
 for(int i = 0;i <= n/2; i++){//recorre el array hasta la mitad
    aux = arr[n-1];//almacena ultimo numero
    arr[n-1] = arr[i];//la ultima posicion aora es el primer numero
    arr[i] = aux;  //primer numero se reemplaza por el ultimo (aux)
     n--;//se disminuye de  izq a derecha el arreglo
  }
 for (var i = 0; i < arr.length; i++){//recorre arreglo invertido
   System.out.print(arr[i] + " ");//imprime  el arreglo invertido
 }
 }
