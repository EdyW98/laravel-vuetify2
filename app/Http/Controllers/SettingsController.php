<?php

namespace App\Http\Controllers;

use App\Settings;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SettingsController extends Controller
{
    public function update(Request $request, $id)
    {
        $settingsValue = $request->settingsValue;

        $State = Settings::find($id);
        $State->settingsValue = $settingsValue;
        $success = $State->save();

        if(!$success){
            return response()->json('Error Saving',500);
        }
        else{
            return response()->json('success',201);
        }
    }

    public function show($settingsName)
    {
        //Get dht data by date
        $dht = DB::table("settings")
            ->select("settingsName","values")
            ->where("settingsName","$settingsName")
            ->get();

        if(is_null($dht)){
            return response()->json('Not Found',404);
        }
        else{
            return response()->json($dht,200);
        }
    }
}
