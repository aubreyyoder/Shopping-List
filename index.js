(function($, window, document) {
    // The $ is now locally scoped

    // Check button functionality
    $(document).on('click', '.shopping-item-toggle', function(){
        $(this).parent().prev().toggleClass('shopping-item__checked')
    });

    // Delete button functionality. Deletes parent <li>
    $(document).on('click', '.shopping-item-delete', function() {
        $(this).parents('li').remove()
    });

    const $form = $('#js-shopping-list-form');
    const $textInput = $form.find('#shopping-list-entry');
    const $shoppingList = $('.shopping-list');

    // Adds item to shopping list
    $form.submit(function(event) {
        event.preventDefault();
        const value = $textInput.val();
        $shoppingList.append(`
        <li>
        <span class="shopping-item">${value}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>
      `);

      // Resets value of input to placeholder
        $textInput.val('');

    })

}(window.jQuery, window, document));