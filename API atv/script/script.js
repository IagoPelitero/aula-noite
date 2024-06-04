//requisição do tipo get para retornar os dados da api

async function getSeries() {
    const url = "http://localhost:8082/series"

    const retorno = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })

    const dados = await retorno.json();

    dados.forEach(series => {
        // console.log(series);

        const tr = document.createElement('tr');
        const div = document.createElement('div');

        const listSeries = document.getElementById('listaSeries')

        const tdNomeSerie = document.createElement('td');
        tdNomeSerie.textContent = series.nomeSerie;

        const tdNumTemp = document.createElement('td');
        tdNumTemp.textContent = series.numTemporada;

        const tdAnoLancamento = document.createElement('td');
        tdAnoLancamento.textContent = series.anoLancamento;

        const tdProdutora = document.createElement('td');
        tdProdutora.textContent = series.studio;

        const tdEdit = document.createElement('img');
        tdEdit.src = './assets/icons/pencil.svg'

        tdEdit.addEventListener('click', ()=>{ const idNew= series.id;
const nomeSerie= document.getElementById('nomeSerie').value;
const numTemporada= document.getElementById('numTemporada').value;
const anoLancamento= document.getElementById('anoLancamento').value;
const studio= document.getElementById('studio'); 

    try {
        const response = await fetch(`http://localhost:8082/series/${idSerie}`, {
            method: 'PUT',
            body: JSON.stringify({
                nomeSerie,
                numTemporada,
                anoLancamento,
                studio
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await response.json();

        // Atualizar a tabela na tela com os novos dados da série
        const tr = document.querySelector(`tr[data-id="${idSerie}"]`);
        tr.querySelector('td:nth-child(1)').textContent = data.nomeSerie;
        tr.querySelector('td:nth-child(2)').textContent = data.numTemporada;
        tr.querySelector('td:nth-child(3)').textContent = data.anoLancamento;
        tr.querySelector('td:nth-child(4)').textContent = data.studio;
    } catch (error) {
        console.error('Erro ao atualizar série:', error);
    }
});


        const tdDelete = document.createElement('img')
        tdDelete.src = './assets/icons/trash.svg'

        tdDelete.addEventListener('click', ()=> {
            const idDelete = series.id;

            fetch(`http://localhost:8082/series/${idDelete}`,{
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
        })
            
        

        tr.appendChild(tdNomeSerie)
        tr.appendChild(tdNumTemp)
        tr.appendChild(tdAnoLancamento)
        tr.appendChild(tdProdutora)
        tr.appendChild(div)
        div.appendChild(tdEdit)
        div.appendChild(tdDelete)

        listSeries.appendChild(tr)
    }

)};

document.addEventListener('DOMContentLoaded', getSeries())