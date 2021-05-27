
function entrar(){

	var area = document.getElementById('area');

	var texto= prompt('Digite seu nome');


	if(texto == '' || texto == null){

		alert('Digite seu nome movamente!!');
		area.innerHTML= 'Bem Vindo.....';

	}else{

		area.innerHTML= 'Bem Vindo ' +  texto;


	}



}
