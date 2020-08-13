<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class soilLog extends Model
{
    protected $table = 'soil_logs';
    protected $primarykey = 'id';
    public $timestamps = false;
    protected $fillable = ['dateCreate', 'soilMoisture'];
}
