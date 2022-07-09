const body = document.querySelector('body');
const divLista = document.querySelector('ul');

const inputTexto = document.querySelector('input');


inputTexto.addEventListener('keydown', (evento) => {
    if(evento.key != 'Enter'){
        return
    }
    
    divLista.style = '.lista'
    const boxLista = document.createElement('input');
    boxLista.type = 'checkbox';

    const itemLista = document.createElement('li');
    itemLista.textContent = inputTexto.value;

    

    divLista.append(boxLista , itemLista);
    body.append(divLista);

    inputTexto.value = '';

    boxLista.addEventListener('click', () => {
        itemLista.style = 'text-decoration: line-through';
        inputData.style = 'background-color: green'
        inputData.color = 'color: white'
    });
})