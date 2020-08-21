<?php

namespace App\Http\Controllers;

use App\dhtLog;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class DhtLogController extends Controller
{
    public function index()
    {
        //mengambil data secara keseluruhan
        $dht = dhtLog::all();

        return response()->json($dht,200);
    }

    public function store(Request $request)
    {
        //mengirim data ke database
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
        //mengambil data berdasarkan date
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

    public function ChartVal($dateCreate)
    {
        //mengambil data untuk chart      
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
        $labels = ['temperture','jumidity','time'];
        $dht = [
            'temperature' => $tempt,
            'humidity' => $humid,
            'time' => $time
        ];
        

        if(is_null($dht)){
            return response()->json('Not Found',404);
        }
        else{
            return response()->json($dht,200);
        }
    }

    public function CurrentVal()
    {
        //mendapatkan nilai saat ini
        $dht = DB::table("dht_logs")
        ->select("temperature", "humidity")
        ->first();

        if(is_null($dht)){
            return response()->json('Not Found',404);
        }
        else{
            return response()->json($dht,200);
        }
    }
}
