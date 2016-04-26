var randNumber,ask;
 randNumber = Math.floor(Math.random()*9.999);

 for(var i = 1; true; i++){
   ask = parseInt(prompt('Enter a number from 0 to 10','1'),10);
   if(ask === randNumber){
     document.write('<b>You\'re winner!!!This number is: </b>' + ask);
     break;
   }else if(ask > randNumber){
     alert('The number is higher try again');
   }
   else if(ask < randNumber){
     alert('The number is lower try again');
   }
 }
