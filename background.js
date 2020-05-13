let runtimeStorage = {
    
}

chrome.runtime.onInstalled.addListener(function (){
    chrome.storage.sync.set({
        color: '#3aa757'
    }, function (){
        console.log('The color is green')
    })

    chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [
                new chrome.declarativeContent.PageStateMatcher({
                    pageUrl: { 
                        hostEquals: 'rally1.rallydev.com'
                    },
                })
            ],
            actions: [
                new chrome.declarativeContent.ShowPageAction()
            ]
        }])
    })

    chrome.webNavigation.onCompleted.addListener(function onCompleted(info) {
        // alert(JSON.stringify(info))
    })
})

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    let tabId = sender.tab.id
    let scriptName
    let result
    let injectStatus
    switch (request.taskId) {
        case 'checkScriptInjection':
            scriptName = request.scriptName
            result = runtimeStorage[tabId] && runtimeStorage[tabId][scriptName] ? runtimeStorage[tabId][scriptName] : false
            break
        
        case 'setInjectionStatus':
            scriptName = request.scriptName
            injectStatus = request.injectStatus
            if (!runtimeStorage[tabId]) {
                runtimeStorage[tabId] = {}
            }
            result = runtimeStorage[tabId][scriptName] = injectStatus
            break
    
        default:
            break
    }
    sendResponse(result)
    return result
})

function createNewDefect(tabId) {
    if (!runtimeStorage[tabId] || !runtimeStorage[tabId]['createNewDefect']) {
        chrome.tabs.executeScript(tabId, {
            file: 'createNewDefect.js',
            runAt: 'document_end',
            allFrames: false
        })
        if (!runtimeStorage[tabId]) {
            runtimeStorage[tabId] = {}
        }
        runtimeStorage[tabId]['createNewDefect'] = true
    }
}

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (/rally1\.rallydev\.com.*?defect\/new/.test(tab.url)) {
        createNewDefect(tabId)
    }
})

chrome.tabs.onActivated.addListener(activeInfo => {
    const tabId = activeInfo.tabId
    chrome.tabs.get(tabId, (tab) => {
        if (/rally1\.rallydev\.com.*?defect\/new/.test(tab.url)) {
            createNewDefect(tabId)
        }
    })
})