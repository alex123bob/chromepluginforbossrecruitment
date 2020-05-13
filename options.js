let page = document.getElementById('buttonDiv');
const kButtonColors = ['#3aa757', '#e8453c', '#f9bb2d', '#4688f1', '#5596e6', '#3d70b2', '#41d6c3', '#42b0e2', '#261e1e', '#b7714b']
function constructOptions(kButtonColors) {
    for (let item of kButtonColors) {
        let button = document.createElement('button')
        button.style.backgroundColor = item;
        button.addEventListener('click', function () {
            chrome.storage.sync.set({ color: item }, function () {
                document.querySelector('.display').innerHTML = `color is ${item}`
            })
        });
        page.appendChild(button)
    }
}
constructOptions(kButtonColors)

document.querySelector('.reset').addEventListener('click', () => {
    chrome.storage.sync.set({ color: '' }, function () {
        document.querySelector('.display').innerHTML = `color is reset`
    })
})