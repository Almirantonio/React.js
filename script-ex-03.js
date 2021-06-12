

document.write("</br> Ecolha seu pedido por gentileza :</br>");
document.write("</br> 0 - sorvete: </br>");
document.write("</br> 1- suco :</br>");
document.write("</br> 2 - coca cola : </br>");
document.write("</br> 3- Agua : </br> </br>" );



function pedir(){

	x = prompt("Escolha uma opção no cardápio");


	switch(x){
		case "0" :

		alert(" sorvete escolhido!!!");

		break;


		case "1":

		alert(" suco escolhido!!!");

		break;


		case "2":

		alert(" coca cola escolhida!!!");

		break;

		case "3":

		alert(" Agua escolhida!!!");

		break;

		default:

		alert("não temos esta opção");
	}
}