let colorInversionEnabled = false;

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('toggleButton').addEventListener('click', function() {
    colorInversionEnabled = !colorInversionEnabled;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      if (colorInversionEnabled) {
        chrome.scripting.insertCSS({
          target: { tabId: tabs[0].id },
          files: ["invert.css"]
        });
        chrome.scripting.executeScript({
          target: { tabId: tabs[0].id },
          function: function() {
            document.body.classList.add('dark-mode');
          }
        });
      } else {
        chrome.scripting.executeScript({
          target: { tabId: tabs[0].id },
          function: function() {
            document.body.classList.remove('dark-mode');
          }
        });
      }
    });
  });
});