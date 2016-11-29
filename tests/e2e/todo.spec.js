module.exports = {
  'TODO LIST EXAMPLE' : function (browser) {
    browser
      .url('http://localhost:8000')
      .waitForElementVisible('body', 1000)
      .pause(3000)
      .setValue('input[type=text]', 'HOLA GDLJS')
      .pause(3000)
      .click('#addTodo')
      .pause(3000)
      .assert.containsText('#todolist', 'HOLA GDLJS')
      .end();
  }
};
