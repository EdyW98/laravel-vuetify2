<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class dailyLog extends Model
{
    protected $table = 'daily_logs';
    protected $primarykey = 'id';
    public $timestamps = false;
    protected $fillable = [
        'AvgTemperature', 'AvgHumidity', 'AvgPh', 'AvgSoil',
        'MaxTemperature', 'MaxHumidity', 'MaxPh', 'MaxSoil',
        'MinTemperature', 'MinHumidity', 'MinPh', 'MinSoil'
    ];
}
