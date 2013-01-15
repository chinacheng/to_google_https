var httpRequestObserver =
{
  observe: function(subject, topic, data) 
  {
    if (/google/.test(topic)) {
	  alert(topic)
      var httpChannel = subject.QueryInterface(Components.interfaces.nsIHttpChannel);
      httpChannel.setRequestHeader("X-Hello", "World", false);
    }
  }
};

var observerService = Components.classes["@mozilla.org/observer-service;1"]
                                .getService(Components.interfaces.nsIObserverService);
observerService.addObserver(httpRequestObserver, window.location.href, false);
