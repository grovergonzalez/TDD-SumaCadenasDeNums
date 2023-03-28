function SumCadenasDeNums(cadenaDeNums)
{
    let SumatoriaCadenas = 0;
    for(let i =0;i<cadenaDeNums.length;i++){
        if(cadenaDeNums[i]=="," || cadenaDeNums[i]=="-"){
            SumatoriaCadenas+=0;
        }
        else{
            SumatoriaCadenas +=+cadenaDeNums[i];
        }
    }
    return SumatoriaCadenas;
}

export default SumCadenasDeNums;