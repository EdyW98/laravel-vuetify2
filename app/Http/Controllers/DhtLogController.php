<?php

namespace App\Http\Controllers;

use App\dhtLog;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

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
            ->select("*")
            ->where(DB::raw("DATE(dateCreate)"),"$dateCreate")
            ->get();

        return response()->json($dht,200);
    }

    public function ChartVal($dateCreate)
    {
        //getting max temperature for today        
        $tempt = DB::table("dht_logs")
            ->select("temperature")
            ->where(DB::raw("DATE(dateCreate)"),"$dateCreate")
            ->get();
        $humid = DB::table("dht_logs")
            ->select("humidity")
            ->where(DB::raw("DATE(dateCreate)"),"$dateCreate")
            ->get();
        $time = DB::table("dht_logs")
            ->selectraw("TIME(dateCreate) as time")
            ->where(DB::raw("DATE(dateCreate)"),"$dateCreate")
            ->get();
        $dht = [
            'temperature' => $tempt,
            'humidity' => $humid,
            'time' => $time
        ];
        

        return response()->json($dht,200);
    }

    public function CurrenDhtVal()
    {
        //getting max humidity for today
        $dht = DB::table("dht_logs")
        ->select("temperature", "humidity")
        ->orderBy('id','desc')
        ->first();

        return response()->json($dht,200);
    }
}
