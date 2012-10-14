//chrome.tabs.onCreated.addListener(function(tab) {
//  alert('this is a event that will fired when a tab is created');
//});


// This is a event that will be fired when the tab is updated
//chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
//  if(changeInfo.status == 'loading'){
//    var url = document.createElement('a');
//    url.href = (tab.url);
//    if(url.protocol == 'http:' && /google/.test(url.hostname)){
//      new_url = url.href.replace(/^http/,"https");
//      chrome.tabs.update(tabId, {url:new_url});
//    }else{
//      return;
//    };  
//  }
//});

// The onBeforeRequest event will be better, filter and change the matched request url
chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    return{redirectUrl : details.url.replace(/^http/,"https")};
  },
  {
    urls :[
            "http://www.google.com.hk/*",
            "http://www.google.com/*"
          ]
  },
  ["blocking"]
);

