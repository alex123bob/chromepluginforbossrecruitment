function inject (){
    let saveBtn = document.querySelector('.chr-QuickDetailEntityFooter-saveButton')
    let menu = document.querySelector('.chr-QuickDetailActionsMenu')
    const pulldownDefaultVal = '-- No Entry --'

    console.log(saveBtn, menu)

    saveBtn.addEventListener('click', function(evt) {
        let foundInBuild = document.querySelector('.chr-QuickDetailAttributeEditorWrapper--foundInBuild .chr-QuickDetailAttributeEditorWrapper-editorContainer .smb-TextInput-renderedText')
        let ucProduct = document.querySelector('.chr-QuickDetailAttributeEditorWrapper--cUCProduct .chr-QuickDetailAttributeEditorWrapper-editorContainer  .smb-Select-text')
        let upcModule = document.querySelector('.chr-QuickDetailAttributeEditorWrapper--cUPCComponent .chr-QuickDetailAttributeEditorWrapper-editorContainer  .smb-Select-text')
        if (!foundInBuild.innerText || ucProduct.innerText === pulldownDefaultVal || upcModule.innerText === pulldownDefaultVal) {
            alert('field not completed')
            evt.stopPropagation()
        }
    })
    menu.addEventListener('click', function(evt) {
        alert(evt)
        // evt.preventDefault()
        evt.stopPropagation()
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