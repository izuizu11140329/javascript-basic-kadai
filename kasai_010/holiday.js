const holidays = ["正月","成人の日","建国記念日","天皇誕生日","春分の日","昭和の日","憲法記念日","みどりの日","こどもの日","海の日","山の日","敬老の日","秋分の日","スポーツの日","文化の日","勤労感謝の日"]
holidays = userName.length;  //休日の数を出力しないで出す方法？数は16。インデックスは15
// for文の場合
for (let i = 0; i <= userName.length; i += 1) {
console.log(i);
}

// while文の場合 休日の数が16個まで同じ処理をする
let i = 0; 
while (i !== userName.length) {
console.log(i)
i++;
}