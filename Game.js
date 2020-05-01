class time {
    equal = new mathe ;
    constructor(){

    }

   timer(second,placeId){
       
    var countdownTimer = new Date();
    countdownTimer.setUTCSeconds(second);
     var timeInSecond =countdownTimer.getUTCSeconds(); 

     if (timeInSecond > 0) {
        byId(placeId).innerHTML = timeInSecond;
        timeInSecond=timeInSecond-1;
        this.setTimer(timeInSecond,placeId);
    }else{
        byId(placeId).innerHTML = "end";
        gam = null ;
        if (confirm("do you want to play again")) {
            location.reload();
          } else {
            
          }
    }
   } 
   
    setTimer = (time,placeId)=>{
        setTimeout(()=>{
            time = this.timer(time,placeId) ;
        },1000);
    };
          
            
            

}

class game {
    equal = new mathe ;
    squar = new square ;
    colo = new game_color ;
    tim = new time;
    level = this.equal.level() ;

   
    constructor(){
        
        this.tim.setTimer(5,"timer");
    }

   

    sucssesFunction(logic){
        if (logic == true) {        
            this.equal.sucssesCounter = this.equal.sucssesCounter +1 ;
              
            for (let index = 0; index < this.level; index++) {
                byId('tr-'+index).remove();
            }         
            this.squareGenerator();
           this.level= this.equal.level();
        }else{

            this.equal.sucssesCounter = this.equal.sucssesCounter -1 ;
                for (let index = 0; index < this.level; index++) {
                    byId('tr-'+index).remove();
                }         
            this.squareGenerator();
            this.level= this.equal.level();
        }

    }
    squareGenerator(){
        
        this.level= this.equal.level();
        var squareColor = this.colo.randomcolor();
        var truecolor = squareColor+",0.7";
        var randomSquarePosition = randomNumber(this.level);
        var randomtr = randomNumber(this.level);
        var squarCount = this.level*2 ;
        var x = this.squar.x/squarCount+"px";
        var y = this.squar.y/squarCount+"px";
        byId("score").innerHTML=this.equal.sucssesCounter - 10 ;
        for (let index = 0; index < this.level; index++) {
            
            this.squar.creatTr("tr-"+index,"100%",y);
            for (let i = 0; i <this.level ; i++) {
                this.squar.creatTd("tr-"+index,"td-"+index+i,x,y,"rgb("+squareColor+")",'gam.sucssesFunction(false)');
            }
            
        }
        
    this.squar.trueTd(randomSquarePosition,randomtr,"rgb("+truecolor+")");
    // randomCounter = randomCounter+1 ;
    }
}
class mathe{
    sucssesCounter = 10 ;

    level(){
        
        if (this.sucssesCounter <10 ) {
            this.sucssesCounter = 10 ;
        }
        var level = 0 ;
        for (let index = 0; index <= this.sucssesCounter ; index=index+5) {
            level = index ;
        }
        return level/5 ;
    }
    multiple_of_tow(number){
        var tow_multiple;
        for (let index = 1; index <= number; index=index*2) {
            tow_multiple = index ;
        }
        return tow_multiple ;
    }


}
class game_color {
    randomcolor(){
        var r  = randomNumber(255);
        var g  = randomNumber(255);
        var b  = randomNumber(255);
        var rgb = ""+r+","+g+","+b+"";
        return rgb ;
    }
}
class square {

    x = byId('game_table').offsetWidth ;
    y =byId('game_table').offsetWidth  ;
    creatTr(id,x,y){
        var a = document.createElement('TR');
        a.setAttribute('id',id);
        a.style.width = x ;
        a.style.height = y ;
        document.getElementById('game_table').appendChild(a);
 
     }

    creatTd(trId,id,x,y,color,onclick){
        var parent = document.getElementById(trId);
        var a = document.createElement('TD');
        a.setAttribute('id',id);
        a.setAttribute('onclick',onclick);
        a.style.width = x ;
        a.style.height = y ;
        a.style.backgroundColor =color ;

        parent.appendChild(a);
 
     }

     trueTd(tdId,trId , color){
        var tr = byId("tr-"+trId);
        var td = tr.cells[tdId];
        td.style.backgroundColor =color ;
        td.removeAttribute("onclick");
        td.setAttribute('onclick','gam.sucssesFunction(true)');
        
     }
  

}
var randomNumber=(length)=>{
    return Math.floor(Math.random()*length );
}
var byId = (id)=>{
    a =  document.getElementById(id);
     return a ;
 }

var gam = new game ;
$(document).ready(()=>{

    gam.squareGenerator();

    
});