<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Expedientes;
use App\Clientes;

class ExpedientesClientesController extends Controller
{
     public function index() {
        $clientes = Clientes::orderBy('razon_social', 'ASC')->with('expediente')->get();
        return response()->json(["data" => $clientes, "success" => "true", "length" => count($clientes)]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //$expedientes = Expedientes::where('id_cliente', $id)->orderBy('nombre_causa')->get();
        $expedientes = Expedientes::where('id_cliente', $id)->orderBy('nombre_causa')->with('institucion')->with('cliente')->get();
        return response()->json(["data" => $expedientes, "success" => "true"]);
    }
}
