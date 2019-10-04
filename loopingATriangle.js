var pattern='';
for (let i = 1; i < 8; i++) {
   var j = i;
   while(j!=0) {
       pattern += "#";
       j--;
   }
   pattern += "</br>";
   document.write(pattern); 
   pattern='';
}