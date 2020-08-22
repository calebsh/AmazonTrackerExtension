var iCount = 1;
var nameArray = [];
var priceAddedArray = [];
var priceCurrentArray = [];
var favoriteArray = [];

nameArray[0]='placeholder';

chrome.storage.local.set({'count': iCount}, function(){
})

chrome.storage.local.set({'names': nameArray}, function(){
})

chrome.storage.local.set({'pricesAdded': priceAddedArray} , function(){
})

chrome.storage.local.set({'pricesCurrent': priceCurrentArray} , function(){
})

chrome.storage.local.set({'favorites': favoriteArray} , function(){
})

chrome.runtime.onInstalled.addListener(function () {
  chrome.storage.sync.set({ color: '#3aa757' }, function () {
    console.log("Caleb is fat");
  });
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: { hostEquals: 'developer.chrome.com' },
      })
      ],
      actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });
});