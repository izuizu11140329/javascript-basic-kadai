let num =15;  //変数の宣言と代入

if(num % 3 === 0 && num % 5 === 0){
    console.log('3と5の倍数です');
}
else if(num % 3 === 0){
     console.log('3の倍数です');
}
else if(num % 5 === 0){
    console.log('5の倍数です');
}
else{              //それ以外は変数numの値
   console.log(num);
}
