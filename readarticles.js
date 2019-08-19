(function() {
    let articleTitleNode = document.querySelector('.box_shijiuda').parentNode.parentNode
    let articleListCt = articleTitleNode.nextElementSibling
    let articles = Array.prototype.slice.call(articleListCt.querySelectorAll('.word-item'))
    articles.forEach((article, index) => {
        index < 6 && article.click()
    })
})();