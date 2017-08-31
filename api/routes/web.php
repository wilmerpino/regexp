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


//Route::get('/home', 'HomeController@index')->name('home');
Route::get('/', function () {
    return view('welcome');
});

//Auth::routes();

Route::post('login', 'ApiAuthController@UserAuth')->middleware('cors');

Route::group(['middleware' => 'cors', 'middleware' => 'jwt.auth'], function(){
	Route::get('user', 'ApiAuthController@getAuthUser');
	Route::get('clientes/{search}/find', 'ClientesController@find');
	Route::resource('clientes', 'ClientesController');
	Route::resource('expedientes', 'ExpedientesController');
	Route::resource('dependencias', 'DependenciasController');
	Route::resource('expedientes-instituciones', 'ExpedientesInstitucionController', ['only' => ['index']]);
	Route::resource('expedientes-clientes', 'ExpedientesClientesController', ['only' => ['index', 'show']]);

});

