const calcular = document.getElementById('calcular');
const ERROR = document.getElementById('error');
const FLU = document.getElementById('flu');
const MAN = document.getElementById('man');

calcular.addEventListener('click', () => {
    const DATO = document.getElementById('peso').value
    //validamos que se cargue un dato:
    if (DATO > 0){
        ERROR.style.display = 'none'
        let flujo = calcFlujo(DATO);
        let mantenimiento = flujo * 1.5;
        FLU.innerHTML = flujo + ' cc/hr';
        MAN.innerHTML = 'm+m/2 ' + mantenimiento + ' cc/hr';
        FLU.style.display = 'block';
        MAN.style.display = 'block';
    } else {
        ERROR.style.display = 'block';
        FLU.style.display = 'none';
        MAN.style.display = 'none';
    }
})

function calcFlujo(peso){
    let resto = peso;
    let flujo = 0;
    if (resto>20){
        let aux = resto-20;
        flujo += aux*1;
        resto -= aux;
    } 
    if (resto>10){
        let aux = resto-10;
        flujo += aux*2;
        resto -= aux;
    }
    flujo += resto*4;
    return flujo;
}

function superficieCorporal(peso) {
    let superficieCorporal;

    if (peso > 30) {
        superficieCorporal = ((peso * 4) + 7) / (peso + 90);
        FLU.style.display = 'none';
        MAN.style.display = 'none';
    } else {
        superficieCorporal = (peso / 100) * 15;
        FLU.style.display = 'none';
        MAN.style.display = 'none';
    }

    const volumen1500 = superficieCorporal * 1500;
    const volumen2000 = superficieCorporal * 2000;

    const resultadoFinal = (volumen1500 > volumen2000) ? volumen1500 : volumen2000;

    return resultadoFinal;
}

const pesoMayor30 = 35;
const resultado = superficieCorporal(pesoMayor30);

console.log(`El volumen diario recomendado es: ${resultado} `);