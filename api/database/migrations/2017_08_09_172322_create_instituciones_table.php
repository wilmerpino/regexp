<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateInstitucionTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('instituciones', function (Blueprint $table) {
            $table->increments('id');
            $table->enum("tipo", ['Administrativo', 'Judicial'])->nullable();
            $table->integer("numero");
            $table->string("ciudad", 30)->nullable();
            $table->string("direccion", 100);
            $table->string("juez", 50);
            $table->string("telefono", 15);
            $table->string("fax", 15);
            $table->string("email", 50);
            $table->enum("materia", ['Mercantil', 'Laboral', 'Penal', 'Civil', 'Contensioso Administrativo', 'Transito', 'Financiero', 'Protección' ])->nullable();
            $table->timestamps();
            
             $table->index(['numero', 'ciudad']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('instituciones');
    }
}
