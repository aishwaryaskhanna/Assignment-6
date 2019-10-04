for (let i = 1; i <= 100; i++) {
    if(i%3==0){
        if(i%5==0){
            document.write('Marco! Polo!</br>');    
            continue;
        }
        document.write('Marco!</br>');   
    }
    else if(i%5==0){
        document.write('Polo!</br>');   
    }else{
        document.write(i+"</br>");
    }
}