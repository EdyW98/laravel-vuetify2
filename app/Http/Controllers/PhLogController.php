<?php

namespace App\Http\Controllers;

use App\phLog;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class PhLogController extends Controller
{
    public function index()
    {
        //Get
        $ph = phLog::all();

        return response()->json($ph,200);
    }

    public function store(Request $request)
    {
        //Post
        $ph = new phLog;
        $ph->dateCreate = $request->dateCreate;
        $ph->ph = $request->ph;
        $success = $ph->save();

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
        $ph = DB::table("ph_logs")
            ->select("id","dateCreate","ph")
            ->where(DB::raw("DATE(dateCreate)"),"$dateCreate")
            ->get();

        if(is_null($ph)){
            return response()->json('Not Found',404);
        }
        else{
            return response()->json($ph,200);
        }
    }

    public function ChartVal($dateCreate)
    {
        //getting max temperature for today        
        $val = DB::table("ph_logs")
            ->select("ph")
            ->where(DB::raw("DATE(dateCreate)"),"$dateCreate")
            ->get();
        $time = DB::table("ph_logs")
            ->selectraw("TIME(dateCreate) as time")
            ->where(DB::raw("DATE(dateCreate)"),"$dateCreate")
            ->get();
        $labels = ['ph','time'];
        $ph = [
            'ph' => $val,
            'time' => $time
        ];
        

        if(is_null($ph)){
            return response()->json('Not Found',404);
        }
        else{
            return response()->json($ph,200);
        }
    }

    public function CurrentVal()
    {
        //getting max humidity for today
        $ph = DB::table("ph_logs")
        ->select("ph")
        ->orderBy('id','desc')
        ->first();

        if(is_null($ph)){
            return response()->json('Not Found',404);
        }
        else{
            return response()->json($ph,200);
        }
    }
}
