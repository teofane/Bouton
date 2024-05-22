let nombre = 0;
mscore = -Infinity;
total = 0;
reset = 0;
let randomValue = [];
let proba = [];
function factorale(num) {
    num2 = num;
    for (let i = 1 ; i < num; i++){
        num2 = num2 * (num-i);
    }
    return num2;
}
function jsp() {  
    proba[nombre] = (factorale(100) / factorale(100-nombre))/ 100**nombre ;
    randomValue[nombre] = Math.random()
    if (randomValue[nombre] < proba[nombre]) {
        nombre ++ ;
        total ++ ;
        document.getElementById("total").innerText = "Vous avez cliqué "+ total + " fois";
    }
    else {
        score = nombre;
        if (score > mscore){
            console.log(score,randomValue[nombre],proba[nombre],reset+1);
            mscore = score;
            document.getElementById("mscore").innerText = "Votre meilleur score est " + mscore;
        }
        nombre = 0;
        reset++ ;
        document.getElementById("reset").innerText = "Vous avez réinitialisé " + reset + " fois";
    }
    document.getElementById("bouton").innerText = nombre;
}