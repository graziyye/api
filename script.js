document.getElementById('carregar').addEventListener('click', carregarUsuario)

function carregarUsuario(){
    //requisição da api
    fetch('https://jsonplaceholder.typicode.com/users')

    //conversor de resposta para json
    .then(response => response.json())

    //tratamento de dados
    .then(dados => {
        const container = document.getElementById('usuarios');
        container.innerHTML='';

        dados.forEach(usuario =>{
            const card = document.createElement('div');
            card.classList.add('card')
            card.innerHTML=`
            <h3>${usuario.name}</h3>
            <p>Email:${usuario.email}</p>
            <p>Endereço:${usuario.address.city}</p>
            `;

            container.appendChild(card);
        })

    })
}