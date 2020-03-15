let selectedRow = null
let id = 1;
let stop = 1;
let tLastChe = 0;
let tServ = 0;
let tCheRel = 0;
let tFinAte = 0;
let tLivBan = 0;
let tServOld = 0;
let tCliFil = 0;
let snipper = 0;
let tIniServ = 0;
let tCliBan = 0;

function clientNum(){
    if(stop == 1){
        for (let i = 0; i<20; i++){
            tLastArrive();
            tService();
            tArriveClock();
            finalTime();
            tInitService();
            tClientBank();
            queueNumbers();
            id+=1;
    }
} else return;
 stop++;
}
function tLastArrive(){
    let col2 = Math.round(Math.random()*100);
    if(col2<=35){
        tLastChe = 10;
    } else if((35 < col2) && (col2 <=75)){
        tLastChe = 12;
    } else {
        tLastChe = 14;
    }
    freeTime()
}
function tService(){
    let col4 = Math.round(Math.random()*100);
    if(col4<=30){
        tServ = 9;
    } else if((30 < col4) && (col4 <=50)){
        tServ = 10;
    } else {
        tServ = 11;
    }
    tServOld = tServ;  
}
function tArriveClock(){
    if(tCheRel == 0){
        tCheRel = tLastChe;
    } else {
        let aux; 
        aux = tCheRel;
        tCheRel = aux + tLastChe;
    }
}
function finalTime(){
    tFinAte = tCheRel + tServ; 
}
function freeTime(){
    tServOld = tServ+tCliFil;
    if(tLivBan == 0 ){
        if(snipper == 0){
            tLivBan = tLastChe;
            snipper++;
        } else {
            let aux1;
        aux1 = tLastChe - tServOld;
        if(aux1 > 0) {
            tLivBan = aux1  
        } else {
            tCliFil = Math.abs(aux1)
            tLivBan = 0; 
        }   
        }
    } else {
        let aux1;
        aux1 = tLastChe - tServOld;
        if(aux1 > 0) {
            tLivBan = aux1  
        } else {
            tCliFil = Math.abs(aux1)
            tLivBan = 0; 
        }   
    }    
}

function tInitService(){
    tIniServ = tCheRel + tCliFil;
}
function tClientBank(){
    tCliBan = tCliFil + tServ;
}

function queueNumbers(){
    const tbody = document.querySelector('tbody');

    const newColumn = `
        <tr>
            <td>${id}</td>
            <td>${tLastChe}</td>
            <td>${tCheRel}</td>
            <td>${tServ}</td>
            <td>${tIniServ}</td>
            <td>${tCliFil}</td>
            <td>${tFinAte}</td>
            <td>${tCliBan}</td>
            <td>${tLivBan}</td>
        </tr>
        
    `     
    tbody.insertAdjacentHTML('beforeend', newColumn);  
}

