let changeColor = document.querySelector('#changeColor');
chrome.storage.sync.get('color', function (data) {
    changeColor.style.background = data.color;
    changeColor.setAttribute('value', data.color);
});

changeColor.onclick = function (element) {
    let color = element.target.value;
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.executeScript(
            tabs[0].id,
            { code: 'document.body.style.backgroundColor = "' + color + '";' });
    });
};

let candidateList = document.querySelector('.candidateList');
candidateList.onclick = function (el){
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function (tabs){
        chrome.tabs.executeScript(
            tabs[0].id,
            {
                file: 'inject.js'
            }
        );
    })
}