<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('/', 'HomeController@index')->name("app");
//api cannot get the user information
Route::get("/api/currentUser", 'HomeController@currentUser');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::get('/{path?}', [
    'uses' => 'ReactController@show',
    'as' => 'react',
    'where' => ['path' => '.*']
]);