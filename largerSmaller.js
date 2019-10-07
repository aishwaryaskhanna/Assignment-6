number1= window.prompt("Enter first number!");
number2= window.prompt("Enter second number!");
if(number1 == number2){
    document.write("Both numbers are equal : "+number1+","+number2);    
}else{
document.write(number1 > number2 ? number1 : number2);
}