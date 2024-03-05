const calcular = document.getElementById('calcular');
const ERROR = document.getElementById('error');
const FLU = document.getElementById('flu');
const MAN = document.getElementById('man');
const MEDIO = document.getElementById ('medio');

calcular.addEventListener('click', () => {
    const DATO = document.getElementById('peso').value
    //validamos que se cargue un dato:
    if (DATO > 0){
        ERROR.style.display = 'none'
        let flujo = calcFlujo(DATO);
        let mantenimiento = flujo / 24;
        let medio = (flujo / 24) * 1.5;
        FLU.innerHTML = flujo + ' cc';
        MAN.innerHTML = mantenimiento + ' cc/hr';
        MEDIO.innerHTML = medio + 'm+m/2'
        FLU.style.display = 'block';
        MAN.style.display = 'block';
        MEDIO.style.display = 'block';
    } else {
        ERROR.style.display = 'block';
        FLU.style.display = 'none';
        MAN.style.display = 'none';
        MEDIO.style.display = 'none';
    }
})

function calcFlujo(peso){
    let resto = peso;
    let flujo = 0;
    if (resto>20){
        let aux = resto-20;
        flujo += aux*20;
        resto -= aux;
    } 
    if (resto>10){
        let aux = resto-10;
        flujo += aux*50;
        resto -= aux;
    }
    flujo += resto*100;
    return flujo;
}

