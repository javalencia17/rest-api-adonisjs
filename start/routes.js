'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')

Route.group(() => {
    Route.post('login','AuthController.login');
    //Route.post('register','AuthController.register').validator('StoreUser');
    Route.post('register','AuthController.register');
    // Route.resource('Books','BookController').middleware(['auth:api'])
    // .validator(new Map([
    //     ['Books.store' , 'StoreBook'],
    //     ['Books.update' , 'UpdateBook'],
    // ]));
    Route.resource('Books','BookController').middleware(['auth:api']);
    

    Route.get('profile','AuthController.profile').middleware(['auth:api']);

    Route.get('revokeUserToken','AuthController.revokeUserToken').middleware(['auth:api'])

}).prefix('api/v1');

Route.group(() => {
    Route.resource('Books','V2/BookController').middleware(['auth:api']);

    Route.get('books/paginated/:offset','V2/BookController.paginated').middleware(['auth:api']);

}).prefix('api/v2');
