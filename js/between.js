var x1, y1, x2, y2, sum1, sum2, result;
    x1 = parseInt(prompt('Enter number X1',' '),10);
    y1 = parseInt(prompt('Enter number Y1',' '),10);
    x2 = 10;
    y2 = 20;
    sum1 = x1 + x2;
    sum2 = y1 + y2;
     sum1 >= sum2 ? result = sum1 - sum2 : result = sum2 - sum1;
  document.write('The distance between A(X1,X2) and B(Y1,Y2) is '+ result +'<br>');
