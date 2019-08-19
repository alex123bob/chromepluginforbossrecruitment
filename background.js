chrome.runtime.onInstalled.addListener(function (){
    chrome.storage.sync.set({
        color: '#3aa757'
    }, function (){
        console.log('The color is green');
    });

    chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [
                new chrome.declarativeContent.PageStateMatcher({
                    pageUrl: { urlMatches: 'wenjuan\.com' },
                })
            ],
            actions: [
                new chrome.declarativeContent.ShowPageAction()
            ]
        }]);
    });

    chrome.webNavigation.onCompleted.addListener(function onCompleted(info) {
        // alert(JSON.stringify(info));
    });
});