<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('login', 'UserController@login');
Route::post('register', 'UserController@register')->middleware('auth:api');
Route::put('users/{id}', 'UserController@update')->middleware('auth:api');
Route::delete('users/{id}', 'UserController@destroy')->middleware('auth:api');
Route::get('roles', 'RoleController@index')->middleware('auth:api');
Route::get('users', 'UserController@index')->middleware('auth:api');

Route::resource('/payments', 'PaymentController', [
	'only' => [
		'index', 'store'
	]
]);

Route::resource('todo', 'ToDoController')->middleware('auth:api');