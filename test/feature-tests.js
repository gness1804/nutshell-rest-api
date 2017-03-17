/* eslint-disable */
const assert = require('assert');
const webdriver = require('selenium-webdriver');
const test = require('selenium-webdriver/testing');

const driver = new webdriver.Builder()
  .forBrowser('chrome')
  .build()

test.describe('App', function () {

  this.timeout(15000)

  test.beforeEach(function() {
    driver.get('http://localhost:3000');
  });

  test.it('application should serve up the index html when user visits it', function () {
     driver.findElement({tagName: 'h1'}).then(function (title) {
       return title.getText()
     }).then(function (text) {
       assert.strictEqual(text, 'People Search');
     })
   })

   test.it('application should serve up a button on load', function () {
     const button = driver.findElements({tagName: 'button'}).then(function(button) {
     assert.equal(button.length, 1)
     })
   })

   test.it('the button should display the correct text', function () {
     driver.findElement({id: 'main-button'}).then(function (button) {
     return button.getText()
      }).then(function (text) {
     assert.strictEqual(text, 'Get People!');
      })
   })

   test.it('should serve the correct data when the user presses the Get People button', function () {
     const button = driver.findElement({id: 'main-button'})
     button.click()
     setTimeout(() => {
       const h2 = driver.findElements({tagName: 'h2'}).then(function(header) {
         assert.equal(header.length, 5)
       })
     }, 20000);
   })

})
