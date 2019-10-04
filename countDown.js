count = window.prompt("Enter the number to begin count down from!");
count = parseInt(count,10);
while(count>=0){
    document.write(count+"</br>");
    count--;
}