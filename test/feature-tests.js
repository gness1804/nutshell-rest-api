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
         assert.equal(header.length, 5, 'There are the right number of headers.')
       })
       const email = driver.findElements({className: 'email'}).then(function(email) {
         assert.equal(email.length, 5, 'There are the right number of email fields.')
       })
       const signup = driver.findElements({className: 'signup'}).then(function(signup) {
         assert.equal(signup.length, 5, 'There are the right number of signup fields.')
       })
       driver.findElement({tagName: 'h2'}).then(function (header) {
       return header.getText()
        }).then(function (text) {
       assert.match(text, /Name+/, 'The Name field exists.');
        })
        driver.findElements({className: 'email'}).then(function (email) {
        return email.getText()
         }).then(function (text) {
        assert.match(text, /Email+/, 'The Email field exists.');
         })
         driver.findElements({className: 'signup'}).then(function (signup) {
         return signup.getText()
          }).then(function (text) {
         assert.match(text, /Signup Date+/, 'The Signup Date field exists.');
          })
          driver.findElements({className: 'email'}).then(function (email) {
          return email.getText()
           }).then(function (text) {
          assert.notMatch(text, /null+/, 'No null appears in the email field.');
           })
           driver.findElements({className: 'email'}).then(function (email) {
           return email.getText()
            }).then(function (text) {
           assert.notMatch(text, /undefined+/, 'No undefined appears in the email field.');
            })
     }, 20000);
   })

})
