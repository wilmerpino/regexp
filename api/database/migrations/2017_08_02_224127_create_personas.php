<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePersonas extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('personas', function (Blueprint $table) {
                        $table->increments('id')->unsigned;
            $table->string('razon_social', 100);
            $table->string("rif", 12);
            $table->string("direccion", 255)->nullable();
            $table->string("telefono", 15)->nullable();
            $table->string("fax", 15)->nullable();
            $table->string("email", 30)->nullable();
            $table->enum("status", ['true', 'false'])->default('true');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('personas');
    }
}
