var coinFlip;
var choice;
var result;

choice = window.prompt("Select 'Heads' Or 'Tails'");
coinFlip = Math.round(Math.random());
result = coinFlip==0? 'Heads' : 'Tails';
console.log('result:'+result);
switch (result) {
    case 'Heads':
            console.log(choice);
        if(result===choice){
            window.alert('The flip was heads and you chose heads...you win!');
        }
        else{
            window.alert('The flip was heads but you chose tails...you lose!');
        }    
        break;
    case 'Tails':
            console.log(choice);   
            if(result===choice){
                window.alert('The flip was tails and you chose tails...you win!');
            }
            else{
                window.alert('The flip was tails but you chose heads...you lose!');
            }    
        break;
}