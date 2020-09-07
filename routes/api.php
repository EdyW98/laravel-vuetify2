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
Route::get('/dhtchart/{dateCreate}','DhtLogController@ChartVal');
Route::get('/currentdht','DhtLogController@CurrentVal');
Route::post('/dht','DhtLogController@store');

//api ph
Route::get('/ph','PhLogController@index');
Route::get('/ph/{dateCreate}','PhLogController@show');
Route::get('/phchart/{dateCreate}','PhLogController@ChartVal');
Route::get('/currentph','PhLogController@CurrentVal');
Route::post('/ph','PhLogController@store');

//api soil moisture
Route::get('/soil','SoilLogController@index');
Route::get('/soil/{dateCreate}','SoilLogController@show');
Route::get('/soilchart/{dateCreate}','SoilLogController@ChartVal');
Route::get('/currentsoil','SoilLogController@CurrentVal');
Route::post('/soil','SoilLogController@store');

//api daily logs
Route::get('/daily','DailyLogController@index');
Route::get('/maxdhtpast','DailyLogController@MaxDhtLastTime');
Route::get('/mindhtpast','DailyLogController@MInDhtLastTime');
Route::get('/iterationval','DailyLogController@IterationVal');
Route::get('/weightval','DailyLogController@WeightVal');

//etc
Route::get('/settingname/{name}','SettingsController@show');
Route::put('/updatesettings/{name}','SettingsController@update');