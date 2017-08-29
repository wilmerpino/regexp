<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateExpedientesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('expedientes', function (Blueprint $table) {
            $table->increments('id');
            $table->string("num_expediente", 20)->nullable();
            $table->integer("id_cliente")->nullable();
            $table->integer("id_institucion");
            $table->string("nombre_causa", 50)->nullable();           
            $table->string("descripcion", 190);  
            $table->dateTimeTz('fecha_expediente')->nullable();
            $table->integer("creado_por")->nullable();
            $table->timestamps();
            
            $table->index(['id_cliente', 'id_tribunal', 'materia']);
            
            $table->unique("num_expediente");
            $table->foreign('id_cliente')
                ->references('id')->on('clientes')
                ->onDelete('restrict');
            
            $table->foreign('id_institucion')
                ->references('id')->on('institucion')
                ->onDelete('restrict');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('expedientes');
    }
}
