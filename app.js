// app.js
angular.module('YOUR-APP-NAME', ['auth0', 'angular-storage', 'angular-jwt'])
.config(function (authProvider) {
  authProvider.init({
    domain: 'book.eu.auth0.com',
    clientID: 'yFtHBRZ0ZNdFaWUKSIr3CJzsqR4KuqgY'
  });
})
.run(function(auth) {
  // This hooks al auth events to check everything as soon as the app starts
  auth.hookEvents();
});