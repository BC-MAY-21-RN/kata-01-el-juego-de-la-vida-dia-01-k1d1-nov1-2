
function GenArray(){
    var row = 4
    var col = 8
    var arrayGen = new Array(row)

for(var i = 0; i <arrayGen.length; i++){
    arrayGen[i] = new Array(col);
}

return arrayGen;
}

function randomArray(){
    var curArray = GenArray();//console.warn(curArray);
    for(var i = 0; i<curArray.length; i++){
        for(var j = 0; j<curArray[i].length; j++){
            curArray[i][j] = Math.random() < 0.4;
        }
    }
    return curArray;
}

function showGen(generator){
    let arrayString = '';
    console.warn('NuevaGeneracion');
    for(var i = 0; i <generator.length; i++){
        for(var j = 0; j<generator[i].length; j++){
            if(generator[i][j]){
                arrayString += '*';
            }else{
                arrayString +='-';
            }
        }
        console.warn(arrayString);
        arrayString = '';
    }
}

function Gen(past){
    var gen = GenArray();
    for(let row = 0; row <past.length; row++){
        for(let col = 0; col<past[row].length; col++){
            alive = 0;
            if(row != 0){
                if(col !=0){
                    if(past[row-1][col-1]){
                        alive++;
                    }
                }
                
                if(col != 7){
                    if(past[row-1][col+1]){
                        alive++;
                    }
                }
                
                if(past[row-1][col]){
                    alive++;
                }
            }
            if(row != 3){
                if(col !=0){
                    if(past[row+1][col-1]){
                        alive++;
                    }
                }
                
                if(col != 7){
                    if(past[row+1][col+1]){
                        alive++;
                    }
                }
                
                if(past[row+1][col]){
                    alive++;
                }
            }
            if( col!=0){
                if(past[row][col-1]){
                    alive++;
                }
            }
            if(col!=7){
                if(past[row][col+1]){
                    alive++;
                }
            }
            

            if(past[row][col]){
                if(alive == 2 || alive == 3){
                    gen[row][col] = true;
                }
                else{
                    gen[row][col] = false;
                }
            }
            else{
                if(alive==3){
                    gen[row][col] = true;
                }
                else{
                    gen[row][col]=false;
                }
            }
        }
    }
    return gen;
}


function iterate(){
    var gens = document.getElementById("ags").value;
    var curArray = GenArray();
    var pastArray = GenArray();
    for (var i = 0; i<gens; i++){
        
        if(i==0){
            curArray = randomArray();
        }
        else{
            curArray = Gen(pastArray);
        }
        showGen(curArray);
        pastArray = curArray;
    }
}