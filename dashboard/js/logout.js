const Backendless = require('backendless')
/*
 Or use `import Backendless from 'backendless'` for client side.
 If you don't use npm or yarn to install modules, you can add the following line
 <script src="//api.backendless.com/sdk/js/latest/backendless.min.js"></script>
 to your index.html file and use the global Backendless variable.
*/

Backendless.initApp('YOUR_APP_ID', 'YOUR_JS_API_KEY')

const checkIsUserLoginValid = () => {
  return Backendless.UserService.isValidLogin()
    .then(isValidLogin => console.log(`Is user logged in? - ${ isValidLogin }`))
}

const logoutUser = () => {
  console.log('Logging user out')

  return Backendless.UserService.logout()
}

const onError = error => {
  console.error('Server reported an error: ', error.message)
  console.error('error code: ', error.code)
  console.error('http status: ', error.status)
}

console.log('Logging user in')
Backendless.UserService.login('spidey@backendless.com', 'greeng0blin')
  .then(checkIsUserLoginValid)
  .then(logoutUser)
  .then(checkIsUserLoginValid)
  .catch(onError)
