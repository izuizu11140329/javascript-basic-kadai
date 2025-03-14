//btnというidを持つHTML要素を取得して、定数に代入する（クリックする場所,bmeiは宣言した定数名）
const bmei = document. getElementById("btn");

// textというidを持つHTML要素を取得し、定数に代入する（元から表示されていた場所、textmeiは宣言した定数名）
const textmei = document.getElementById('text');

//HTML要素がクリックされたときにイベント処理を実行する
bmei.addEventListener('click',() => {


// TODO: appendChild の場合、HTML要素を追加することになってしまう。

//li要素を新しく追加する(clildListは新しいli要素の定数名)
const childList = document.createElement('li');
//作成したli要素に「ボタンをクリックしました」というテキストを追加する
childList.textContent = 'ボタンをクリックしました';
// 作成したli要素をul要素の子要素として末尾に追加する
textmei.appendChild(childList);

 // id="text"の文章を書き換えるには、textContent を使う。

 text.textContent    = "ボタンをクリックしました";

});