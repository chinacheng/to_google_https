//chrome.tabs.onCreated.addListener(function(tab) {
//  alert(1);
//});
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if(changeInfo.status == 'loading'){
    var url = document.createElement('a');
    url.href = (tab.url);
    if(url.protocol == 'http:' && /google/.test(url.hostname)){
      new_url = url.href.replace(/^http/,"https");
      chrome.tabs.update(tabId, {url:new_url});
    }else{
      return;
    };  
  }
});