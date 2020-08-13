<?php

namespace App\Http\Controllers;

use App\soilLog;
use Illuminate\Http\Request;

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
            ->select("id","dateCreate","soilMoisture")
            ->where(DB::raw("DATE(dateCreate)"),"CURRENT_DATE-$dateCreate")
            ->get();

        if(is_null($soil)){
            return response()->json('Not Found',404);
        }
        else{
            return response()->json($soil,200);
        }
    }
}
