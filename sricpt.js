const body = document.querySelector('body');
const divGeral = document.querySelector('.geral')
const divLista = document.querySelector('ul');

const inputTexto = document.querySelector('input');


inputTexto.addEventListener('keydown', (evento) => {
    if(evento.key != 'Enter'){
        return;
    }
    if(inputTexto.value == ''){
        return;
    }
    
    const boxLista = document.createElement('input');
    boxLista.type = 'checkbox';
    boxLista.classList.add('checkbox')

    const itemLista = document.createElement('li');
    itemLista.textContent = inputTexto.value;

    const quebra = document.createElement('div');
    quebra.classList.add('break');

    divLista.append(boxLista , itemLista, quebra);
    divGeral.append(divLista);
    body.append(divGeral);

    inputTexto.value = '';

    boxLista.addEventListener('click', () => {
        itemLista.style = 'text-decoration: line-through';
    });

    boxLista.removeEventListener('selectionchange',() => {

    });
})