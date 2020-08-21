<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDailyLogsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('daily_logs', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->float('AvgTemperature');
            $table->float('AvgHumidity');
            $table->float('AvgPh');
            $table->float('AvgSoil');
            $table->float('MaxTemperature');
            $table->float('MaxHumidity');
            $table->float('MaxPh');
            $table->float('MaxSoil');
            $table->float('MinTemperature');
            $table->float('MinHumidity');
            $table->float('MinPh');
            $table->float('MinSoil');
            $table->date('created_at');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('daily_logs');
    }
}
