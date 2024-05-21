chrome.storage.sync.get('colorInversionEnabled', function(data) {
    if (data.colorInversionEnabled) {
      let link = document.createElement('link');
      link.href = chrome.runtime.getURL('invert.css');
      link.type = 'text/css';
      link.rel = 'stylesheet';
      document.head.appendChild(link);
    }
  });