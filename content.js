
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'showAlert') {
    alert('Warning: the site you are visiting has a domain in Punycode. It may be a phishing attempt!');
  }
});
