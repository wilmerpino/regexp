<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Clientes extends Model
{
    //

        /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'rif', 'razon_social', 'direccion', 'email', 'telefono', 'fax'
    ];
    
     public function expediente()
    {
        return $this->hasMany('App\Clientes', 'id');
    } 
}
