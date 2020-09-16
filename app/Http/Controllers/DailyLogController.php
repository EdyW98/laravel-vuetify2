<?php

namespace App\Http\Controllers;

use App\dailyLog;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class DailyLogController extends Controller
{
    public function index()
    {
        $daily = dailyLog::all();

        return response()->json($daily,200);
    }

    public function MaxDhtLastTime()
    {
        //getting max temperature for today        
        $dht = DB::table("dht_logs")
            ->selectRaw("
                temperature AS MaxTempt, dateCreate
            ")
            ->whereRaw("
                    DATE(dateCreate)=SUBDATE(CURRENT_DATE,1) AND
                    temperature = (SELECT MAX(temperature) from dht_logs WHERE DATE(dateCreate)=SUBDATE(CURRENT_DATE,1))
                ")
            ->first();        

        return response()->json($dht,200);
    }

    public function MinDhtLastTime()
    {
        //getting max temperature for today        
        $dht = DB::table("dht_logs")
            ->selectRaw("
                temperature AS MInTempt, dateCreate
            ")
            ->whereRaw("
                    DATE(dateCreate)=SUBDATE(CURRENT_DATE,1) AND
                    temperature = (SELECT MIN(temperature) from dht_logs WHERE DATE(dateCreate)=SUBDATE(CURRENT_DATE,1))
                ")
            ->first();        

        return response()->json($dht,200);
    }

    public function IterationVal()
    {
        //getting the value used for iteration
        $Max = DB::table("daily_logs")
            ->select("AvgTemperature","AvgHumidity","AvgPh","AvgSoil","created_at")
            ->orderBy('created_at', 'desc')
            ->first();        

        return response()->json($Max,200);
    }

    public function CriteriaVal()
    {
        //getting the value used for weight       
        $Min = DB::table("daily_logs")
            ->select("MaxTemperature","MaxHumidity","MaxPh","MaxSoil","MinTemperature","MinHumidity","MinPh","MinSoil")
            ->orderBy('created_at', 'desc')
            ->first();

        return response()->json($Min,200);
    }
}
