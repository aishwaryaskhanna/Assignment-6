var coinFlip;
var result;
for (var i = 0; i < 10; i++) {
    coinFlip = Math.round(Math.random());
    result = coinFlip==0? 'Heads' : 'Tails';
    if(result=='Heads'){
        document.write("Heads");
    }else{
        document.write("Tails");
    }
}