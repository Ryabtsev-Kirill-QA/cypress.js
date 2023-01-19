describe('Тестируем покупку на сайте', function () {
    it('Позитивный кейс на покупку из корзины', function () {
         cy.visit('https://testqastudio.me/');
         cy.get('.post-11342 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').click();
         cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase > svg').click();
         cy.wait(3000);
         cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase > svg').click();
         cy.wait(3000);
         cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
         cy.get('.cart-panel-content > .modal-header > .close-account-panel > .razzi-svg-icon > svg > [x1="6"]').click();
         cy.get('.header-left-items > .site-branding > .logo > .logo-dark').click();
         cy.get('.post-11337 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').click();
         cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
         cy.wait(3000);
         cy.get('.checkout').click();
         cy.get('#billing_first_name').type('Кирилл');
         cy.get('#billing_last_name').type('Рябцев');
         cy.get('#billing_address_1').type('3, Строителей');
         cy.get('#billing_address_2').type('5 этаж');
         cy.get('#billing_city').type('Санкт-Петербург');
         cy.get('#billing_state').type('Санкт-Петербург');
         cy.get('#billing_postcode').type('1900000');
         cy.get('#billing_phone').type('89968542365');
         cy.get('#billing_email').type('rarti@mail.ru');
         cy.get('#order_comments').type('после 6 удобнее');
         cy.get('#place_order').click();
         cy.contains('Ваш заказ принят. Благодарим вас.')
     })
 })


 