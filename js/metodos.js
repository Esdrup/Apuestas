/*------------------------ IDES ------------------------*/
var b_press=document.getElementById("b-press");
var wl=document.getElementById("wl");
var dinero=document.getElementById("dinero");
var apuesta=document.getElementById("apuesta");
var bok=document.getElementById("bok");
var orat=document.getElementById("oracion");

/*------------------------ Const ------------------------*/

var global_score=2500;
var score=0;
var k=false;
var kk=true;
var a=0;
var cont=1;
var orations=[];
var gp=[];
var money=[];
var nlucky=[];

/*------------------------ radom ------------------------*/

function g_random(min,max){
    min= Math.ceil(min);
    max=Math.floor(max);
    
    return Math.floor(Math.random()*(1+max-min)+min);
}

/*------------------------ FUNCTION ------------------------*/
function azar1(){
    a=g_random(5,15);
    nlucky[cont-1]=a;
    if(a==10){
        wl.innerHTML="YOU WIN";
        wl.style.setProperty('color','darkgreen');
        gp[cont-1]="Ganaste";
        score=(apuesta.value)*3;
        money[cont-1]=score;
        global_score=global_score+score;
    }
    else{
        wl.innerHTML="YOU LOSE";
        wl.style.setProperty('color','darkred');
        gp[cont-1]="Perdiste";
        money[cont-1]=apuesta.value;
        global_score=global_score-apuesta.value;
    }
}
function azar2(){
    a=g_random(1,20);
    nlucky[cont-1]=a;
    if(a==10){
        wl.innerHTML="YOU WIN";
        wl.style.setProperty('color','darkgreen');
        gp[cont-1]="Ganaste";
        score=(apuesta.value)*50;
        money[cont-1]=score;
        global_score=global_score+score;
    }
    else{
        wl.innerHTML="YOU LOSE";
        wl.style.setProperty('color','darkred');
        gp[cont-1]="Perdiste";
        money[cont-1]=Number(global_score*0.4)+Number(apuesta.value);
        global_score=global_score*0.6-apuesta.value;
    }
}
function keyOK(){
    if(kk){
        k=true;
        bok.style.setProperty('box-shadow','0 0 15px');
        kk=false
    }
    else{
        k=false;
        kk=true;
        bok.style.setProperty('box-shadow','0 0 0');
    }
}
function oration(){
    for(var i=0;i<cont;i++){

        orations[i]=`<p class="oracion">Tu numero de suerte es <strong class="lucky">`+nlucky[i]+`</strong>,
        <strong class="`+gp[i]+`">`+gp[i]+`</strong> <strong class="m">`+money[i]+`</strong>
        monedas</p>`;
    
    }
    orat.innerHTML=orations.reverse();
}

function game(){
    if(apuesta.value<=global_score&&apuesta.value!=0&&global_score!=0){
        if(k&&((Number(global_score*0.4)+Number(apuesta.value))<=global_score)&&global_score!=0&&apuesta.value!=0){
        azar2();
        }
        else{
        azar1();
        }
        k=false;
        kk=true;
        bok.style.setProperty('box-shadow','0 0 0');
        dinero.innerHTML=String(global_score);
        oration();
        cont++;

        console.log("numero de suerte: "+a);
        console.log("valor de apuesta: "+apuesta.value);
        console.log("valor de cantidad ganada "+score)
        console.log("orations: "+orations);
        console.log("------------------------------------")   
    }
    else{
        wl.innerHTML="Insuficiente";
        wl.style.setProperty('color','black')
    }
}

b_press.addEventListener('click',game);