<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SeguimientosController extends Controller
{
    
    public function index(){
        //$clientes = Clientes::orderBy('razon_social', 'ASC')->paginate();
        //return view("clientes", compact('clientes'));
        return view("seguimientos");
    }
}
