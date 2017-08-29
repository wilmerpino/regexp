<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Instituciones extends Model
{
    //
    protected $fillable = [
        'numero',
        'tipo',
        'ciudad',
        'direccion',
        'materia',
        'juez',
        'telefono',
        'fax',
        'logo',
        'email'
    ];
    
     public function expediente()
    {
        return $this->hasOne('App\Expedientes', 'id_institucion');
    } 
}
