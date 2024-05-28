//Iniciar o consumo de API utilizando o método async e await
async function getCep() {
    try {
        const url = "https://viacep.com.br/ws/09132675/json/";
        const response = await fetch(url, 
        //     {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify({
        //         nome: "Iago",
        //         idade: 26,
        //         cidade: "Santo André"
        //     })
        // }
    );
        const retorno = await response.json();
        console.log(retorno);

    } catch (error) {
        console.log(error);
    }
};

getCep()
//Segundo método com fetch .then

function getCep01() {
    fetch("https://viacep.com.br/ws/09132675/json/", 
    // {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json"
    //     }
    // }
)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))

}
getCep01()