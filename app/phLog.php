<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class phLog extends Model
{
    protected $table = 'ph_logs';
    protected $primarykey = 'id';
    public $timestamps = false;
    protected $fillable = ['dateCreate', 'ph'];
}
