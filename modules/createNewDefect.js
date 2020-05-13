function setValidity (field, isValid){
    if (isValid) {
        field.classList.remove('is-invalid')
    }
    else {
        field.classList.add('is-invalid')
        field.scrollIntoView()
    }
}

function inject (){
    let saveBtn = document.querySelector('.chr-QuickDetailEntityFooter-saveButton')
    let menu = document.querySelector('.chr-QuickDetailActionsMenu')
    const pulldownDefaultVal = '-- No Entry --'

    console.log(saveBtn, menu)

    saveBtn.addEventListener('click', function(evt) {
        let foundInBuildWrapper = document.querySelector('.chr-QuickDetailAttributeEditorWrapper--foundInBuild')
        let foundInBuild = foundInBuildWrapper.querySelector('.chr-QuickDetailAttributeEditorWrapper-editorContainer .smb-TextInput-renderedText')
        let ucProductWrapper = document.querySelector('.chr-QuickDetailAttributeEditorWrapper--cUCProduct')
        let ucProduct = ucProductWrapper.querySelector('.chr-QuickDetailAttributeEditorWrapper-editorContainer  .smb-Select-text')
        let upcModuleWrapper = document.querySelector('.chr-QuickDetailAttributeEditorWrapper--cUPCComponent')
        let upcModule = upcModuleWrapper.querySelector('.chr-QuickDetailAttributeEditorWrapper-editorContainer  .smb-Select-text')
        if (!foundInBuild.innerText) {
            setValidity(foundInBuildWrapper, false)
            evt.stopPropagation()
            $.notify('Found in build is not filled', 'error')
        }
        else if (ucProduct.innerText === pulldownDefaultVal) {
            setValidity(foundInBuildWrapper, true)
            setValidity(ucProductWrapper, false)
            evt.stopPropagation()
            $.notify('UC Product is not filled', 'error')
        }
        else if (upcModule.innerText === pulldownDefaultVal) {
            setValidity(foundInBuildWrapper, true)
            setValidity(ucProductWrapper, true)
            setValidity(upcModuleWrapper, false)
            evt.stopPropagation()
            $.notify('UPC Module is not filled', 'error')
        }
    })
    menu.addEventListener('click', function(evt) {
        $.notify("Access granted", "success");
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