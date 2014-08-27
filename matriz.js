//var menu = ["Productos", "Ventas", "Contacto"];
//document.write( menu[0] );

//var dofa = [ ["Fortaleza", "Oportunidades"], ["Debilidades", "Amenazas"] ];

//document.write(dofa[1][1]);

function patito(minimo, maximo)
{
	var numero = Math.floor( Math.random() * (maximo - minimo +1 ) + minimo);
	return numero;
}

function explosion()
{
	alert("BOOM!!!");
	document.write("<h1>BOOM!!! Elegiste un area minada :(</h1>");
}

function ganaste()
{
	document.write("Eres un ganador :)");
}

//1 = Bomba. 0 = No hay bomba
var campo = [ [ 1 , 0 , 0 ] , 
			  [ 0 , 1 , 0 ] , 
			  [ 1 , 0 , 1 ] ];

campo[0][0]= patito(0,1);
campo[0][1]= patito(0,1);
campo[0][2]= patito(0,1);

campo[1][0]= patito(0,1);
campo[1][1]= patito(0,1);
campo[1][2]= patito(0,1);

campo[2][0]= patito(0,1);
campo[2][1]= patito(0,1);
campo[2][2]= patito(0,1);


var textos = ["Cesped", "Bomba"];

var x, y;

alert("Estás en un campo minado\n" +
		"Elije una posición entre el 0 y el 2 para X y para Y");

x = prompt("Posición en X? (entre 0 y 2)");
y = prompt("Posición en Y? (entre 0 y 2)");

if(x <= 2 && y <= 2)
{
	var posicion = campo[x][y];
	document.write("Elegiste " + textos[posicion] + "<br />");
	if(posicion == 1)
	{
		explosion();
	}
	else
	{
		ganaste();
	}
}
else
{
	document.write("¡Te saliste del campo!");
	explosion();
}

document.write( textos[posicion] );