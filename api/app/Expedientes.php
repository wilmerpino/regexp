<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Expedientes extends Model
{
    //
    protected $fillable = [
        'id_cliente', 
        'num_expediente', 
        'id_institucion', 
        'sala',
        'nombre_causa', 
        'descripcion', 
        'fecha_expediente'
    ];
    
    public function institucion()
    {
        return $this->hasOne('App\Instituciones', 'id', 'id_institucion');
    }    
    
    public function cliente()
    {
        return $this->hasOne('App\Clientes', 'id', 'id_cliente');
    } 
}
