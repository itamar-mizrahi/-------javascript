//create the rhombus pattern via asterisks

 (function rhombus (size){
    asterisk="",space=""
    for (j=0;j<size-1;j++){
        space=space+" "
    }
    for(i=0;i<size;i++){
        asterisk=asterisk +"*";
        console.log(space+asterisk+asterisk);
        space=space.slice(0,space.length-1);
        
    }
    for(i=0;i<size;i++){
        space=space+" "
        asterisk=asterisk.slice(0,asterisk.length-1)
        console.log(space+asterisk+asterisk);   
    }
    
})(10);


// rhombus(10);
