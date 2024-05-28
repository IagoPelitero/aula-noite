# Anotações

Criado pelo tutor

~~~JS
//iniciar o consumo de API utilizando o método async e await
async function getCep() {
    try {
        const url = "https://viacep.com.br/ws/03152150/json/"

        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                nome: "Guilherme",
                idade: 21,
                cidade: "São Paulo"
            })
        })

        const retorno = await response.json();

        console.log(retorno);
    } catch (error) {
        console.log(error);
    }
}

getCep();
~~~

~~~JS
//segundo método com fetch .then

function getCep01() {
    fetch("https://viacep.com.br/ws/04831110/json/", {
        method: "POST",
        headers: {
            "Content-Type": 'application/json'
        }
    })
        .then((response) => response.json())
        .then((data) => 
            console.log(data)
        )
        .catch((error) => console.log(error))
}

getCep01();
~~~

