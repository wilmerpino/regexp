<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

use App\Clientes;

class ClientesController extends Controller {     //     

    public function index() {
        $clientes = Clientes::orderBy('razon_social', 'ASC')->paginate(10);
        return response()->json($clientes);
        //$clientes = Clientes::orderBy('razon_social', 'ASC')->get();
        //return response()->json(["data" => $clientes, "success" => "true", "length" => count($clientes)]);
    }

    public function show($id) {
        $cliente = Clientes::find($id);
        return response()->json(["data" => $cliente, "success" => "true"]);
    }


    public function store(Request $request) {
        $validator = Validator::make($request->all(), [
            'rif' => 'required|max:15',
            'razon_social' => 'required|max:50'
        ]);

        if ($validator->fails()) {
            return Response()->json(["message" => "Error de validacion", "error" => $validator->errors(), "code" => 500], 500);
        }

       $cliente = new Clientes;
       $cliente->rif = $request->rif;
       $cliente->razon_social = $request->razon_social;
       $cliente->direccion = $request->direccion;
       $cliente->email = $request->email;
       $cliente->telefono = $request->telefono; 
       $cliente->fax = $request->fax;

       $cliente->save(); 
       return Response()->json(["message" => "Se guardo el Cliente con Id ".$cliente->id, "code" => 200], 200);
    }

     /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $cliente = Clientes::find($id);
        return response()->json(["data" => $cliente, "success" => "true"]);
    }

     /**
     * Update the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id){
        $validator = Validator::make($request->all(), [
            'id' => 'required',
            'rif' => 'required|max:15',
            'razon_social' => 'required|max:50'
        ]);

        if ($validator->fails()) {
            return Response()->json(["message" => "Error de validacion", "error" => $validator->errors(), "code" => 500], 500);
        }

        $cliente = Clientes::find($id);

        $cliente->rif = $request->rif;
        $cliente->razon_social = $request->razon_social;
        $cliente->direccion = $request->direccion;
        $cliente->email = $request->email;
        $cliente->telefono = $request->telefono; 
        $cliente->fax = $request->fax;

        $cliente->save();

        return Response()->json(["message" => "Se actualizo el Cliente ".$cliente->razon_social, "code" => 200], 200);
    }

    public function destroy(Request $request, $id) {
        //if($req->ajax()){
        $cliente = Clientes::find($id);
        if ($cliente) {
            $cliente->delete();
            $total_clientes = Clientes::all()->count();

            return response()->json([
                        "id" => $id,
                        "total" => $total_clientes,
                        "message" => "Se ha eliminado el cliente " . $cliente->razon_social
            ]);
        } else {
            $total_clientes = Clientes::all()->count();

            return response()->json([
                        "id" => $id,
                        "total" => $total_clientes,
                        "message" => "No existe el cliente " . $id
            ], 500);
        }
        //}  
    }

}
