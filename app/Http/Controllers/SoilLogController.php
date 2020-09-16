<?php

namespace App\Http\Controllers;

use App\soilLog;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SoilLogController extends Controller
{
    public function index()
    {
        //Get
        $soil = soilLog::all();

        return response()->json($soil,200);
    }

    public function store(Request $request)
    {
        //Post
        $soil = new soilLog;
        $soil->dateCreate = $request->dateCreate;
        $soil->soilMoisture = $request->soilMoisture;
        $success = $soil->save();

        if(!$success){
            return response()->json('Error Saving',500);
        }
        else{
            return response()->json('success',201);
        }

    }

    public function show($dateCreate)
    {
        //Get By Date
        $soil = DB::table("soil_logs")
            ->select("*")
            ->where(DB::raw("DATE(dateCreate)"),"$dateCreate")
            ->get();

        return response()->json($soil,200);
    }

    public function ChartVal($dateCreate)
    {
        //getting max temperature for today        
        $val = DB::table("soil_logs")
            ->select("soilMoisture")
            ->where(DB::raw("DATE(dateCreate)"),"$dateCreate")
            ->get();
        $time = DB::table("soil_logs")
            ->selectraw("TIME(dateCreate) as time")
            ->where(DB::raw("DATE(dateCreate)"),"$dateCreate")
            ->get();
        $soil = [
            'soil' => $val,
            'time' => $time
        ];
        
        return response()->json($soil,200);
    }

    public function CurrentSoilVal()
    {
        //getting max humidity for today
        $soil = DB::table("soil_logs")
        ->select("soilMoisture")
        ->orderBy('id','desc')
        ->first();

        return response()->json($soil,200);
    }
}
