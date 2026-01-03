const holidays =["正月","成人の日","建国記念日","天皇誕生日","春分の日","昭和の日","憲法記念日","みどりの日","こどもの日","海の日","山の日","敬老の日","秋分の日","スポーツの日","文化の日","勤労感謝の日"]

//変数holidaysの祝日を順番に最後まで出力
for (let i = 1; i <= (holidays.length); i++) {
//変数holidaysの祝日の最初の日を0から出力
  console.log(holidays[i-1]); 
}

//変数holidaysの祝日を1とする
let i = 1; 
//変数holidaysの祝日を１～１６番目まで出力
while ( i <= (holidays.length)) {  
//変数holidaysの祝日は、0から始まるので１を引いて１～１５番目まで出力 
    console.log(holidays[i-1]); i++; 
}