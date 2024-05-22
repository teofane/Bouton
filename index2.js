let nombre = 0;
let mscore = -Infinity;
let total = 0;
let reset = 0;
let randomValue = nouv(Math.random());

function factorale(num) {
    num2 = num;
    for (let i = 1 ; i < num; i++){
        num2 = num2 * (num-i);
    }
    return num2;
}

function proba(n){
    return (factorale(100) / factorale(100-n))/ 100**n ;
}

function nouv(randomValue){
    n = 0;
    while (randomValue <= proba(n)) {
        n ++;
    }
    return n;
}


function jsp(){
    console.log(randomValue)
    if (nombre < randomValue) {
        nombre ++;
        total ++;
        document.getElementById("total").innerText = "Vous avez cliqué "+ total + " fois";
    }
    else {
        score = nombre;
        console.log(score, randomValue)
        if (score > mscore){
            mscore = score;
            document.getElementById("mscore").innerText = "Votre meilleur score est " + mscore + " , Vous aviez " + (proba(mscore).toFixed(6))*100 + " % de chances de l'obtenir";
        }
        nombre = 0;
        reset++ ;
        randomValue = nouv(Math.random())
        document.getElementById("reset").innerText = "Vous avez réinitialisé " + reset + " fois";
    }
    document.getElementById("bouton").innerText = nombre;
}
