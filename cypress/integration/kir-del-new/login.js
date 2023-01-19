describe('Тестируем форму логина', function () {
   it('Позитивный кейс на правильный логин и пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton > .exitIcon').click();
        cy.contains('Форма логина')
    })
})

describe('Тестируем восстановление пароля', function () {
    it('Позитивный кейс на проверку восстановления пароля', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#forgotEmailButton').click();
         cy.get('#mailForgot').type('german@dolnikov.ru');
         cy.get('#restoreEmailButton').click();
         cy.contains('Успешно отправили пароль на e-mail');
         cy.get('#exitMessageButton > .exitIcon').click();
         cy.contains('Форма логина')
     })
 })

 describe('Тестируем форму авторизации', function () {
    it('Негативный кейс входа с некорректным паролем', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('german@dolnikov.ru');
         cy.get('#pass').type('idontLoveqastudio1');
         cy.get('#loginButton').click();
         cy.get('#messageHeader').contains('Такого логина или пароля нет');
         cy.get('#exitMessageButton > .exitIcon').click();
         cy.contains('Форма логина')
     })
 })

 describe('Тестируем форму авторизации', function () {
    it('Негативный кейс входа с некорректным логином', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('german123@dolnikov.ru');
         cy.get('#pass').type('iLoveqastudio1');
         cy.get('#loginButton').click();
         cy.get('#messageHeader').contains('Такого логина или пароля нет');
         cy.get('#exitMessageButton > .exitIcon').click();
         cy.contains('Форма логина')
     })
 })
 
 describe('Тестируем форму авторизации', function () {
    it('Негативный кейс входа, ошибка валидации', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('germandolnikov.ru');
         cy.get('#pass').type('iLoveqastudio1');
         cy.get('#loginButton').click();
         cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
         cy.get('#exitMessageButton > .exitIcon').click();
         cy.contains('Форма логина')
     })
 })

 describe('Тестируем форму авторизации', function () {
    it('Позитивный кейс, приведение к строчным буквам', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('GerMan@Dolnikov.ru');
         cy.get('#pass').type('iLoveqastudio1');
         cy.get('#loginButton').click();
         cy.get('#messageHeader').contains('Авторизация прошла успешно');
         cy.get('#exitMessageButton > .exitIcon').click();
         cy.contains('Форма логина')
     })
 })






