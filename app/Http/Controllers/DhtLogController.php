<?php

namespace App\Http\Controllers;

use App\dhtLog;
use Illuminate\Http\Request;

class DhtLogController extends Controller
{
    public function index()
    {
        //Get
        $dht = dhtLog::all();

        return response()->json($dht,200);
    }

    public function store(Request $request)
    {
        //Post
        $dht = new dhtLog;
        $dht->dateCreate = $request->dateCreate;
        $dht->temperature = $request->temperature;
        $dht->humidity = $request->humidity;
        $success = $dht->save();

        if(!$success){
            return response()->json('Error Saving',500);
        }
        else{
            return response()->json('success',201);
        }
    }

    public function show($dateCreate)
    {
        //Get dht data by date
        $dht = DB::table("dht_logs")
            ->select("id","dateCreate","temperature","humidity")
            ->where(DB::raw("DATE(dateCreate)"),"$dateCreate")
            ->get();

        if(is_null($dht)){
            return response()->json('Not Found',404);
        }
        else{
            return response()->json($dht,200);
        }
    }

    public function maxTemptVal()
    {
        //getting max temperature for today
        $dht =  DB::table("dht_logs")
        ->select("id","dateCreate","temperature")
        ->where([
            ["temperature","=",DB::raw("(SELECT MAX(temperature) FROM dht_logs WHERE DATE(dateCreate)=CURRENT_DATE)")],
            [DB::raw("DATE(dateCreate)"),"=",DB::raw("CURRENT_DATE")]
        ])
        ->get();

        return response()->json($dht,200);
    }

    public function maxHumidVal()
    {
        //getting max humidity for today
        $dht = DB::table("dht_logs")
        ->select("id","dateCreate","humidity")
        ->where([
            ["humidity","=",DB::raw("(SELECT MAX(humidity) FROM dht_logs WHERE DATE(dateCreate)=CURRENT_DATE)")],
            [DB::raw("DATE(dateCreate)"),"=",DB::raw("CURRENT_DATE")]
        ])
        ->get();

        return response()->json($dht,200);
    }
}
