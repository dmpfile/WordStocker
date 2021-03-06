'use strict'

// 選択範囲を取得
function extractWord(){
  // 正規表現・括弧も取り除く・一個しか反映されない
  let word = window.getSelection()?.toString().replace(/,/g, "").replace(/\./g, "").toLowerCase();
  if(word != ""){
    const words = word?.trim().split(' ');
    if(words != undefined){
      reserve(words);
    }
  };
}

function reserve(arr: string[]) {
  // パラメータが無くなっていれば終了
  if(arr.length==0) {
    return
  };

  if(arr[0] != undefined || arr[0] != ""){
    // 配列の先頭を使う
    let param = arr[0];

    // メッセージ送信
    chrome.runtime.sendMessage(param)
  }

  // 処理済みのパラメータ削除
  arr.shift();

  // 次の回の実行予約
  setTimeout(function(){ reserve(arr);}, 1000);
}

document.onclick = extractWord;
