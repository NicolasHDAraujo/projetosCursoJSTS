const elementos =[
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'section', texto: 'Frase 3'},
    {tag: 'footer', texto: 'Frase 4'}    
];//elementos a serem inseridos

const container = document.querySelector('container');//selecionando onde será inserido os elementos
const div = document.createElement('div');//criando a div
//criando os elementos
for( let i = 0 ; i < elementos.length; i++){
    const { tag, texto } = elementos[i];
    const tagCriada = document.createElement(tag);
    tagCriada.innerHTML = texto;
    div.appendChild(tagCriada);
}

container.appendChild(div);//inserindo na DOM

