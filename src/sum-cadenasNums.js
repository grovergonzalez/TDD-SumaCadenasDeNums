function SumCadenasDeNums(cadenaDeNums)
{
    let SumatoriaCadenas = 0;
    let caracterSig  = "";
    if(cadenaDeNums[2] == "["){
        caracterSig = cadenaDeNums[3];
    }
    for(let i =0;i<cadenaDeNums.length;i++){
        
        if(caracterSig == "")
        {
            if(cadenaDeNums[i]=="," || cadenaDeNums[i]=="-"){
                SumatoriaCadenas+=0;
            }
            else{
                SumatoriaCadenas +=+cadenaDeNums[i];
            }
        }
        else{
            if(cadenaDeNums[i+7] == "," || cadenaDeNums[i+7] == "-" || cadenaDeNums[i+7] == caracterSig) {
                SumatoriaCadenas += 0;
            } 
            else{
                SumatoriaCadenas += +cadena[i+7];
            }
        }
    }
    return SumatoriaCadenas;
}

export default SumCadenasDeNums;