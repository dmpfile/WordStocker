import "./style.css";

// リスト表示
function fetchStorage(){
  chrome.storage.local.get(null, function(res: string){
    const ul = document.getElementById('list');
    if(ul){
      ul.innerHTML = "";
    }

    if(Object.keys(res).length === 0){
      const li = document.createElement('li');
      li.textContent = "保存されていません";
      ul?.appendChild(li);
    } else {
      const words = Object.values(res).toString().split(",");
      const keys = Object.keys(res);
      for(let i=0; i < words.length; i++){
        const li = document.createElement('li');
        li.textContent = words[i];
        li.id = keys[i];
        ul?.appendChild(li);
      }
    }
  })
};

// リスト全件削除
function clearStorage(){
  let ret = confirm('全件削除します。よろしいでしょうか？');
  if(ret){
    chrome.storage.local.clear();
    fetchStorage();
  }
}

// 整形・出力
function fmtDocument(){
  chrome.storage.local.get(null, function(res: string){
    if(Object.keys(res).length === 0){
      alert('出力できる単語が登録されていません。')
    } else {
      const link = "https://translate.google.co.jp/?hl=ja#view=home&op=translate&sl=auto&tl=ja&text="
      const words = Object.values(res).toString().split(',').map((item)=>(`${item},${link}${item}`).split(','));
      exportCSV(words);
    }
  });
};

// CSV出力
function exportCSV(records: string[][]){
  let data = records.join('\r\n');
  let bom  = new Uint8Array([0xEF, 0xBB, 0xBF]);
  let blob = new Blob([bom, data], {type: 'text/csv'});
  let url = (window.URL || window.webkitURL).createObjectURL(blob);
  let link = document.createElement('a');
  let date = exportDate();
  link.download = `Stocker_${date}.csv`;
  link.href = url;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function exportDate(){
  let now = new Date();
  let year = now.getFullYear();
  let month = now.getMonth();
  let date = now.getUTCDate();
  let hour = now.getUTCHours() + 9;
  let sec = now.getUTCSeconds();
  let min = now.getUTCMinutes();
  return `${year}${month}${date}_${hour}${min}${sec}`;  
}

const display = document.getElementById('display');
display?.addEventListener('click', fetchStorage);

const clear = document.getElementById('clear');
clear?.addEventListener('click', clearStorage);

const output = document.getElementById('output');
output?.addEventListener('click', fmtDocument);

// background.js側へトグル状態送信
// 同時にpopup側のローカルストレージに保存(ローカルストレージは各ドキュメントに依存するため)
const toggle = document.getElementById('toggle');
toggle?.addEventListener('click', function(event){
  let el = event.target as HTMLInputElement;
  if(el.checked){
    chrome.runtime.sendMessage('popup-state-true');
    localStorage.setItem('state', 'popup-state-true');
  } else {
    chrome.runtime.sendMessage('popup-state-false');
    localStorage.setItem('state', 'popup-state-false');
  };
})

const ul = document.getElementById('list');
// クリックでクリップボードに格納
ul?.addEventListener('click', function(event){
  let el = event.target as HTMLInputElement;
  let text = el.textContent;
  if(text != null){
    navigator.clipboard.writeText(text);
  }
});

// ダブルクリックでchrome.storageから削除
ul?.addEventListener('dblclick', function(event){
  let el = event.target as HTMLInputElement;
  let id = el.id;
  chrome.storage.local.remove(id);
  fetchStorage();
})

window.onload = function(){
  // ローカルストレージを見てトグルの状態を指定する
  let state = localStorage.getItem("state");
  if(state === undefined){
    ;
  } else if (state === 'popup-state-true'){
    let el = toggle as HTMLInputElement;
    el.checked = true;
  } else {
    let el = toggle as HTMLInputElement;
    el.checked = false;
  }
  fetchStorage();
};