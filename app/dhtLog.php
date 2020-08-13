<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class dhtLog extends Model
{
    protected $table = 'dht_logs';
    protected $primarykey = 'id';
    public $timestamps = false;
    protected $fillable = ['dateCreate', 'temperature', 'humidity'];
}
