//consultar mdn Date-->developer.mozzila.org
//const tresHoras = 60 * 60 * 3 *1000;
//const umDia = 60* 60 * 24 * 1000;


const data = new Date(2019, 3, 20, 15, 14, 27);
console.log(data.toString());

function zeroAEsquerda(num){
    return num >=10 ? num : `0${num}`;
}

function formatarData(data){
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth());
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);