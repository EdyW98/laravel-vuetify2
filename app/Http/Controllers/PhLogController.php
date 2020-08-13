<?php

namespace App\Http\Controllers;

use App\phLog;
use Illuminate\Http\Request;

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
            ->where(DB::raw("DATE(dateCreate)"),"CURRENT_DATE-$dateCreate")
            ->get();

        if(is_null($ph)){
            return response()->json('Not Found',404);
        }
        else{
            return response()->json($ph,200);
        }
    }
}
