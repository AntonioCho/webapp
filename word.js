var dict = $('ul')
var title = $('h2')
var ptag = $('p')

$.getJSON('word.json')
    .done(function(data) {
        for (let word of data) {
            var li = $('<li></li>')
            li.text(word.title)
            li.data('word', word)
            li.click(function(event) {
                var el = $(event.target)
                var word = el.data('word')
                console.log(word.title)
                console.log(word.description)
                title.text(word.title)
                ptag.text(word.description)
            })
            dict.append(li)
        }
    })