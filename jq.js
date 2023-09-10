$("#alert").click(function(){
    alert("button clicked!!")
    $("#container").removeClass("yellow")
    $("#container").addClass("red")
})

$("#btn").click(function(){
    //alert($("#container").text())
    //$("#container").html("<h2>title</h2>")
    //$("#container").remove()
    //$("#container").empty()
    $("#container").append("<li>content</li>")

    $("#container").removeClass("red")
    $("#container").addClass("yellow")
})

var todos = {}
$("#add_button").click(function(){
    var text = $("#input_box").val()
    todos[text] = false;
    $("#input_box").val("")
    console.log(todos)
    $(".content ul").append(liTemplate(text))
})

function inputTemplate(text){
    var inputTag = $('<input type="checkbox" id="check_box">')
    inputTag.data("value", text)
    return inputTag
}

function buttonTemplate(text){
    var buttonTag = $('<button id="del_button">X</button>')
    buttonTag.data("value", text)
    return buttonTag
}

function liTemplate(text){
    var li = $("<li></li>")
    li.attr("value", text)
    li.append(inputTemplate(text))
    li.append(text)
    li.append(buttonTemplate(text))

    li.click(function(event){
        var el = $(event.target)
        console.log(el.data("value"))

        if (el.is("button")) {
            delete todos[text]
            $(`li[value='${text}']`).remove()
            console.log(todos)
        } else if (el.is("input[type='checkbox']")) {
            var ischecked = el.is(":checked")
            if (ischecked){
                $(`li[value='${text}']`).addClass("checked")
                todos[text] = true
            } else {
                $(`li[value='${text}']`).removeClass("checked")
                todos[text] = false
            }
        }
    })
    return li
}