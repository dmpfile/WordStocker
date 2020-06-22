'use strict'

// content_scriptからメッセージ受信
chrome.runtime.onMessage.addListener(
  function(message: string, sender: string){
    if(message.match(/^popup-state-*/)){
      // ローカルストレージ
      localStorage.setItem('state', message);
    } else {
      setStorage(message);
    }
  }
);

// chrome.storageに保存
function setStorage(msg: string) {
  let state = localStorage.getItem("state");
  if(state === 'popup-state-true'){
    chrome.storage.local.get(null, function(res: string[]){
      var obj;
      if(Object.keys(res).length === 0){
        obj = {1:msg}
      } else {
        const keys = Object.keys(res).map(Number);
        let key = Math.max(...keys) + 1;
        obj = {[key]:msg}
      }
      
      chrome.storage.local.set(obj, function(){
        console.log(`Stored:${msg}`);
      });
    }) 
  }
};