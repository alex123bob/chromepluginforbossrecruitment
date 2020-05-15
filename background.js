let runtimeStorage = {
    
}

chrome.runtime.onInstalled.addListener(function (){

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
            file: 'libs/jquery-3.5.1.min.js',
            runAt: 'document_start',
            allFrames: false
        })
        chrome.tabs.executeScript(tabId, {
            file: 'libs/notify.min.js',
            runAt: 'document_end',
            allFrames: false
        })
        chrome.tabs.executeScript(tabId, {
            file: 'modules/createNewDefect.js',
            runAt: 'document_end',
            allFrames: false
        })
        if (!runtimeStorage[tabId]) {
            runtimeStorage[tabId] = {}
        }
        runtimeStorage[tabId]['createNewDefect'] = true
    }
}

function customizeUI (tabId){
    if (!runtimeStorage[tabId] || !runtimeStorage[tabId]['customizeUI']) {
        chrome.tabs.executeScript(tabId, {
            file: "modules/customizeUI.js",
            runAt: 'document_end',
            allFrames: false
        })
        if (!runtimeStorage[tabId]) {
            runtimeStorage[tabId] = {}
        }
        runtimeStorage[tabId]['customizeUI'] = true
    }
}

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'loading' || !!changeInfo.url) {
        runtimeStorage[tabId] = {}
    }

    if (changeInfo.status === 'complete') {
        if (/rally1\.rallydev\.com/.test(tab.url)) {
            customizeUI(tabId)
        }
    }

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