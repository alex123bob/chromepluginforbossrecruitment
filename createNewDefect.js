function inject (){
    let saveBtn = document.querySelector('.chr-QuickDetailEntityFooter-saveButton')
    let menu = document.querySelector('.chr-QuickDetailActionsMenu')
    console.log(saveBtn, menu)

    saveBtn.addEventListener('click', function(evt) {
        alert(evt)
    })
    menu.addEventListener('click', function(evt) {
        alert(evt)
    })
}

function observeElement (){
    const targetNode = document.body

    // Options for the observer (which mutations to observe)
    const config = { attributes: true, childList: true, subtree: true }

    // Callback function to execute when mutations are observed
    const callback = function(mutationsList, observer) {
        // Use traditional 'for loops' for IE 11
        for(let mutation of mutationsList) {
            if (mutation.type === 'childList') {
                // console.log('A child node has been added or removed.')
                if (mutation.addedNodes.length > 0 && mutation.addedNodes[0].className === 'chr-QuickDetailActionsMenu') {
                    
                    observer.disconnect()
                    inject()
                    
                }
            }
            else if (mutation.type === 'attributes') {
                // console.log('The ' + mutation.attributeName + ' attribute was modified.')
            }
        }
    }
    const observer = new MutationObserver(callback)

    observer.observe(targetNode, config)
}

function execute() {
    if (document.querySelector('.chr-QuickDetailEntityFooter-saveButton')) {
        inject()
    }
    else {
        observeElement()
    }
}

// chrome.runtime.sendMessage({
//     taskId: 'checkScriptInjection',
//     scriptName: 'createNewDefect'
// }, (injected) => {
//     if (!injected) {
//         execute()
//     }
// })

execute()