function openOption() {
    chrome.tabs.create({ url: "options.html" });
}

$('.openOption').click(evt => {
    openOption()
})