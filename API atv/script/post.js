//Responsável por cadastrar uma nova série pelo método POST
document.getElementById('btnCadastrar').addEventListener('click', async (e) => {
    e.preventDefault();

    //endpoint da API (URL)
    const url = 'http://localhost:8082/series'

    //captura de dados
    const dadosEnviadosApi = {
        "nomeSerie": document.getElementById('nomeSerie').value,
        "numTemporada": document.getElementById('temporadas').value,
        "anoLancamento": document.getElementById('anoLancamento').value,
        "studio": document.getElementById('produtora').value
    }
    const dadosFinais = JSON.stringify(dadosEnviadosApi)

    try {
        await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: dadosFinais,


        });
        window.location.reload();

    } catch (error) {
        console.log(`Erro ao consumir a api no cadastro: ${error}`);
    }

    // const requisicao = new request(url, {
    //     method: 'POST',
    //     Headers:{
    //         'Content-Type': 'application/json'
    //     },
    //     body: dadosFinais
    // })
    // fetch(requisicao)
})