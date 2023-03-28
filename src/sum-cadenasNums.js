function SumCadenasDeNums(cadena)
{
    let SumatoriaCadenas = 0;
    if(cadena.length > 1){
        let num1 = + cadena[0];
        let num2 = +cadena[2];
        SumatoriaCadenas = num1 + num2;
    }
    else{
        SumatoriaCadenas += +cadena;
    }
    return SumatoriaCadenas;
}

export default SumCadenasDeNums;