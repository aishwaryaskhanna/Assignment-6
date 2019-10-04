var coinFlip;
var result;
do {
    coinFlip = Math.round(Math.random());
    result = coinFlip==0? 'Heads' : 'Tails';
    if(result=='Heads'){
        document.write("Heads");
    }else{
        document.write("Tails");
    }
} while (result!='Tails');
   