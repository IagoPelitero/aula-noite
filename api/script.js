//Iniciar o consumo de API utilizando o método async e await
async function getCep (){
    const response = await fetch("https://viacep.com.br/ws/09132675/json/");
    const retorno = await response.json();
    console.log(retorno);
}

getCep()
//Segundo método com fetch .then