<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;


class ApiAuthController extends Controller
{
    //
    public function UserAuth(Request $request){
    	$credencials = $request->only('email', 'password');
    	$token = null;

    	try {
    		if(!$token = JWTAuth::attempt($credencials)){
    			return Response()->json(['error' => 'Ivalid credencials!!!', 'code' => 500, 'success' => false], 500);
    		}
    	} catch (JWTException $e) {
    		return Response()->json(['error' => 'Someting wrong!!!', 'code' => 500, 'success' => false], 500);
    	}

        $user = JWTAuth::toUser($token);
    	return (compact('token', 'user'));
    }

    public function getAuthUser(Request $request){
        $user = JWTAuth::toUser($request->token);
        return response()->json(['result' => $user]);
    }
}
