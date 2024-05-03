# Dia 18/04 

Realizado criação do repositório **Aula-Noite** e criado a pasta: "Primeiro projeto".

A pasta *Primeiro projeto* foi criada para inclusão da prática de utilização de Array's. Também foi incluso o desafio de que a o cadastro precisa incluir a data e a hora em que foi criada.

# Dia 22/04 

Criação da pasta **CRUD usuário interface**.

Nesta pasta aprenderemos vários meios de estilização.

* A tag `<span>` é um conteiner generico em linha para conteúdo fraseado , que não representa nada por natureza. Ele pode ser usado para agrupar elementos para fins de estilo (usando os atributos class ou id ), ou para compartilhar valores de atributos como lang. (A tag é um elemento *inline*)
* Elemento **&#10006** indica uma linguagem antiga para mostrar a letra "x".
* A tag `<footer>` representa um rodapé para o seu sectioning content (conteúdo de seção) mais próximo ou sectioning root elemento (ou seja, seu parente mais próximo <article>, <aside>, <nav>, <section>, <blockquote>, <body>, <details>, <fieldset>, <figure>, <td> (en-US)). Normalmente um rodapé contém informações sobre o autor da seção de dados.

Sempre que linkar um arquivo JS precisamos que ele seja incluso em uma tag `<script>` com o atributo de `src`.

~~~js
const qualquerFuncao = () => {
document.getElementById('saveValues').addEventListener('click', ()=>{
    alert("o botão está funcionando")
})}

document.addEventListener('DOMContentLoaded', qualquerFuncao);
~~~
Teste de botão com **alert**. Para testá-lo precisamos aplicar uma const para que ele saiba o que precisa fazer quando for chamado.

O elemento `defer` quando usamos, ele auxilia carregando os elementos do HTML e após carregar o JS quando for chamado.