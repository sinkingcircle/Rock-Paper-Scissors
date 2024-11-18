console.log("script is running");

let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0, 
    ties: 0
};

window.onload = function(){
        document.querySelector('.dubs').innerHTML = `Wins: ${score.wins},Loses: ${score.losses},Ties: ${score.ties},`;
        if (localStorage.getItem('display-under-images') == 'Score Has Been Reset'){
            document.querySelector('.Result').innerHTML = `Score Has Been Reset`;

        }
        else{
           document.querySelector('.Result').innerHTML ='You' +' '+ localStorage.getItem('display-under-images');
        }

        
        

    }

    



    function playgame(playermove){
        const computermove = pickcomputermove();
        let result = 0;

        if(playermove == 'rock'){ 
            if(computermove == 'rock'){
                
                result = 'tie';
            }
            if(computermove == 'paper'){
               
                result = 'lose';
            }
            if(computermove == 'scissors'){
                
                result = 'win';
            }
        }
        else if(playermove == 'paper'){
            if(computermove == 'rock'){
               
                result = 'win';

            }
            if(computermove == 'paper'){
               
                result = 'tie';

            }
            if(computermove == 'scissors'){
                
                result = 'lose';

            }
        }
        else if(playermove == 'scissors'){
            if(computermove == 'rock'){
                
                result = 'lose';

            }
            if(computermove == 'paper'){
                
                result = 'win';
            }
            if(computermove == 'scissors'){
                
                result = 'tie';

            }
        }


        if (result === 'win')
        {
            score.wins += 1;
        }
        else if(result === "lose"){
            score.losses+= 1;
        }
        else if(result === 'tie'){
            score.ties+=1;

        }

        localStorage.setItem('score',JSON.stringify(score));


    localStorage.setItem('display-under-images',`${result}`);



    document.querySelector('.Result').innerHTML = `You ${result}ed`;
    document.querySelector('.Moves').innerHTML =   `you <img src="${playermove}-emoji.png " class = "rock"> 
    <img src="${computermove}-emoji.png " class = "rock"> Computer`;
    document.querySelector('.dubs').innerHTML = `Wins: ${score.wins},Loses: ${score.losses},Ties: ${score.ties},`;


    }

    function reset(){

        score.wins = 0;
        score.losses = 0;
        score.ties = 0;
        localStorage.removeItem('score');
        let re = localStorage.setItem('display-under-images','Score Has Been Reset')
    
        document.querySelector('.dubs').innerHTML = `Wins: ${score.wins},Loses: ${score.losses},Ties: ${score.ties},`;
        document.querySelector('.Result').innerHTML = `Score Has Been Reset`;

    }


    function pickcomputermove(){

        let randomn = Math.random();
        let computermove;

        if(randomn >0 && randomn<1/3){
            computermove = 'rock'
        }
        else if(randomn > 1/3 && randomn < 2/3){
            computermove = 'paper'
        }
        else if(randomn > 2/3){
            computermove = 'scissors'
        }
    console.log(computermove);
    return computermove;
    }
