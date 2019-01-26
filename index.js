$(function() {
    $('#js-shopping-list-form').submit( event => {
        event.preventDefault()

        let userInput = $('#shopping-list-entry').val()

        let item = $('.shopping-list').append(
            $( `
                <li>
                    <span class= "shopping-item">${userInput}</span>
                    <div class= "shopping-item-controls">
                        <button class= "shopping-item-toggle">
                            <span class= "button-label">check</span>
                        </button>
                    </div>
                </li>
            `))
        
    })
})

function deleteItem() {
    $('ul').on('click', '.shopping-item-delete', funcion(event) {
        $(this).parents('li').remove()
    })
}

$(deleteItem)

function checkItem() {
    $('ul').on('click', '.shopping-item-toggle', function(event) {
        $(this).closest('li').find($('.shopping-item')).toggleClass('shopping-item_shecked')
    })
}

$(checkItem)