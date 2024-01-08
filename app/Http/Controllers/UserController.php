<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class UserController extends Controller
{
    

       public function login(Request $request){

        $user_email = $request->email;
        $user_password = $request->password;

        if(empty($user_email) || empty($user_password)){

            return response()->json([
                'status' => false,
                'msg' => 'input empty'
            ]) ;

        }

        $User = User::where('email',$user_email)->first();

        if(empty($User->email)){
            return response()->json([
                'status' => false,
                'msg' => 'user not exist'
            ]);
        }
    
       if(!Hash::check($request->password,$User->password)){
            return response()->json([
                'status' => false,
                'msg' => 'incorrect mail or password'
            ]);
       }
       
    
       return response()->json([
        'status' => true,
        'msg' => 'user connected',
        'user' => $User
       ]);
       
    } 


    public function register(Request $request){
        return 'i the fucntion regsiter';
    }

    public function getUserSubejects(Request $request){
        $idUser = $request->idUser;
        $Subjects = User::find($idUser)->subjects()->get();
        return response()->json([
            'subjects'=> $Subjects
        ]);
    }
}
