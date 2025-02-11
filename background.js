chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete') {
    const url = new URL(tab.url);
    const domain = url.hostname;
    if (isPunycode(domain)) {
      // send to content
      chrome.tabs.sendMessage(tabId, { action: 'showAlert' });
    }
  }
});

function isPunycode(domain) {
  // check if domain have punycode ("xn--")
  return /xn--/.test(domain);
}
