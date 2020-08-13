<?php

use Illuminate\Http\Request;

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

//api dht
Route::get('/dht','DhtLogController@index');
Route::get('/dht/{dateCreate}','DhtLogController@show');
Route::get('/dhtmaxtempt','DhtLogController@maxTemptVal');
Route::get('/dhtmaxhumid','DhtLogController@maxHumidVal');
Route::post('/dht','DhtLogController@store');

//api ph
Route::get('/ph','PhLogController@index');
Route::get('/ph/{dateCreate}','PhLogController@show');
Route::post('/ph','PhLogController@store');

//api soil moisture
Route::get('/soil','SoilLogController@index');
Route::get('/soil/{dateCreate}','SoilLogController@show');
Route::post('/soil','SoilLogController@store');