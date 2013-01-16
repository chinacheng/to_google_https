var TOPIC_MODIFY_REQUEST = "http-on-modify-request";
//var TOPIC_MODIFY_REQUEST = "http-on-opening-request";
var RE_URL_TO_MODIFY = /^http:\/\/www.google.com*/;
// 定义观察者
var httpRequestObserver =
{
  observe : function(aSubject, aTopic, aData) {
  if (TOPIC_MODIFY_REQUEST == aTopic) {
    let url;
	
    var httpChannel = aSubject.QueryInterface(Components.interfaces.nsIHttpChannel);
    url = aSubject.URI.spec;
 
    if (RE_URL_TO_MODIFY.test(url)) { // RE_URL_TO_MODIFY is a regular expression.
	  url = url.replace(/^http/,"https");
	  httpChannel.setRequestHeader('Location', url, false);
	  
	  //var ios = Components.classes["@mozilla.org/network/io-service;1"].getService(Components.interfaces.nsIIOService);
	  //var uri = ios.newURI(url, null, null);
	  //var ch = ios.newChannelFromURI(uri);
	  
	  
	  //var ios = Components.classes["@mozilla.org/network/io-service;1"]
      //              .getService(Components.interfaces.nsIIOService);
	  //var ch = ios.newChannel(url, null, null);
	  
	  //var channel = ioService.newChannelFromURI(uri);
	  //var listener = new StreamListener(callbackFunc);
	  //channel.notificationCallbacks = listener;
	  //channel.asyncOpen(listener, null);
	  
	  //aSubject.setRequestHeader("Referer", url, false);
	  //window.location.href = url;
	  //aSubject.setRequestHeader('Location', url, true);
    } 
	//else if (RE_URL_TO_CANCEL.test(url)) { // RE_URL_TO_CANCEL is a regular expression.
    //  aSubject.cancel(Components.results.NS_BINDING_ABORTED);
    //}
   }
  }
};

// 观察者事件绑定
//var observerService = Components.classes["@mozilla.org/observer-service;1"]
//                               .getService(Components.interfaces.nsIObserverService);
//observerService.addObserver(httpRequestObserver, TOPIC_MODIFY_REQUEST, false);


