<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ReactController extends Controller
{
    public function show(Request $request){
        return view('home');
    }
}
