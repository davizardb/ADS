let selectedRow = null
let stop = 1;
let cont = 0;
let id = 0;
let U1, U2;
let error = 0;

function clientNum(){
    if(stop == 1){
        for (let i = 0; i<4; i++){
            simulacoes();
            aproxValue();
            queueNumbers();            
    }
} else return;
 stop++;
} 

function simulacoes(){
    if(id == 0){
           id=50;
       } else if(id == 50){
           id+=50;
       } else if(id == 100){
           id+=900;
       } else if(id == 1000){
           id+=999000;
       }
   }
function pointGenerator(){
    U1 = Math.random();
    U2 = Math.random();
    let value, aux, aux1;
    aux = ((2*U1)-1);
    aux1 = ((2*U2)-1);
    value = aux**2 + aux1**2; 
    if(value <= 1){
        return 1;
    } else return 0;
}
function aproxValue(){
    if(id == 50){
            cont = 0;
        for (let i = 0; i<id; i++){
            if(pointGenerator()) cont +=1;
            }
        cont = ((4*cont)/50).toFixed(6);
        error = (cont - Math.PI).toFixed(6); 
        }
    else if(id == 100){
            cont = 0;
        for (let i = 0; i<id; i++){
            if(pointGenerator()) cont +=1;
            }
        cont = ((4*cont)/100).toFixed(6);
        error = (cont - Math.PI).toFixed(6);
        }    
    else if(id == 1000){
            cont = 0;
        for (let i = 0; i<id; i++){
            if(pointGenerator()) cont +=1;
            }
        cont = ((4*cont)/1000).toFixed(6);
        error = (cont - Math.PI).toFixed(6);    
        }    
    else if(id == 1000000){
            cont = 0;
        for (let i = 0; i<id; i++){
            if(pointGenerator()) cont +=1;
    }
        cont = ((4*cont)/1000000).toFixed(6);
        error = (cont - Math.PI).toFixed(6);
}
}


async function queueNumbers(){
    const tbody = document.querySelector('tbody');
   

    const newColumn = `
        <tr>
            <td>${id}</td>
            <td>${cont}</td>
            <td>${error}</td>
        </tr>
        
    `     
    tbody.insertAdjacentHTML('beforeend', newColumn);  
}