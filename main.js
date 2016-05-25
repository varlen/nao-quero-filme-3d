

chrome.runtime.onInstalled.addListener(function() {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [
        // When a page contains a <video> tag...
        new chrome.declarativeContent.PageStateMatcher({
          // pageUrl: {
          //   hostEquals: 'www.ingresso.com',
          //   schemes: ['https','http']
          // },
          css: [".tipo-sessao"]
        })
      ],
      // ... show the page action.
      actions: [new chrome.declarativeContent.ShowPageAction() ]
    }]);
  });
});

chrome.pageAction.onClicked.addListener( function () {
  chrome.tabs.executeScript({
    file: "remove3d.js"
  });
});