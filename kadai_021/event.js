//btnというidを持つHTML要素を取得して、定数に代入する（クリックする場所,bmeiは宣言した定数名）
const bmei = document.getElementById('btn');

// textというidを持つHTML要素を取得し、定数に代入する（元から表示されていた場所、textmeiは宣言した定数名）
const textmei = document.getElementById('text');



//HTML要素がクリックされたときにイベント処理を実行する
bmei.addEventListener('click',() => {

setTimeout(()=> {      // イベント処理の中で非同期処理の記述する！


 // id="text"の文章を書き換えるには、textContent を使う。
 textmei.textContent    = "ボタンをクリックしました";

   },2000);  //これで2秒後に実行になる！

}); 

